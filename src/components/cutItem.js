import React from 'react'
import styled from 'styled-components'


const CutItemWrapper = styled.section`
    border: 1px solid #ddd;
    padding: 8px;
    margin-bottom: 8px;
    background: white;

    h2{
        small{
            font-size: 14px;
            padding-left: 8px;
            font-weight: normal;
        }
    }
`;

const CutItem = ({ client, barberName, summary, children }) => {
    return (
        <CutItemWrapper>
            <h2>
                {client} <small>{barberName}</small>
            </h2>
            <p>
                {summary}
            </p>
            <div>
                {children}
            </div>
        </CutItemWrapper>
    )
}

export default CutItem;