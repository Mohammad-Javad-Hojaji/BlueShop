import { Navigate, Outlet } from "react-router-dom"
import { useAccountShop } from "../../context/AccountShop"

export default function LogicLogin() {
    const { isLogin } = useAccountShop()
    return (
        <>
            {
                isLogin ?
                    (
                        <Navigate to="/" />
                    )
                    :
                    (
                        <Outlet />
                    )
            }
        </>
    )
}