import { Link } from "react-router-dom"
import BlueShop from "./../../assets/images/BlueShop.png"
import user from "./../../assets/images/user.png"
import Container from "../Container/Container"
import cart from "./../../assets/images/cart.png"
import home from "./../../assets/images/home.png"
import category from "./../../assets/images/category.png"
import Product from "./../../assets/images/product.png"
import call from "./../../assets/images/call.png"
import { useShoppingCartContext } from "../../context/ShoppingCartItems"
import { useAccountShop } from "../../context/AccountShop"
import Button from "../_UI_/Button/button"
import flash from "./../../assets/images/flash_left.png"
import redflash from "./../../assets/images/red_flash_left.png"
import exit_icon from "./../../assets/images/exit.png"

export default function Navbar() {
    const { isLogin, username,setIsLogin,setUsername } = useAccountShop()
    const { totalQty } = useShoppingCartContext()
    return (
        <div className="shadow shadow-gray-400  h-16 fixed right-0 top-0 z-10 bg-white w-full">
            <Container>
                <div className="flex items-center justify-between h-full w-full ">
                    <div className="flex items-center">
                        <Link to="/">
                            <div className="flex">
                                <img className="h-8" src={BlueShop} alt="BlueShop" />
                                <p className="text-xl text-gray-700 font-bold">
                                    فروشگاه
                                </p>
                            </div>
                        </Link>
                        <div className=" sm:bg-transparent bg-white sm:relative sm:border-none border-t border-gray-400  h-1/12  fixed top-11/12 right-0 flex w-full">
                            <ul className=" flex  sm:mx-10 mx-4  sm:gap-3  justify-between items-center  align-text-bottom w-full">
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
                                    <Link to="/products" className="flex flex-col-reverse t-2 hover:border-b hover:border-sky-600">
                                        <p className="text-xs font-bold sm:text-sm sm:font-medium flex-col text-gray-500" >محصولات</p>
                                        <img src={Product} className="sm:hidden h-3 w-4 mx-auto" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="flex flex-col-reverse t-2 hover:border-b hover:border-sky-600">
                                        <p className="text-xs font-bold sm:text-sm sm:font-medium flex-col text-gray-500" > تماس با ما </p>
                                        <img src={call} className="sm:hidden h-3 w-4 mx-auto" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link to="/cart" className="relative">
                            <div className="bg-blue-500 text-white absolute -top-1 -right-8/12 h-5 flex justify-center items-center w-5 text-xs rounded-full">
                                {totalQty}
                            </div>
                            <img className="h-5" src={cart} alt="" />
                        </Link>
                        {
                            isLogin ?
                                (
                                    <div>
                                        <div className="h-5 pr-3 relative myAnimateLocal">
                                            <img src={user} alt="" className="cursor-pointer" />
                                            <div className="absolute top-full -right-73 w-91 h-fit hidden myAnimateLocal2">
                                                <div className="m-5 h-full bg-white shadow-sky-300 shadow-sm rounded-xl">
                                                    <div className="flex justify-center pt-4">
                                                        <div className="flex w-full mx-4 justify-between items-center border-b pb-2 border-gray-300">
                                                            <div>
                                                                <p className=" text-gray-800 text-xl">{username}</p>
                                                                <p className="text-sm">حساب کاربری</p>
                                                            </div>
                                                            <div className="h-14 w-14 bg-sky-200 rounded-full flex justify-center items-center">
                                                                <img src={user} alt="" className=" w-8 h-8" />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="flex justify-center pt-2 flex-col">
                                                        <div className="py-2">
                                                            <a href="/cart" className="cursor-pointer ">
                                                                <Button variant="null" className=" mx-4 w-72 navbar-a-profile rounded-2xl p-2! cursor-pointer">
                                                                    <div className="flex justify-between items-center">
                                                                        <div className="flex">
                                                                            <img src={cart} alt="cart" className="h-6  w-6 ml-2" />
                                                                            <p>
                                                                                سبد خرید
                                                                            </p>
                                                                        </div>
                                                                        <img src={flash} alt="" className="h-4 w-4" />
                                                                    </div>
                                                                </Button>
                                                            </a>
                                                            <Button onClick={()=>{setIsLogin(false),setUsername(null)}} variant="null" className=" mx-4 w-72 navbar-a-profile2 rounded-2xl p-2! cursor-pointer ">
                                                                <div className="flex justify-between items-center ">
                                                                    <div className="flex items-center">
                                                                        <img src={exit_icon} alt="cart" className="h-8 pt-2  w-6 ml-2" />
                                                                        <p className="text-red-400">
                                                                            خروج از حساب
                                                                        </p>
                                                                    </div>
                                                                    <img src={redflash} alt="" className="h-4 w-4 text-red-400 pb-4" />
                                                                </div>
                                                            </Button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <Link to="/login" className="pr-3" >
                                        <img src={user} alt="" />
                                    </Link>
                                )
                        }

                    </div>
                </div>

            </Container>
        </div>
    )
}