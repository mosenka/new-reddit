import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserData,  meRequestAsync } from "../store/me/actions";
import { RootState } from "../store/reducer";



export function useUserData() {
	const data = useSelector<RootState, IUserData>(state => state.me.data);
	const loading = useSelector<RootState, boolean>(state => state.me.loading);


	const token = useSelector<RootState, string>(state => state.token);
	const dispatch = useDispatch();

	
	useEffect(() => {
		if(!token) return;
		
		dispatch(meRequestAsync())

		// dispatch(meRequest());

		// axios.get('https://oauth.reddit.com/api/v1/me',{
		// 		headers: {Authorization: `bearer ${token}`}
		// 	})
		// 	.then(res => {
		// 		const userData = res.data;
		// 		// setData(meUserData)
		// 		dispatch(meRequestSuccess({name: userData.name, iconImg: userData.icon_img}));
				
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 		dispatch(meRequestError( String(error) ));
				
		// 	})

	}, [token]);

    return { 
		data, 
		loading
	
	};
}