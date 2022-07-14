import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";



export function usePostsData() {
    const [data, setData] = useState([]);
	const token = useSelector<RootState, string>(state => state.token);
    
    useEffect(() => {
		axios.get('https://oauth.reddit.com/best.json?limit=10&sr_detail=true',{
			headers: {Authorization: `bearer ${token}`}
		})
		.then(res => {
            let arr = res.data.data.children;
            setData(arr);
            
		})
		.catch(console.log)

	}, [token]);

    return [data]
    
}