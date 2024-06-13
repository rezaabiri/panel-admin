import styled from './main.module.scss'
import Cart from "./cart/Cart";
import Input from "./inputs/input";

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
                    <div className={styled.padding_10}>
                        <Cart text={item}/>

                    </div>
                )
            })}
            <div className={styled.mainRow}>
                <Input id={'name'} placeHolder={'نام خود را وارد نمایید'}/>
                <Input id={'name'} placeHolder={'نام خود را وارد نمایید'}/>
            </div>
        </div>
    )
}
export default MainContainer