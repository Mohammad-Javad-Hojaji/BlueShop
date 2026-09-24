import React, { createContext, useContext, useState } from "react";
type CartItem = {
    qty: number
    id: number
    price: string
}
interface ShoppingCartContext {
    cartItems: CartItem[]
    handleIncreaseProductQty: (id: number, price: string) => void
    getQtyProduct: (id: number) => number
    handleDecreaseProductQty: (id: number) => void
    totalQty: number
    deleteAll: () => void
    totalPrices:number
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
    function handleIncreaseProductQty(id: number, price: string) {
        setCartItems(current => {
            const seleceted = current.find((cart) => (
                cart.id == id
            ))
            if (seleceted == null) {
                return [...current, { id: id, qty: 1, price: price }]
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
                return current.filter(item => {
                    return item.id != id
                })
            }
            else {
                return current.map(item => {
                    if (item.id == id) {
                        return ({ ...item, qty: item.qty - 1 })
                    }
                    else {
                        return (item)
                    }
                })
            }
        })
    }
    const totalQty = cartItems.reduce((qty, item) => {
        return qty + item.qty
    }, 0)
    function deleteAll() {
        setCartItems([])
    }
    const totalPrices = cartItems.reduce((prices, item) => {
        return prices + ( parseInt(item.price.replaceAll(',','')) * item.qty)
    }, 0)

    return (
        <ShoppingCartContext.Provider value={{ totalPrices,deleteAll, cartItems, totalQty, handleIncreaseProductQty, getQtyProduct, handleDecreaseProductQty }}>
            {
                children
            }
        </ShoppingCartContext.Provider>
    )
}
