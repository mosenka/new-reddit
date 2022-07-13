import React from 'react';
import './main.global.css'
import { Layout } from './components/Layout/Layout';
import  { Header }  from './components/Header/Header';
import  {Content}  from './components/Content/Content';
import  {CardsList}  from './components/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import axios from 'axios';
import { PostsContextProvider } from './context/postsContext';
import { commentContext } from './context/commentContext';





export function App() {
    const [token] = useToken();
    // const [commentValue, setCommentValue] = React.useState('');
    
    // const ComentProvider = commentContext.Provider;

	return (
        // <ComentProvider value={{
        //     value: commentValue,
        //     onChange: setCommentValue
        // }}>
            <tokenContext.Provider value={token}>
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
            </tokenContext.Provider>	
        // </ComentProvider>
    
	)
}


