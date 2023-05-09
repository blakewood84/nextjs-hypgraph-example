import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.API_ENDPOINT as string, {
  headers: {
    Authorization: process.env.API_TOKEN as string,
  },
});
