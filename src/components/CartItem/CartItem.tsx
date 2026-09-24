import { useEffect, useState } from "react"
import Button from "../_UI_/Button/button"
import type { Product } from "../../type/type"
import { getSingleProduct } from "../../services/api"
import { useShoppingCartContext } from "../../context/ShoppingCartItems"
import { Link } from "react-router-dom"
export default function CartItem({ qty, id }: { id: number, qty: number }) {
    const { handleDecreaseProductQty, handleIncreaseProductQty } = useShoppingCartContext()
    const [product, setProduct] = useState<Product>({} as Product)
    useEffect(() => {
        getSingleProduct(String(id)).then((data) => {
            setProduct(data)
        })
    }, [])
    return (
        <div className="shadow shadow-gray-400 rounded m-2">
            <div className="flex gap-4  p-4 mx-2 items-center">
                <div className=" bg-sky-100">
                    <Link to={`/products/${id}`}>
                        <img src={product.image} alt="" className="h-30" />
                    </Link>
                </div>
                <p className="mr-4 text-sm">
                    {product.name}
                </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-4 pb-4 pr-6">
                    <Button className="py-2! px-3!" variant="primary" onClick={() => handleIncreaseProductQty(id, product.price)}>
                        +
                    </Button>
                    <p className="text-xl">
                        {
                            qty
                        }
                    </p>
                    <Button className="py-2! px-4!" variant="danger" onClick={() => handleDecreaseProductQty(id)}>
                        -
                    </Button>
                </div>
                <div className="">
                    <p className="text-blue-600 pl-6">
                        {
                            product.price
                        }
                    </p>
                </div>
            </div>
        </div>


    )
}