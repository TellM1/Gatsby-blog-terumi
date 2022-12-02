// src/pages/index.js
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
// import Header from "../components/header"
import Navbar from "../components/navbar"
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ data }) {
  return (
    <Layout>
      {/* <Header /> */}
      <Navbar />
      <Hero />
      {data.allContentfulBlogPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
    query allContentfulPost {
      allContentfulBlogPost {
        edges {
          node {
            title
            image {
              title
              file {
                url
              }
            }
            description {
              description
            }
            slug
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
`