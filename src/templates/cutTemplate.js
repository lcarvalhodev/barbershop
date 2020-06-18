import React from 'react';

import Layout from "../components/layout"

import CutItem from "../components/cutItem"

import { graphql } from "gatsby"

const CutTemplate = (props) => {
    console.log(props.data);
    return (
        <section>
            <CutItem
                cutImage={props.data.cut.localImage.childImageSharp.fixed}
                client={props.data.cut.client}
                barberName={props.data.cut.barber.name}
                summary={props.data.cut.summary} />
        </section>
    )

}

export const query = graphql`

    query CutQuery($cutId: String!) {
        cut(id: {eq: $cutId}){
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

`;

export default CutTemplate