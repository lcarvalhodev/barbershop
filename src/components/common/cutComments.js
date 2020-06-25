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
    const [commentText, setCommentText] = useState('');

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

    function handlePostCommentSubmit(e) {
        e.preventDefault();
        console.log(commentText);
        firebase.postComment({
            text: commentText,
            cutId
        })
    }

    return (
        <div>
            <CommentForm onSubmit={handlePostCommentSubmit}>
                <Input value={commentText} onChange={e => {
                    e.persist();
                    setCommentText(e.target.value);
                }} />
                <Button type="submit">
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