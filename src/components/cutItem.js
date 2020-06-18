import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'


const CutItemWrapper = styled.section`
    border: 1px solid #ddd;
    padding: 8px;
    margin-bottom: 8px;
    background: white;
    display: flex;

    h2{
        small{
            font-size: 14px;
            padding-left: 8px;
            font-weight: normal;
        }
    }
`;

const BookItemImageWrapper = styled.div`
    max-width: 200px;

    img{
        max-width: 200px;
    }
`;

const BookItemContentWrapper = styled.div`
    flex-grow: 1;
    padding-left: 8px;
`;

const CutItem = ({ client, barberName, summary, cutImage, children }) => {
    return (
        <CutItemWrapper>
            <BookItemImageWrapper>
                <Img fixed={cutImage} />
            </BookItemImageWrapper>
            <BookItemContentWrapper>
                <h2>
                    {client} <small>{barberName}</small>
                </h2>
                <p>
                    {summary}
                </p>
                <div>
                    {children}
                </div>
            </BookItemContentWrapper>
        </CutItemWrapper>
    )
}

export default CutItem;