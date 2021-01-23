export const isAuthenticated = ()=>{

    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('token')) {
        return true;
    } else {
        return false;
    }
}

export const isAdmin = ()=>{
    
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('token') && localStorage.getItem('role') === "admin") {
        return true;
    } else {
        return false;
    }
}