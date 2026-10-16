import { useLocation } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

interface Layout {
    children?: React.ReactNode
}
export default function Layout({ children }: Layout) {
    let location = useLocation()
    if (location.pathname == "/login") {    
        return(
            <>
                <Navbar />
                {children}
            </>
        )
    }
    else {
        return (
            <>
                <Navbar />
                {
                    children
                }
                <Footer />
            </>
        )
    }

}