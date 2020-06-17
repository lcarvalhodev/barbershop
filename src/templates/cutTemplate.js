import React from 'react';

import Layout from "../components/layout"

const CutTemplate = (props) => {
    return (
        <Layout>
            <h2>
                {props.pageContext.client} - <small>{props.pageContext.barber.name}</small>
            </h2>
            <p>
                Conteúdo sobre o corte, a definir com cliente.
            </p>
        </Layout>
    )

}

export default CutTemplate