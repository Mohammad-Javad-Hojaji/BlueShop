import { Link } from "react-router-dom";
import type { Category } from "../../type/type";

export default function CategoryCart({ name, id, image, bg }: Category) {

    return (
        <Link to={`/category/${id}`} className={`w-4/9  lg:w-1/5 bg py-10 rounded-2xl `} style={{ backgroundColor: bg }}>
            <div className="flex flex-col  justify-center items-center">
                <img src={image} alt={`category-${name}`} className="h-12"/>
                <h3 className="font-bold">
                    {name}
                </h3>
            </div>
        </Link>
    )
}