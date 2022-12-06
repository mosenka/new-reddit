import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPostItem, postsRequest, postsRequestError, postsRequestSuccess } from "../store/posts/actions";
import { RootState } from "../store/reducer";

// export interface IPostItem {
//     data?: any;
//     kind?: any;
// }

// export interface IPostsData {
// 	posts: Array<IPostItem>,
// 	loading: boolean,
// 	errorLoading: string,
// 	nextAfter: string
// }

// interface TProp {
// 	elem: React.RefObject<HTMLDivElement>
// }


export function usePostsData( bottomOfList : React.RefObject<HTMLDivElement>) {
	const posts = useSelector<RootState, Array<IPostItem>>(state => state.posts.data);
	const loading = useSelector<RootState, boolean>(state => state.posts.loading);
	const errorLoading = useSelector<RootState, string>(state => state.posts.errorLoading);
	const nextAfter = useSelector<RootState, string>(state => state.posts.nextAfter);
	

	// const [nextAfter, setNextAfter] = useState('');

	const token = useSelector<RootState, string>(state => state.token);
	const dispatch = useDispatch();

	useEffect(() => {
		if(!token) return;
		if(!bottomOfList.current) return;

		
		async function load() {
			dispatch(postsRequest());
			try {
				// const {data: { data: {after, children }}} = await axios.get('https://oauth.reddit.com/best.json',{
				// const {data: { data: { after, children }}} = await axios.get('https://oauth.reddit.com/rising.json',{
				const {data: {  data : {after, children} }} = await axios.get('https://oauth.reddit.com/best.json',{
					headers: {Authorization: `bearer ${token}`},
					params: {
						sr_detail: true,
						limit: 5,
						after: nextAfter,
					}
				});
				dispatch( postsRequestSuccess(children, after) );
		
			} catch (error) {
				dispatch( postsRequestError( String(error) ) )
			}
			
		}

		const observer = new IntersectionObserver((enteries) => {
			if(enteries[0].isIntersecting && posts.length == 0) {
			  console.log('load more');
			  load();
	  
			}
			// const {posts, loading, errorLoading, nextAfter} = useContext(postsContext);
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


	}, [bottomOfList.current, nextAfter, token])

	return {
		posts,
		loading,
		errorLoading
	}
	
}



// export function usePostsData(): IPostsData {
//     const [posts, setPosts] = useState<IPostItem[]>([]);
// 	const token = useSelector<RootState, string>(state => state.token);
	
// 	const [loading, setLoading] = useState(false);
// 	const [errorLoading, setErrorLoading] = useState('');

// 	const [nextAfter, setNextAfter] = useState('');

    
//     useEffect(() => {
// 		if (!token) return;

// 		async function load() {
// 			setLoading(true);
// 			setErrorLoading('');
			

// 			try {
// 				const {data: { data: {after, children }}} = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true',{
// 					headers: {Authorization: `bearer ${token}`},
// 					params: {
// 						limit: 10,
// 						after: nextAfter,
// 					}
// 				});
// 			// console.log(after);
// 			setNextAfter(after);
// 			setPosts( prevChildren => prevChildren.concat(...children));
// 			console.log(nextAfter);
			
		
// 			} catch (error) {
// 				console.error(error);
// 				setErrorLoading(String(error));
// 			}
// 			setLoading(false);
			
// 		}
		
// 		// axios.get('https://oauth.reddit.com/best.json?limit=10&sr_detail=true',{
// 		// 	headers: {Authorization: `bearer ${token}`}
// 		// })
// 		// .then(res => {
//         //     let arr = res.data.data.children;
//         //     setData(arr);
            
// 		// })
// 		// .catch(console.log)

// 		load();

// 	}, [token]);

//     return { posts: posts,  loading: loading, errorLoading: errorLoading, nextAfter: nextAfter }
    
// }