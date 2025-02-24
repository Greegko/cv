import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DocumentClient } from "@aws-sdk/lib-dynamodb";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const dynamoDB = new DocumentClient({ client: new DynamoDB() });
const dataFilePath = path.join(__dirname, "data.json");

let jsonData;
try {
  jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
} catch (error) {
  console.error("Error reading data.json:", error);
  jsonData = { message: "Error reading data." };
}

export const handler = async event => {
  const providedKey = event.key;

  if (!providedKey) {
    return {
      statusCode: 400,
      body: JSON.stringify("No key provided"),
    };
  }

  try {
    const keyResponse = await dynamoDB.get({
      TableName: "AccessKeys",
      Key: { api_key: providedKey },
    });

    if (!keyResponse.Item) {
      await logAccess(providedKey, "Access Denied");
      return {
        statusCode: 403,
        body: JSON.stringify("Invalid key"),
      };
    }

    await logAccess(providedKey, "Access Granted");

    return {
      statusCode: 200,
      body: JSON.stringify(jsonData),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify("Internal Server Error"),
    };
  }
};

const logAccess = async (key, info) => {
  const logId = uuidv4();
  const timestamp = new Date().toISOString();

  await dynamoDB.put({
    TableName: "AccessLogs",
    Item: {
      log_id: logId,
      timestamp: timestamp,
      key: key,
      info: info,
    },
  });
};
