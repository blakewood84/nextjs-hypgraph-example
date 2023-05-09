import { gql } from "graphql-request";
import { parser } from "@/lib/parser";
import { client } from "@/api/client";
import { BlogPost } from "../types";

export async function getBlogPost(id: string) {
  const query = gql`
    query BlogPosts {
      blogPost(where: { id: "${id}" }) {
        title
        id
        body
        createdAt
        updatedAt
      }
    }
  `;

  const data: any = await client.request(query);

  const content = await parser(data.blogPost.body);

  const post: BlogPost = Object.assign(data.blogPost, { body: content.value });

  return post;
}
