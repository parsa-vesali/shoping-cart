import React, { useState } from 'react'
import Cart from "../Components/Cart/Cart";
import Filter from "../Components/Filter/Filter";
import Products from "../Components/Products/Products";
import data from '../data.json'
export default function Home() {
    const [item, setItem] = useState(data.products)
    const [sort, setSort] = useState('asc')
    const [brand, setBrand] = useState('')

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
                    <Products item={item} />
                </div>
                <div className="sidebar">
                    <Cart />
                </div>
            </div>
            <footer></footer>
        </>
    )
}
