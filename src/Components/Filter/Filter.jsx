import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
export default function Filter(props) {
    return (
        <div className='filter'>
            <div className="result">
                تعداد محصولات : {props.count} محصول
            </div>
            <div className="sort">
                <div className="sort-title">
                    <p>مرتب سازی محصول</p>
                    <FilterListIcon />
                </div>
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
                <select value={props.brand} onChange={props.filterProducts}>
                    <option value="">همه</option>
                    <option value="samsung">سامسونگ</option>
                    <option value="iphone">اپل</option>
                    <option value="blackberry">شیامی</option>
                    <option value="sony">هواوی</option>
                </select>
            </div>
        </div>
    )
}
