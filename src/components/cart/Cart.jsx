import styled from './cart.module.scss'
function Cart({text}){
    return (
        <div className={styled.cart}>
            <p>{text}</p>
        </div>
    )
}

export default Cart