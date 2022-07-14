import React, { useEffect } from 'react';
import './main.global.css'
import { Layout } from './components/Layout/Layout';
import  { Header }  from './components/Header/Header';
import  {Content}  from './components/Content/Content';
import  {CardsList}  from './components/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { UserContextProvider } from './context/userContext';
import { PostsContextProvider } from './context/postsContext';

import {useDispatch } from 'react-redux';
import { setToken } from './store';





export function App() {
	const [token] = useToken();
    const dispatch = useDispatch();


	React.useEffect(() => {
        dispatch(setToken(token));
	}, [token])


	return (
        <UserContextProvider>
            <Layout>
                <Header />
                <Content>
                    <PostsContextProvider>
                        <CardsList/>
                    </PostsContextProvider>
                </Content>
            </Layout>
        </UserContextProvider>
	)
}


