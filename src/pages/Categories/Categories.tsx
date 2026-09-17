import { useEffect, useState } from "react";
import CategoryCart from "../../components/CategoryCart/CategoryCart";
import Container from "../../components/Container/Container";
import type { Categorys } from "../../type/type";
import { getCategory } from "../../services/api";
import CategoryFull from "../../components/CategoryFull/CategoryFull";

export default function Categories() {
    const [categories, setCategories] = useState<Categorys>([])
    useEffect(() => {
        getCategory().then((data) => {
            setCategories(data)
        })
    }, [])
    return (
        <div className="pt-16">
            <Container>
                <div>
                    <h1 className="text-2xl! text-gray-700!">دسته بندی ها</h1>
                    <div className="flex lg:flex-nowrap flex-wrap justify-between gap-3">
                        {
                            categories.map((data) => (
                                <CategoryCart {...data} key={data.id} />
                            ))
                        }
                    </div>
                    <div>
                        {
                            categories.map((data=>(
                                <CategoryFull {...data}  key={data.id} />
                            )))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}