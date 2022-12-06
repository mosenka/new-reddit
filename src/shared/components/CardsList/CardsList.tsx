import React, { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './cardslist.css';
import  { Card }  from './Card';
// import { postsContext } from '../../context/postsContext';
import { usePostsData } from '../../hooks/usePostsData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { IPostItem, postsRequest, postsRequestError, postsRequestSuccess } from '../../store/posts/actions';
import axios from 'axios';




export function CardsList() {
  // const {posts, loading, errorLoading, nextAfter} = useContext(postsContext);
  const bottomOfList = useRef<HTMLDivElement>(null);

  const posts = useSelector<RootState, Array<IPostItem>>(state => state.posts.data);
	const loading = useSelector<RootState, boolean>(state => state.posts.loading);
	const errorLoading = useSelector<RootState, string>(state => state.posts.errorLoading);
	const nextAfter = useSelector<RootState, string>(state => state.posts.nextAfter);

  const [isShow, setIsShow] = useState(false);

  const token = useSelector<RootState, string>(state => state.token);
	const dispatch = useDispatch();

  async function load() {
    dispatch(postsRequest());
    try {
      const {data: { data: {after, children} }} = await axios.get('https://oauth.reddit.com/best.json',{
        headers: {Authorization: `bearer ${token}`},
        params: {
          sr_detail: true,
          limit: 5,
          after: nextAfter,
        }
      });
      // console.log(data);
      // console.log(nextAfter);
      
      dispatch( postsRequestSuccess(children, after) );
  
    } catch (error) {
      dispatch( postsRequestError( String(error) ) )
    }
    
  }

  useEffect(() => {
		// if(!token) return;
		if(!bottomOfList.current) return;

		const observer = new IntersectionObserver((enteries) => {
      if(!loading && !errorLoading && posts.length == 0){
        console.log('start');
        setIsShow(false);
        load();
        
      } else if (enteries[0].isIntersecting && posts.length % 3 != 0) {
			  // console.log('three load');
        console.log('auto');
        setIsShow(false);
        load();
			  // load();
	  
			} else if (enteries[0].isIntersecting) {
        setIsShow(true);
        console.log('click');
      }
		  }, {
			rootMargin: '100px'
		  });
	  
		  if(bottomOfList.current) {
			observer.observe(bottomOfList.current);
		  }
	  
		  
		

		return () => {
			if(bottomOfList.current) {
			  observer.unobserve(bottomOfList.current);
			}
		}


	}, [bottomOfList.current, token, nextAfter])


  let list = posts.map(post => {

    const key = uuidv4();
    
    return <Card title={post.data.title} url={`https://www.reddit.com/${post.data.permalink}`} img={post.data.thumbnail} userIcon={post.data.sr_detail.icon_img} userName={post.data.sr_detail.display_name} link={post.data.sr_detail.url} createdAt={post.data.created} key={key} id={post.data.name}/>;

  });

  return (<ul className={styles.cardsList}>
    {posts.length == 0 && !loading && !errorLoading && (<div>Нет ни одного поста!</div>)}
    {list}
    {loading && (<div>Загрузка ...</div>)}
    {errorLoading && (<div> Ошибка: {errorLoading} </div>)}
    <div ref={bottomOfList}/>
    { isShow && <button className={styles.button} onClick={()=> load()}>загрузить ещё...</button>}
  </ul>

  );
}
