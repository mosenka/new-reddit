import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store/reducer';
import styles from './commentform.css';

import { Field, Form, Formik, FormikErrors } from 'formik';


// interface ICommentFormProps {
//   value: string;
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
// }

// export function CommentForm({value, onChange } : ICommentFormProps) {

  interface CommentFormValues {
    comment: string
  }

  
  const validate = (values: CommentFormValues)  => {
    let errors: FormikErrors<CommentFormValues> = {};
    if (!values.comment) {
      errors.comment = 'Обязательное поле';
    } else if (values.comment.length < 3) {
      errors.comment = 'Поле должно собержать более 3х символов';
    }
    return errors;
  }



export function CommentForm()  {
  
  const initialValues: CommentFormValues = { comment: '' };

  return (
    <Formik
    initialValues={initialValues}
    validate={ validate }
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }}
    >
      {({ errors, touched }) => (
      <Form className={styles.form}>
           <Field id="comment" name="comment" as="textarea" className={styles.input} aria-invalid={errors.comment && touched.comment} />
           {errors.comment && touched.comment && <div>{errors.comment}</div>}
           <button type="submit" className={styles.button}>Комментировать</button>
      </Form>
      )}
      
    </Formik> 
  
  
  
  );
}


