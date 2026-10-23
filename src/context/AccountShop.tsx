import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface AccountShopType {
    isLogin: boolean
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
    username:string|null
    setUsername:React.Dispatch<React.SetStateAction<string | null>>
}
interface AccountShopProvider {
    children: React.ReactNode
}
export const AccountShop = createContext<AccountShopType>({} as AccountShopType)
export const useAccountShop=()=>useContext(AccountShop)
export function AccountShopProvider({ children }: AccountShopProvider) {
    const [isLogin, setIsLogin] = useLocalStorage<boolean>("isLogin", false)
    const [username, setUsername] = useLocalStorage<string|null>("username", null)
    
    return (
        <AccountShop.Provider value={{ isLogin, setIsLogin,username,setUsername }}>
            {children}
        </AccountShop.Provider>
    )
}