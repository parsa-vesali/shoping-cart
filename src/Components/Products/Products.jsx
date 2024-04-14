import React from 'react'

export default function Products(props) {
    return (
        <div>
            <ul className="products">
                {props.item.map(item => (
                    <li key={item.id}>
                        <div className="product">
                            <img src={item.image} alt="" />
                            <p>{item.title}</p>
                            <div className="product-price">
                                <button>افزودن به سبد خرید</button>
                                <div className="price">{item.price}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
