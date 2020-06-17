import React from 'react';

import Layout from "../components/layout"

import CutItem from "../components/cutItem"

const CutTemplate = (props) => {
    console.log(props)
    return (
        <Layout>
            <CutItem>
                <h2>
                    {props.pageContext.client} - <small>{props.pageContext.barber.name}</small>
                </h2>
                <p>
                    {props.pageContext.summary}
                </p>
            </CutItem>
        </Layout>
    )

}

export default CutTemplate