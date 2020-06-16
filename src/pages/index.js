import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {

  console.log(props);
  return (
    < Layout >
      {
        props.data.allCut.edges.map(edge => (
          <div key={edge.node.id}>
            <h2>
              {edge.node.client} - <small>{edge.node.barber.name}</small>
            </h2>
            <Link to={`/cut/${edge.node.id}`}>
              Join Conversation
          </Link>
          </div>
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
      }
    }
  }
}
`;

export default IndexPage
