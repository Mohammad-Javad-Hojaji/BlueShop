import { useEffect, useState } from "react";
import CategoryCart from "../../components/CategoryCart/CategoryCart";
import Container from "../../components/Container/Container";
import type { Categories } from "../../type/type";
import { getCategory } from "../../services/api";
import CategoryFull from "../../components/CategoryFull/CategoryFull";
import Load from "./../../assets/images/Loading.svg"

export default function Categories() {
    const [categories, setCategories] = useState<Categories>([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        getCategory().then((data) => {
            setCategories(data)
            setLoading(false)
        })
    }, [])
    return (
        <div className="pt-16">
            <Container>
                <div>
                    <h1 className="text-2xl! text-gray-700!">دسته بندی ها</h1>
                    {
                        loading ?
                            (
                                <div className="flex justify-center items-center h-100">
                                    <img src={Load} alt="loading" className="w-1/4" />
                                </div>
                            ) :
                            (
                                <div>
                                    <div className="flex lg:flex-nowrap flex-wrap justify-between gap-3">
                                        {

                                            (
                                                categories.map((data) => (
                                                    <CategoryCart {...data} key={data.id} />
                                                ))
                                            )
                                        }
                                    </div>
                                    <div>
                                        {

                                            (
                                                categories.map((data => (
                                                    <CategoryFull {...data} key={data.id} />
                                                )))
                                            )
                                        }
                                    </div>
                                </div>
                            )
                    }

                </div>
            </Container>
        </div>
    )
}