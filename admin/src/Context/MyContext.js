import { createContext } from 'react';

export const MyContext = createContext({
    isSidebarOpen: true,
    setIsSidebarOpen: () => { },
    isLogin: false,
    setIsLogin: () => { },
    isOpenFullScreenPanel: { open: false, modal: 'product' },
    setIsOpenFullScreenPanel: () => { },
    token: '',
    setToken: () => { },
});