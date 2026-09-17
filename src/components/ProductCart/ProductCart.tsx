import { Link } from "react-router-dom";
import Button from "../_UI_/Button/button";

export default function ProductCart() {
    return (
        <div className={`w-4/9  lg:w-1/5 py-10 border-gray-300 border rounded-2xl relative`}>
            <div className="flex flex-col  justify-center items-center ">
                <img className="absolute top-2 right-2 h-5 cursor-pointer" src="https://uploadkon.ir/uploads/fa6117_26icons8-heart-50.png" alt="" />
                <Link to={`/category/`}  >
                    <img src="https://uploadkon.ir/uploads/83e417_26headphone.png" alt="" className="" />
                    <div className="p-5 ">
                        <h3 className="font-bold ">
                            ساعت هوشمند شیائومی
                        </h3>
                        <p className="text-sky-800">
                            5,500,000 تومان
                        </p>
                        <span className="text-sky-800">
                            4.5
                        </span>
                        <img src="" alt="" />
                    </div>
                </Link>
                <Button variant="primary">
                    افزودن به سبد
                </Button>

            </div>
        </div>
    )
}