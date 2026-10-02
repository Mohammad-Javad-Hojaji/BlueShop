import { checkVariant } from "../_UI_/Button/button";
import styles from "./Alerm.module.css";
type Variant = "primary" | "secondary" | "danger" | "warning" | "success"
interface Alerm{
    title:string
    variant:Variant
}
export default function Alerm({title,variant}:Alerm) {
    
    return (
        <div className=" text-white font-medium md:font-bold fixed top-16 right-0 w-full " style={{...checkVariant(variant as Variant)}} >
            <div className="text-center relative h-full py-2 md:py-4">
                <div >
                    {title}
                </div>
                <div className={styles.anim}>

                </div>
            </div>
        </div>

    )
}