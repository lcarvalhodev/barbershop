import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import CutItem from "../components/cutItem"

const IndexPage = (props) => {

  console.log(props);
  return (
    < Layout >
      {
        props.data.allCut.edges.map(edge => (
          <CutItem key={edge.node.id}>
            <h2>
              {edge.node.client} - <small>{edge.node.barber.name}</small>
            </h2>
            <Link to={`/cut/${edge.node.id}`}>
              Join Conversation
          </Link>
          </CutItem>
        ))
      }
    </Layout >
  );
}

export const query = graphql`
{
  allCut {
    edges {
      node {
        barber {
          name
        }
        client
        id
        summary
      }
    }
  }
}
`;

export default IndexPage
