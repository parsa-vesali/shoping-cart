import React, { useState } from 'react'
import Cart from "../Components/Cart/Cart";
import Filter from "../Components/Filter/Filter";
import Products from "../Components/Products/Products";
import data from '../data.json'
export default function Home() {
    const [item, setItem] = useState(data.products)
    const [sort, setSort] = useState('asc')
    const [brand, setBrand] = useState('')
    const [cartItems, setCartItems] = useState([])



    const sortProduct = (event) => {
        setSort(event.target.value)
        if (sort === 'asc') {
            setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)))
        }
        if (sort === 'desc') {
            setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)))
        }
    }



    const filterProducts = (event) => {
        if (event.target.value === '') {
            setBrand(event.target.value)
            setItem(data.products)
        } else {
            setBrand(event.target.value)
            setItem(data.products.filter((product) => product.availableBrand.indexOf(event.target.value) >= 0))
        }
    }


    const addProduct = (product) => {
        const exist = cartItems.find((element) => element.id === product.id)
        if (exist) {
            setCartItems(
                cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element)
            )
        } else {

            setCartItems([...cartItems, { ...product }])
        }

    }


    const removeProduct = (product) => {
        const exist = cartItems.find((element) => element.id === product.id)
        if (exist.qty === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id))
        } else {
            setCartItems(
                cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element)
            )
        }
    }

    return (
        <>
            <header>
                <a href="#">فروشگاه</a>
            </header>
            <div className="content">
                <div className="main">
                    <Filter
                        count={item.length}
                        sortProduct={sortProduct}
                        brand={brand}
                        filterProducts={filterProducts}
                    />
                    <Products item={item} addProduct={addProduct} />
                </div>
                <div className="sidebar">
                    <Cart cartItems={cartItems} removeProduct={removeProduct} />
                </div>
            </div>
            <footer></footer>
        </>
    )
}
