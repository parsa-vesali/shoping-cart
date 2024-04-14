import React from 'react'

export default function Cart() {
    return (
        <>
            <div className="empty-price"></div>
            <div className="cart-item">
                <div className="product-item">
                    <div className="product-detail">
                        <img src="./img/1.jpg" alt="" />
                        <h2>محصول 1 </h2>
                    </div>
                    <div className="product-price">
                        <div className="price">
                            <span>10000000</span>
                            <span className='qty'>1</span>
                        </div>
                    </div>
                    <div className="remove-item">
                        <button>حذف کردن</button>
                    </div>
                </div>
            </div>
            <div className="total-price">
                <div className="total-text">مجموع قیمت</div>
                <div className="total">120000 تومان</div>
            </div>
        </>
    )
}
