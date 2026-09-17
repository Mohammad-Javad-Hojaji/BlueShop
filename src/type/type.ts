export interface Category {
  id: number
  name: string
  image: string
  bg: string
}
export type Categorys = Category[]

export type OfferProducts = OfferProduct[]

export interface OfferProduct {
  id: number
  name: string
  price: string
  score: number
  image: string
  categoryid: number
  description: string
}