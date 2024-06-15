import {Component} from "react";


class Product extends Component {

    render() {
        return (
            <div>
                <span className={'m-2 text-info'}>{this.props.productName}</span>
                <span className={'m-2 badge bg-primary'}>{this.props.count}</span>
                <button onClick={this.increment} className={'m-2 btn btn-success'}>+</button>
                <button onClick={this.decrement} className={'m-2 btn btn-warning' }>-</button>
                <button onClick={this.delete} className={'m-2 btn btn-danger'}>delete</button>
            </div>
        )
    }

    increment = ()=>{
        this.props.onIncrement(this.props.id)
    }

    decrement = ()=>{
        this.props.onDecrement(this.props.id)

    }

    delete = ()=>{
        this.props.onDelete(this.props.id)
    }
}


export default Product;
