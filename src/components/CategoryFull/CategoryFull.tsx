import { useEffect, useState } from "react";
import ProductCart from "../ProductCart/ProductCart";
import type { Category, Products } from "../../type/type";
import { getItemCategory, } from "../../services/api";

export default function CategoryFull({id,name}:Category) {
    const [products, setProducts] = useState<Products>([])
    useEffect(() => {
        getItemCategory(1, String(id)).then(data => {
            setProducts(data)
        })
    },[])
    return (
        <div>
            <h1 className="text-2xl! text-gray-700!">{name}</h1>
            <div className="flex lg:flex-nowrap flex-wrap justify-around gap-3 pt-5">
                {
                    products.map((data) => (
                        <ProductCart {...data} />
                    ))
                }
            </div>
        </div>
    )
}