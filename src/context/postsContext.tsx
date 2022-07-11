import React from "react";
import { usePostsData } from "../hooks/usePostsData";


interface IPostContext {
    data?: any;
    kind?: any;
}

export type TPostsContext = Array<IPostContext>;


export const postsContext = React.createContext<TPostsContext>([]);


export function PostsContextProvider({children}: {children: React.ReactNode}) {
    const [data] = usePostsData();

    return (<postsContext.Provider value={data}>
        {children}
    </postsContext.Provider>);
}