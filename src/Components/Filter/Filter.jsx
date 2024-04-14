import React from 'react'

export default function Filter(props) {
    return (
        <div className='filter'>
            <div className="result">
                تعداد محصولات : {props.count} محصول
            </div>
            <div className="sort">
                <div className="sort-title">مرتب سازی محصول</div>
                <div className="form-checkbox">
                    <div className="form-group">
                        <input type="radio" value='asc' name='radiovalue' onChange={props.sortProduct} />
                        <label htmlFor="">جدیدترین</label>
                    </div>
                    <div className="form-group">
                        <input type="radio" value='desc' name='radiovalue' onChange={props.sortProduct} />
                        <label htmlFor="">قدیمی ترین</label>
                    </div>
                </div>
            </div>
            <div className="brand">
                برند ها
                <select>
                    <option value="">همه</option>
                    <option value="">سامسونگ</option>
                    <option value="">آیفون</option>
                    <option value="">موتورولا</option>
                    <option value="">بلک بری</option>
                    <option value="">ال جی</option>
                    <option value="">سونی</option>
                </select>
            </div>
        </div>
    )
}
