import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import CutItem from "../components/cutItem"

import styled from 'styled-components'


const LinkButton = styled.div`
  text-align: right;

  a {
    padding: 8px;
    background: rebeccaPurple;
    color: white;
    border-radius: 8px;

    &:hover{
      background: indigo;
    }
  }
`

const IndexPage = (props) => {

  console.log(props);
  return (
    < section >
      {
        props.data.allCut.edges.map(edge => (
          <CutItem
            cutImage={edge.node.localImage.childImageSharp.fixed}
            client={edge.node.client}
            barberName={edge.node.barber.name}
            summary={edge.node.summary}
            key={edge.node.id}>
            <LinkButton>
              <Link to={`/cut/${edge.node.id}`}>
                Join Conversation
              </Link>
            </LinkButton>
          </CutItem>
        ))
      }
    </section >
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
        localImage{
          childImageSharp{
            fixed(width: 200){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`;

export default IndexPage
