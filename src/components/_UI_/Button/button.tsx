import type React from "react"
type Variant = "primary" | "secondary" | "danger" | "success" | "warning" | "light" | "info"
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
    function checkVariant(Variant: Variant) {
        if (Variant == "primary") {
            return { backgroundColor: "#5156fc", color: "#fff" }
        }
        if (Variant == "danger") {
            return { backgroundColor: "#bb2124", color: "#fff" }
        }
        if (Variant == "success") {
            return { backgroundColor: "#22bb33", color: "#fff" }
        }
        if (Variant == "warning") {
            return { backgroundColor: "#f0ad4e", color: "#fff" }
        }
        if (Variant == "info") {
            return { backgroundColor: "#5bc0de", color: "#fff" }
        }
        if (Variant == "secondary") {
            return { backgroundColor: "#aaaaaa", color: "#fff" }
        }
        if (variant == "light") {
            return { backgroundColor: "#ffffff", color: "#111" }
        }
        else {
            return { backgroundColor: "#242345", color: "#fff" }
        }
    }
}