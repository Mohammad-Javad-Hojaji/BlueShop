import Navbar from "../Navbar/Navbar"

interface Layout {
    children?: React.ReactNode
}
export default function Layout({ children }: Layout) {
    return (
        <>
            <Navbar/>
            {
                children
            }
        </>
    )
}