import { Link } from "react-router-dom"
import BlueShop from "./../../assets/images/BlueShop.png"
import user from "./../../assets/images/user.png"
import Container from "../Container/Container"
import cart from "./../../assets/images/cart.png"
import home from "./../../assets/images/home.png"
import category from "./../../assets/images/category.png"
import offer from "./../../assets/images/offer.png"
import call from "./../../assets/images/call.png"

export default function Navbar() {
    return (
        <div className="shadow shadow-gray-400  h-16 fixed right-0 top-0 z-10 bg-white w-full">
            <Container>
                <div className="flex items-center justify-between h-full w-full">
                    <div className="flex items-center">
                        <Link to="/">
                            <div className="flex">
                                <img className="h-8" src={BlueShop} alt="BlueShop" />
                                <p className="text-xl text-gray-700 font-bold">
                                    فروشگاه
                                </p>
                            </div>
                        </Link>
                        <div className="sm:relative sm:border-none border-t border-gray-400  h-1/12  fixed top-11/12 right-0 flex w-full">
                            <ul className="bg-white flex  sm:mx-10 mx-4  sm:gap-3  justify-between items-center  align-text-bottom w-full">
                                <li >
                                    <Link to="/" className="flex flex-col-reverse t-2 hover:border-b hover:border-sky-600">
                                        <p className="text-xs font-bold sm:text-sm sm:font-medium flex-col text-gray-500" >خانه</p>
                                        <img src={home} className="sm:hidden h-3 w-4 mx-auto" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/categories" className="flex flex-col-reverse t-2 hover:border-b hover:border-sky-600">
                                        <p className="text-xs font-bold sm:text-sm sm:font-medium flex-col text-gray-500" >دسته بندی ها</p>
                                        <img src={category} className="sm:hidden h-3 w-4 mx-auto" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex flex-col-reverse t-2 hover:border-b hover:border-sky-600">
                                        <p className="text-xs font-bold sm:text-sm sm:font-medium flex-col text-gray-500" >پیشنهادات ویژه</p>
                                        <img src={offer} className="sm:hidden h-3 w-4 mx-auto" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex flex-col-reverse t-2 hover:border-b hover:border-sky-600">
                                        <p className="text-xs font-bold sm:text-sm sm:font-medium flex-col text-gray-500" > تماس با ما </p>
                                        <img src={call} className="sm:hidden h-3 w-4 mx-auto" />
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