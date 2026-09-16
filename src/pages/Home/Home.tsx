import { Link } from "react-router-dom"
import banner from "./../../assets/images/banner.png"
export default function Home() {
    return(
        <div className="pt-16">
            <Link to="/">
                <img src={banner} alt="Banner Site" />
            </Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}