import { Link } from "react-router-dom"
import BlueShop from "./../../assets/images/BlueShop.png"
import user from "./../../assets/images/user.png"
import Container from "../Container/Container"
import cart from "./../../assets/images/cart.png"
export default function Navbar() {
    return (
        <div className="shadow shadow-gray-400  h-16 ">
            <Container>
                <div className="flex items-center justify-between h-full w-full">
                    <div className="flex items-center" >
                        <div className="flex">
                            <img className="h-8" src={BlueShop} alt="BlueShop" />
                            <p className="text-xl text-gray-700 font-bold">
                                فروشگاه
                            </p>
                        </div>
                        <div>
                            <ul className="flex gap-3.5 pr-4 align-text-bottom">
                                <li >
                                    <Link to="/">
                                        خانه
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        دسته بندی ها
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        پیشنهادات ویژه
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        تماس با ما
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link to="">
                            <img className="h-5" src={cart} alt="" />
                        </Link>
                        <Link to="" className="h-5 pr-3">
                            <img src={user} alt="" />
                        </Link>
                    </div>
                </div>

            </Container>
        </div>
    )
}