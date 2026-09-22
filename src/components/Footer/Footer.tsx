import Container from "../Container/Container";
import picIcon from "./../../assets/images/BlueShop.png"
import headphone from "./../../assets/images/headphone.png"
import mailTruck from "./../../assets/images/mail-truck.png"
import warranty from "./../../assets/images/warranty.png"
import category from "./../../assets/images/categorygy.png"
import fast from "./../../assets/images/fast.png"
import { useEffect, useState } from "react";
import { type Categories } from "../../type/type";
import { getCategory } from "../../services/api";
import { Link } from "react-router-dom";

export default function Footer() {
    const [categories, setCategories] = useState<Categories>([])
    useEffect(() => {
        getCategory().then(data => {
            setCategories(data)
        })
    }, [])
    return (
        <div className="mt-10 pt-10" style={{ backgroundColor: "#0d1845" }}>
            <Container>
                <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid">
                    <div >
                        <div className="p-5">
                            <div className="flex">
                                <img src={picIcon} alt="Icon_shop" className="h-12 " />
                                <h1 className="text-white! text-3xl! m-0! font-black"> !Blue Shop</h1>
                            </div>
                            <h2 className="text-amber-50! text-lg! font-light pt-4">انتخاب بهتر,زندگی ساده تر!</h2>
                            <p className="text-gray-300 text-sm">
                                فروشگاه ما با هدف ارائه بهترین محصولات الکترونیکی و دیجیتال با قیمت مناسب و گارانتی معتبر فعالیت می کند.
                            </p>
                            <div className="grid-cols-3 grid pt-4" >
                                <div className="flex flex-col justify-center items-center">
                                    <img src={headphone} alt="support" className="h-12" />
                                    <h5 className="text-xs! text-gray-400">پشتیبانی 24 ساعته</h5>
                                </div>
                                <div className="flex flex-col justify-center items-center border-x">
                                    <img src={mailTruck} alt="fast-sent" className="h-12" />
                                    <h5 className="text-xs! text-gray-400"> ارسال سریع </h5>
                                </div>
                                <div className="flex flex-col justify-center items-center pr-2">
                                    <img src={warranty} alt="warranty" className="h-12" />
                                    <h5 className="text-xs! text-gray-400"> تضمین اصالت کالا </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="p-5">
                            <div className="flex pr-6">
                                <img src={category} alt="category" className="h-8 ml-2" />
                                <h4 className="text-2xl text-white font-black">دسته بندی ها</h4>
                            </div>
                            <ul className="flex flex-col pr-10">
                                {
                                    categories.map((category) => (
                                        <Link key={category.id} to={`/category/${category.id}`} className="text-gray-300 py-2">
                                            {category.name}
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="p-5">
                            <div className="flex pr-6">
                                <img src={fast} alt="fast" className="h-8 ml-2" />
                                <h4 className="text-2xl text-white font-black">دسترسی سریع</h4>
                            </div>
                            <ul className="flex flex-col pr-10">
                                <Link to="/" className="text-gray-300 py-2">
                                    خانه
                                </Link>
                                <Link to="/categories" className="text-gray-300 py-2">
                                    دسته بندی ها
                                </Link>
                                <Link to="/products" className="text-gray-300 py-2">
                                    محصولات
                                </Link>
                                <Link to="/contact" className="text-gray-300 py-2">
                                    تماس با ما
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="pt-4 pb-24 sm:py-6 text-gray-300 text-sm text-center">
                    تمامی حقوق برای Blue Shop محفوظ است
                </p>
            </Container>
        </div>
    )
}