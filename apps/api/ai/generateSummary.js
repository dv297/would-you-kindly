const {
  BedrockRuntimeClient,
  ConverseCommand,
} = require("@aws-sdk/client-bedrock-runtime");
const { ObjectId } = require("mongodb");
const { getCollection } = require("../mongo/MongoClient");

const AWS_REGION = "us-east-1";
const MODEL_ID = "cohere.command-r-v1:0";
const client = new BedrockRuntimeClient({ region: AWS_REGION });

const generateSummary = async (causeId) => {
  console.log(causeId);
  const collection = await getCollection();
  const objectId = new ObjectId(causeId);

  const entry = await collection.findOne(objectId);
  const { body, summary } = entry;

  if (summary) {
    console.log("Using cached value");
    return summary;
  }

  // Start a conversation with the user message.
  const userMessage = `You are a text summarizer. Summary the following text:
    ${body} 
    `;
  const conversation = [
    {
      role: "user",
      content: [{ text: userMessage }],
    },
  ];

  // Create a command with the model ID, the message, and a basic configuration.
  const command = new ConverseCommand({
    modelId: MODEL_ID,
    messages: conversation,
    inferenceConfig: { maxTokens: 512, temperature: 0.5, topP: 0.9 },
  });

  try {
    const response = await client.send(command);
    const responseText = response.output.message.content[0].text;

    const updateDoc = {
      $set: {
        summary: responseText,
      },
    };

    await collection.updateOne({ _id: objectId }, updateDoc);

    return responseText;
  } catch (err) {
    console.log(`ERROR: Can't invoke '${MODEL_ID}'. Reason: ${err}`);
  }

  return "";
};

module.exports = generateSummary;
