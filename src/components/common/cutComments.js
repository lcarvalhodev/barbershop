import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './button';
import { Input } from './input';
import moment from 'moment';

const CommentForm = styled.form`
  display: flex;
  margin-top: 32px;
  
  ${Input}{
    margin-right: 8px;
    margin-top: auto;
    margin-bottom: auto;
  }
  
  ${Button}{
    margin: auto 0;
  }
`


const CommentListItem = styled.div`
    >strong{
        font-size:80%;
        color: #666;

    }

    border-bottom: 1px solid #ddd;
    padding: 4px 0;
`;

export const CutComments = ({ firebase, cutId }) => {

    const [comments, setcomments] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase.subscribeToCutComment({
            cutId,
            onSnapshot: (snapshot) => {
                console.log(snapshot);
                const snapshotComments = [];
                snapshot.forEach(doc => {
                    snapshotComments.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })

                setcomments(snapshotComments)
            }
        })


        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        }

    }, [])

    return (
        <div>
            <CommentForm >
                <Input />
                <Button >
                    Comentar
                </Button>
            </CommentForm>
            {comments.map(comment => (
                <CommentListItem key={comment.id}>
                    <strong>
                        {comment.username}
                    </strong>
                    <div>
                        {comment.text}
                    </div>
                </CommentListItem>
            ))}
        </div>
    )
}