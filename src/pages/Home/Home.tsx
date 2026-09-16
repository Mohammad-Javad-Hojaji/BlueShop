import { Link } from "react-router-dom"
import banner from "./../../assets/images/banner.png"
import Container from "../../components/Container/Container"
import { getCategory } from "../../services/api"
import { useEffect, useState } from "react"
import type { Categorys } from "../../type/type"
import CategoryCart from "../../components/CategoryCart/CategoryCart"
export default function Home() {
    const [category, setCategory] = useState<Categorys>([])
    useEffect(() => {
        getCategory().then(data => {
            setCategory(data)
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
                                <CategoryCart {...data} />
                            ))
                        }
                    </div>
                </Container>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}