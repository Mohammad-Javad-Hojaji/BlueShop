import type React from "react"
type Variant = "primary" | "secondary" | "danger" | "success" | "warning"
type Button = React.ComponentProps<"button"> & {
    children: React.ReactNode
    variant?: Variant
}
export default function Button({ variant, children, className, style, ...rest }: Button) {
    return (
        <button className={className + " py-6 px-4"} style={{ ...style, ...checkVariant(variant as Variant) }} {...rest}>
            {
                children
            }
        </button>
    )
    function checkVariant( Variant :  Variant ) {
        if (Variant == "primary") {
            return { backgroundColor: "#5156fc", color: "#fff" }
        }
        else {
            return { backgroundColor: "#242345", color: "#fff" }
        }
    }
}