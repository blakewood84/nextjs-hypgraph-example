import { gql } from "graphql-request";
import { client } from "../../client";
import { BlogPath } from "../types";

export async function getBlogPaths() {
  const query = gql`
    query BlogPosts {
      blogPosts {
        id
        title
      }
    }
  `;

  const data: any = await client.request(query);
  const paths: BlogPath[] = data.blogPosts;

  return paths;
}
