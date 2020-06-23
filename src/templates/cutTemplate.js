import React, { useContext } from 'react';

import CutItem from "../components/cutItem"

import { CutComments } from "../components/common"

import { FirebaseContext } from "../components/Firebase"

import { graphql } from "gatsby"

const CutTemplate = (props) => {

    const { firebase } = useContext(FirebaseContext);

    return (
        < section >
            <CutItem
                cutImage={props.data.cut.localImage.childImageSharp.fixed}
                client={props.data.cut.client}
                barberName={props.data.cut.barber.name}
                summary={props.data.cut.summary} />
            {
                !!firebase &&
                <CutComments firebase={firebase} cutId={props.data.cut.id} />
            }
        </section >
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