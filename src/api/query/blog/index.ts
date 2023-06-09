import { gql } from "graphql-request";
import { client } from "../../client";
import { BlogPath, BlogPost } from "./types";
import { parser } from "@/lib/parser";
import { cache } from "react";

export const getBlogPaths = cache(async () => {
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
});

export const getBlogPost = cache(async (id: string) => {
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
});
