import React from "react";

export function useToken() {
    const [token, setToken] = React.useState('');


    React.useEffect(() => {
        const url = new URL(window.location.href);
        const reg: RegExpMatchArray | null = url.hash.match(/^(?:#access_token=)([a-zA_Z0-9_-]+)&/i);
        if(reg){
            const [hash, str] = reg;
            setToken(str);
        }

    }, [])

    return [token];
    
}