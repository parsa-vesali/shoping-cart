import React from 'react'
import formatCurrency from '../utils'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckIcon from '@mui/icons-material/Check';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Fade } from 'react-reveal'

export default function Cart(props) {

    const { cartItems } = props
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const totlaPrice = itemPrice
    return (
        <>
            {
                cartItems.length === 0 ? (
                    <div className="empty-price">
                        <p>سبد خرید شما خالی است</p>
                        <ErrorOutlineIcon />
                    </div>
                ) : (
                    <div className="show-price">
                        <p>شما {cartItems.length} محصول در سبد خرید دارید</p>
                        <CheckIcon />
                    </div>
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

                                <button className="remove-item" onClick={() => props.removeProduct(item)}>
                                    <RemoveCircleOutlineIcon />
                                </button>

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
