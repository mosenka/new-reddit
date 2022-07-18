import React, { useEffect } from 'react';
import './main.global.css'
import { Layout } from './components/Layout/Layout';
import  { Header }  from './components/Header/Header';
import  {Content}  from './components/Content/Content';
import  {CardsList}  from './components/CardsList/CardsList';
// import { useToken } from './hooks/useToken';
import { PostsContextProvider } from './context/postsContext';

// redux
import { saveToken } from './store/reducer';
import { useDispatch } from 'react-redux';




export function App() {

    const dispatch = useDispatch();

	React.useEffect(() => {
        dispatch(saveToken());
        
	}, [])


	return (
        <Layout>
            <Header />
            <Content>
                <PostsContextProvider>
                    <CardsList/>
                </PostsContextProvider>
            </Content>
        </Layout>
	)
}


