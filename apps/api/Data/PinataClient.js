const { PinataSDK } = require("pinata");
const fs = require("fs");
require("dotenv").config();

class PinataClient {
  constructor() {
    this.pinata = new PinataSDK({
      pinataJwt: process.env.PINATA_JWT,
      pinataGateway: process.env.GATEWAY_URL,
    });
  }

  async upload(fileContent, fileName) {
    try {
      const file = new File([fileContent], fileName);
      const upload = await this.pinata.upload.file(file);
      console.log("uploaded succesfully");
    } catch (error) {
      console.log(error);
    }
  }

  async getAllFiles() {
    const files = await this.pinata.gateway.get();
    return files;
  }
}

const pinataClient = new PinataClient();

module.exports = pinataClient;
