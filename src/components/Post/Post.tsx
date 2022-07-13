import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CommentForm } from '../CommentForm';
import { Comment } from '../Comment';
import styles from './post.css';


interface IPostProps {
  onClose?: () => void;
}

export function Post({onClose}: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.();
      }
      
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);


  const node = document.querySelector('#modal_root');
  if(!node) return null;


  return ReactDOM.createPortal((<div className={styles.modal} ref={ref}>
    <h1>post title</h1>
    <div className={styles.content}>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, consequatur iste. Ipsum laudantium porro veritatis incidunt cum facilis atque.  </p>
      <p>Reprehenderit ab soluta iusto esse sunt molestias voluptatem autem in deserunt quia quo, quas facere exercitationem voluptas vero vel accusantium assumenda ratione. Facere debitis magni porro possimus dolorem sequi numquam, minima amet sed tenetur consequatur voluptates officia quasi quibusdam quaerat similique quod dolorum.</p>
      <p>Repellendus, neque expedita obcaecati cumque eveniet earum consequuntur odit, hic doloremque accusamus quo commodi fugit repellat. Unde error quisquam maiores iusto neque commodi cupiditate placeat sunt laboriosam soluta praesentium dolores, cum doloremque nobis facere animi, recusandae ipsam eos.</p>
    </div>
    <CommentForm />
    <div className={styles.comments}>
      <Comment userName={'Михаил Рогов'}>
        <Comment userName={'Иван Иванов'}></Comment>
      </Comment>
    </div>
  </div>), node)
  
}
