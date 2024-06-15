import {Component} from "react";
import Product from "./product";

export class Products extends Component {
    state = {
        products: [
            {id: 0, count: 3, productName: "laptop1"},
            {id: 1, count: 2, productName: "phone 2"},
            {id: 2, count: 6, productName: "aliali"}
        ]
    }

    render() {

        return (
            <div>
                <button onClick={this.handleReset} className={'btn btn-outline-primary'}>Reset</button>
                {this.state.products.map((item, index) => (
                    <Product
                        onDelete={this.onDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        id={item.id} key={index}
                        productName={item.productName}
                        count={item.count}
                    />
                ))}
            </div>
        )
    }

    onDelete = (id) => {
        const productFiltered = this.state.products.filter(item=> item.id !== id)
        this.setState({products: productFiltered});
    }
    handleIncrement = (productId)=>{
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count += 1;
        this.setState({products: newProducts});
    }

    handleDecrement = (productId)=>{
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count -= 1;
        this.setState({products: newProducts});
    }
    handleReset = ()=>{
        const newProducts= this.state.products.map(p=>{
            p.count = 0;
            return p
        });
        this.setState({products: newProducts});
    }
}

export default Products;
