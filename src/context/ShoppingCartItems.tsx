import React, { createContext, useContext, useState } from "react";
type CartItem = {
    qty: number
    id: number
}
interface ShoppingCartContext {
    cartItems: CartItem[]
    handleIncreaseProductQty: (id: number) => void
    getQtyProduct: (id: number) => number
    handleDecreaseProductQty: (id: number) => void
}
export const ShoppingCartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext)
export const useShoppingCartContext = () => (
    useContext(ShoppingCartContext)
)

export function ShoppingCartContextProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    function getQtyProduct(id: number) {
        const selected = cartItems.find((item) => {
            return item.id == id
        })
        if (selected !== undefined) {
            return selected?.qty
        }
        return 0

    }
    function handleIncreaseProductQty(id: number) {
        setCartItems(current => {
            const seleceted = current.find((cart) => (
                cart.id == id
            ))
            if (seleceted == null) {
                return [...current, { id: id, qty: 1 }]
            }
            else {
                return current.map(item => {
                    if (item.id == id) {
                        return ({
                            ...item,
                            qty: item.qty + 1
                        })
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    function handleDecreaseProductQty(id: number) {
        setCartItems(current => {
            const seleceted = current.find((cart) => (
                cart.id == id
            ))
            if (seleceted?.qty == 1) {
               return current.filter(item=>{
                return item.id !=id
               })
            }
            else{
                return current.map(item=>{
                    if (item.id ==id) {
                        return ({...item , qty:item.qty-1 })
                    }
                    else{
                        return(item)
                    }
                })
            }
        })
    }
    return (
        <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseProductQty, getQtyProduct ,handleDecreaseProductQty}}>
            {
                children
            }
        </ShoppingCartContext.Provider>
    )
}
