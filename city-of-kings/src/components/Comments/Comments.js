import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { StyledForm, StyledInput, StyledSubmitButton, Wrapper } from './Comments.style';
import Comment from '../Comment/Comment';

const initializeInputValue = '';

const Comments = () => {

    const [comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState(initializeInputValue);
    const [Error, setError] = useState('');

    const handleChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === '') {
            setError("Oh no. You can't sell nothing!");
            return;
        }

        if (inputValue.length > 50) {
            setError('Za długa wiadomość!');
            return;
        }

        let segregateStr = '';
        comments.forEach(comment => {
            segregateStr += 'a';
        });

        db.collection("comments").doc(segregateStr + 'a').set({ content: inputValue })
            .then(() => {
                console.log("Document successfully written!");
                setError('');
                setInputValue(initializeInputValue);
            })
            .catch((error) => {
                setError(error);
            });
    }

    useEffect(() => {
        const unsubscribe = db.collection("comments").onSnapshot((snapshot) => {
            const commentsArray = [];
            snapshot.forEach(doc => {
                commentsArray.push({ ...doc.data(), id: doc.id });
            });
            setComments(commentsArray);
        });

        return unsubscribe
    }, []);

    return (
        <Wrapper>
            {comments.map(comment => (<Comment
                key={comment.id}
                content={comment.content} />))}
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    onChange={handleChange}
                    value={inputValue} />
                <StyledSubmitButton type="submit" onClick={handleSubmit}>
                    Dodaj
               </StyledSubmitButton>
            </StyledForm>
        </Wrapper>
    )
}

export default Comments;