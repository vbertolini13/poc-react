const TOKEN_KEY = 'jwt';
const TOKEN_CORREO = 'correo';

export const login = correo => {
    console.log(correo);
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
    localStorage.setItem(TOKEN_CORREO, correo);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_CORREO);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY) && localStorage.getItem(TOKEN_CORREO)) {
        return true;
    }

    return false;
}