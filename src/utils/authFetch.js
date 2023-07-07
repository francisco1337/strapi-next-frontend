import { Token } from "@/api"

export async function authFetch(url, params) { 
    const tokenCtrl = new Token();
    
    const token = tokenCtrl.getToken();
    
    const logout = () => { 
        tokenCtrl.removeToken();
        window.location.replace("/");
    }

    if (!token) {
        logout();
    } else { 
        
        const result = tokenCtrl.hasExpired(token);


        if (result) { 
            logout();
        }


        const paramsTemp = {
            ...params,
            headers: {
                ...params?.headers,
                Authorization: `Bearer ${token}`,
            }
        }

        

        try {
            return await fetch(url, paramsTemp);
        } catch { 
            console.log(error);
            return error;
        }
    }
}