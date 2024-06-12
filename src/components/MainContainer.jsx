import styled from './main.module.scss'
import Cart from "./cart/Cart";

function MainContainer() {
    let list = ['رضا عبیری', 'علی عبدالمالکی', 'عباس قدیمی', 'سید رضا سید حسینی']
    return (
        <div className={styled.mainColumn}>
            <div className={styled.mainRow}>
                {list.map((item, i) => {
                    return (
                        <Cart text={item}/>
                    )
                })}
            </div>
            {list.map((item, i) => {
                return (
                    <Cart text={item}/>
                )
            })}

        </div>
    )
}

export default MainContainer