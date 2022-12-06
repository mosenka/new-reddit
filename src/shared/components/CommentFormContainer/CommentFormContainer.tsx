import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store/reducer';
import { CommentForm } from '../CommentForm/CommentForm';

export function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentContext);
  const dispatch = useDispatch();



  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))

  }

  return <p>comment form</p>
  
/*   (<CommentForm 
    value={value}
    onChange={handleChange}
  
  
  />) */
    
  }


