import React from 'react';

import CutItem from "../components/cutItem"

import { CutComments } from "../components/common"

import { graphql } from "gatsby"

const CutTemplate = (props) => {
    return (
        <section>
            <CutItem
                cutImage={props.data.cut.localImage.childImageSharp.fixed}
                client={props.data.cut.client}
                barberName={props.data.cut.barber.name}
                summary={props.data.cut.summary} />
            <CutComments />
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