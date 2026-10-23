import { Navigate, Outlet } from "react-router-dom"
import { useAccountShop } from "../../context/AccountShop"

export default function PrivateRoute() {
    const { isLogin } = useAccountShop()
    return (
        <>
            {
                isLogin ?
                    (
                        <Outlet />
                    )
                    :
                    (
                        <Navigate to="/login" />
                    )
            }
        </>

    )
}