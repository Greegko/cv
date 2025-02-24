import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dynamoDB = DynamoDBDocumentClient.from(new DynamoDB());
const dataFilePath = path.join(__dirname, "data.json");

let jsonData;
try {
  jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
} catch (error) {
  console.error("Error reading data.json:", error);
  jsonData = { message: "Error reading data." };
}

export const handler = async event => {
  const accessKey = event.queryStringParameters?.access_key;

  if (!accessKey) {
    return {
      statusCode: 400,
      body: JSON.stringify("No key provided"),
    };
  }

  try {
    const keyResponse = await dynamoDB.send(
      new GetCommand({
        TableName: "AccessKeys",
        Key: { accessKey: accessKey },
      }),
    );

    if (!keyResponse.Item) {
      await logAccess(accessKey, "Access Denied");
      return {
        statusCode: 403,
        body: JSON.stringify("Invalid key"),
      };
    }

    await logAccess(accessKey, "Access Granted");

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
  const logId = randomUUID();
  const timestamp = new Date().toISOString();

  await dynamoDB.send(
    new PutCommand({
      TableName: "AccessLogs",
      Item: {
        log_id: logId,
        timestamp: timestamp,
        key: key,
        info: info,
      },
    }),
  );
};
