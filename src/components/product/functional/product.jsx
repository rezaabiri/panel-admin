import React, {useState} from 'react';

const Product = ({productName, count: productCount}) => {
    const [count, setCount] = useState(productCount);
    return (
        <div>
            <span className={'m-2 text-info'}>{productName}</span>
            <span className={'m-2 badge bg-primary'}>{count}</span>
            <button onClick={increment} className={'m-2 btn btn-success'}>+</button>
            <button onClick={decrement} className={'m-2 btn btn-warning' }>-</button>
            <button onClick={deleteProduct} className={'m-2 btn btn-danger'}>delete</button>
        </div>
    );

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        setCount(count - 1)

    }

    function deleteProduct(){
        setCount(0)

    }
}

export default Product;