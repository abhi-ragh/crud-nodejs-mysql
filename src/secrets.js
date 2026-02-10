import AWS from "aws-sdk";

const secretsManager = new AWS.SecretsManager({
  region: "us-east-1",
});

export async function loadSecrets() {
  const secret = await secretsManager
    .getSecretValue({ SecretId: "nodeapp/mysql" })
    .promise();

  const creds = JSON.parse(secret.SecretString);

  process.env.DB_HOST = creds.host;
  process.env.DB_USER = creds.username;
  process.env.DB_PASSWORD = creds.password;
  process.env.DB_NAME = creds.database;
  process.env.DB_PORT = creds.port;
}
