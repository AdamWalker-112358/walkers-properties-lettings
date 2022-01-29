import React from "react";
import Layout from "../components/layout";
import Section from "../components/section";
import { graphql } from "gatsby";


const BlogPage = ({data})=>{return(
    <div>
        <Layout pageTitle="Blog Page">
            <Section>
                <p>{data.allFile.nodes.map( node => node.name)}</p>
            </Section>


        </Layout>
    </div>
)}

export const query = graphql`
query  {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage