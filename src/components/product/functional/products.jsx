import React, {useState} from 'react';
import Product from "./product";

const Products = (props) => {
    const [products, setProducts] = useState([
            {id: 0, count: 3, productName: "fffffffff"},
            {id: 1, count: 2, productName: "sssssssssss 2"},
            {id: 2, count: 6, productName: "hghhhhhhhhh"}
        ]
    )
    return (
        <div>
            {products.map((item, index) => (
                <Product key={index} productName={item.productName} count={item.count}/>
            ))
            }
        </div>
    );
}

export default Products;