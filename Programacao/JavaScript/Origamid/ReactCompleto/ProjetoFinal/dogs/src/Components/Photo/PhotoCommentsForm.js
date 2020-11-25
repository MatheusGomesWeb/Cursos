import React from 'react';
import { COMMENT_POST } from '../../api/Api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import Erro from '../Helper/Erro';
import useFetch from '../Hooks/useFetch';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');

  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { resp, json } = await request(url, options);
    console.log(resp);
    console.log(json);
    if (resp.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        id="comment"
        name="comment"
        placeholder="Comente..."
      ></textarea>

      <button className={styles.button}>
        <Enviar />
      </button>
      <Erro error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
