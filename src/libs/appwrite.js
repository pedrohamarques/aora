import { Client, Account } from "react-native-appwrite";
// Init your React Native SDK
const client = new Client();

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.pedro.aora",
    projectId: "663d22df003800a8a0fc",
    databaseId: "663d24250033ad1cb4a0",
    userCollectionId: "663d244f0000df98e1e7",
    videosCollectionId: "663d246a0030bba05af5",
    storageId: "663d2599003b328a7565",
};

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export function createUser() {
    account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
        function (response) {
            console.log(response);
        },
        function (error) {
            console.log(error);
        },
    );
}
