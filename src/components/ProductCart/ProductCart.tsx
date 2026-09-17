import { Link } from "react-router-dom";
import type { OfferProduct } from "../../type/type";


export default function ProductCart({id,image,name,price,score}:OfferProduct) {
    return (
        <div className={`w-4/9  lg:w-1/5 py-3 border-gray-300 border rounded-2xl relative`}>
            <div className="flex flex-col  justify-center items-center ">
                <Link to={`/products/${id}`}  >
                    <img src={image} alt="" />
                    <div className="p-5 ">
                        <h3 className="font-bold ">
                           {name}
                        </h3>
                        <p className="text-sky-800">
                            {price} تومان
                        </p>
                        <div className="flex">
                            <span className="text-sky-800">
                               {score}
                            </span>
                            <img src="https://uploadkon.ir/uploads/fe8e17_26icons8-star-48.png" className="h-5 pr-2" alt="" />
                        </div>

                    </div>
                </Link>


            </div>
        </div>
    )
}