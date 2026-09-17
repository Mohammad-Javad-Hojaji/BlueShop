import { Link } from "react-router-dom"
import banner from "./../../assets/images/banner.png"
import Container from "../../components/Container/Container"
import { getCategory, getOfferProducts } from "../../services/api"
import { useEffect, useState } from "react"
import type { Categories, OfferProducts } from "../../type/type"
import CategoryCart from "../../components/CategoryCart/CategoryCart"
import ProductCart from "../../components/ProductCart/ProductCart"
export default function Home() {
    const [category, setCategory] = useState<Categories>([])
    const [offerProducts,setOfferProducts]=useState<OfferProducts>([])
    useEffect(() => {
        getCategory().then(data => {
            setCategory(data)
        })
        getOfferProducts().then(data=>{
            setOfferProducts(data)
        })
        
    }, [])
    return (
        <div className="pt-16">
            <Container>
                <Link to="/" >
                    <img src={banner} alt="Banner Site" className="rounded-2xl" />
                </Link>
            </Container>

            <div className="pt-5">
                <Container>
                    <div className="flex lg:flex-nowrap flex-wrap justify-between gap-3">
                        {
                            category.map((data) => (
                                <CategoryCart {...data} key={data.id}/>
                            ))
                        }
                    </div>
                </Container>
            </div>

            <div className="pt-10">
                <Container>
                    <h2 className="text-gray-600!">
                        محصولات پر فروش
                    </h2>
                    <div className="flex lg:flex-nowrap flex-wrap justify-between gap-3 pt-5">
                        {
                            offerProducts.map(item=>(
                                <ProductCart {...item} key={item.id} />
                            ))
                        }
                    </div>
                </Container>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}