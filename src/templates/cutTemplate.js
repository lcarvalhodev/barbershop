import React from 'react';

import Layout from "../components/layout"

import CutItem from "../components/cutItem"

const CutTemplate = (props) => {
    console.log(props)
    return (
        <Layout>
            <CutItem
                client={props.pageContext.client}
                barberName={props.pageContext.barber.name}
                summary={props.pageContext.summary} />
        </Layout>
    )

}

export default CutTemplate