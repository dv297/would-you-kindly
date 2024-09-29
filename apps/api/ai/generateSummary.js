const {
  BedrockRuntimeClient,
  ConverseCommand,
} = require("@aws-sdk/client-bedrock-runtime");

const AWS_REGION = "us-east-1";
const MODEL_ID = "cohere.command-r-v1:0";
const client = new BedrockRuntimeClient({ region: AWS_REGION });

const main = async () => {
  // Start a conversation with the user message.
  const userMessage =
    "Describe the purpose of a 'hello world' program in one line.";
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

    console.log(responseText);
  } catch (err) {
    console.log(`ERROR: Can't invoke '${MODEL_ID}'. Reason: ${err}`);
    process.exit(1);
  }
};

module.exports = main;
