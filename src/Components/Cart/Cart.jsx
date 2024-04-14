import React from 'react'
import formatCurrency from '../utils'
import { Fade } from 'react-reveal'
export default function Cart(props) {

    const { cartItems } = props
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const totlaPrice = itemPrice
    return (
        <>
            {
                cartItems.length === 0 ? (
                    <div className="empty-price">سبد خرید شما خالی است</div>
                ) : (
                    <div className="show-price">شما {cartItems.length} محصول در سبد خرید دارید</div>
                )
            }
            <div className="cart-item">
                {
                    cartItems.map(item =>
                        <Fade key={item.id} left>
                            <div className="product-item">
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
                                    <button onClick={() => props.removeProduct(item)}>حذف کردن</button>
                                </div>
                            </div>
                        </Fade>
                    )
                }
            </div>
            <div className="total-price">
                <div className="total-text">مجموع قیمت</div>
                <div className="total">{formatCurrency(totlaPrice)}</div>
            </div>
        </>
    )
}
