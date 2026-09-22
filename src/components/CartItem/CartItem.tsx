import Button from "../_UI_/Button/button"
import pic from "./../../assets/images/products/headphone.png"
export default function CartItem() {
    return (
        <div className="shadow shadow-gray-400 rounded m-2">
            <div className="flex gap-4  p-4 mx-2 items-center">
                <div className=" bg-sky-100">
                    <img src={pic} alt="" className="h-30" />
                </div>
                <p className="mr-4 text-sm">
                    گوشی سامسونگ galaxy a 12
                </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-4 pb-4 pr-6">
                    <Button className="py-2! px-3!" variant="primary">
                        +
                    </Button>
                    <p className="text-xl">
                        1
                    </p>
                    <Button className="py-2! px-4!" variant="primary">
                        -
                    </Button>
                </div>
                <div className="">
                    <p className="text-blue-600 pl-6">
                        2,900,000 تومان
                    </p>
                </div>
            </div>
        </div>


    )
}