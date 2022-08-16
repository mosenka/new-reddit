import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CommentForm } from '../CommentForm';
import { Comment } from '../Comment';
import styles from './post.css';
import { CommentFormContainer } from '../CommentFormContainer';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../../store/reducer';
import { useSelector } from 'react-redux';
import { IPostItem } from '../../store/posts/actions';


interface IPostProps {
  onClose?: () => void;
}

interface TPost {
  title: string;
}


export function Post({onClose}: IPostProps) {
  const [post, setPost ] = useState<TPost | null>(null);

  let { id } : {id: string} = useParams();
  
  

  const posts = useSelector<RootState, Array<IPostItem>>(state => state.posts.data);
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();


  const token = useSelector<RootState, string>(state => state.token);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)) {
        // onClose?.();
        history.push('/posts');
      }
      
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  useEffect(() => {
    if(!posts) return;
    if(!id) return;

    let [ res ]  = posts.filter(elem =>  elem.data.name == id);
    
    if(res){
      setPost(res.data);
    }

  }, [])

  if(post) {
    console.log('test', post);

  }

  const node = document.querySelector('#modal_root');
  if(!node) return null;


  return ReactDOM.createPortal((<div className={styles.modal} ref={ref}>
    { post &&  (<>
      <h1 className={styles.title}> {post.title }</h1> 
      <div className={styles.content}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, consequatur iste. Ipsum laudantium porro veritatis incidunt cum facilis atque.  </p>
        <p>Reprehenderit ab soluta iusto esse sunt molestias voluptatem autem in deserunt quia quo, quas facere exercitationem voluptas vero vel accusantium assumenda ratione. Facere debitis magni porro possimus dolorem sequi numquam, minima amet sed tenetur consequatur voluptates officia quasi quibusdam quaerat similique quod dolorum.</p>
        <p>Repellendus, neque expedita obcaecati cumque eveniet earum consequuntur odit, hic doloremque accusamus quo commodi fugit repellat. Unde error quisquam maiores iusto neque commodi cupiditate placeat sunt laboriosam soluta praesentium dolores, cum doloremque nobis facere animi, recusandae ipsam eos.</p>
      </div>


      </>) }
    {/* <CommentFormContainer /> */}
    <CommentForm />
    <div className={styles.comments}>
      <Comment userName={'Михаил Рогов'}>
        <Comment userName={'Иван Иванов'}></Comment>
      </Comment>
    </div>
  </div>), node)
  
}
