import React from 'react'

export default function Cart(props) {

    const { cartItems } = props
    return (
        <>
            <div className="empty-price"></div>
            <div className="cart-item">
                {
                    cartItems.map(item =>
                        <div key={item.id} className="product-item">
                            <div className="product-detail">
                                <img src={item.image} alt="" />
                                <h2> {item.title} </h2>
                            </div>
                            <div className="product-price">
                                <div className="price">
                                    <span>{item.price}</span>
                                    <span className='qty'>{item.qty}</span>
                                </div>
                            </div>
                            <div className="remove-item">
                                <button>حذف کردن</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="total-price">
                <div className="total-text">مجموع قیمت</div>
                <div className="total">120000 تومان</div>
            </div>
        </>
    )
}
