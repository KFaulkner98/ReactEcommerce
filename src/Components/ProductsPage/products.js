import React from 'react';
import data from '../ProductsPage/data.json';
import Items from '../ProductItems/items';


class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "default",
            price: "default"
        }


    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            price: event.target.value,
            type: event.target.value
        })
    }

    render() {
        const { type, price } = this.state;

        return (
            <div>
                <head>
                <link href='https://fonts.googleapis.com/css?family=Bebas Neue' rel='stylesheet' />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                </head>
                <div id="myBtnContainer">
            <div className="filters">
            <select id="productType" value={type} onChange={this.handlePriceDropdownSelect}>
                <option value="default">Show All</option>
                <option value="shoes">Shoes</option>
                <option value="clothes">Clothes</option>
            </select>
            <select id="productPrice" value={price} onChange={this.handlePriceDropdownSelect}>
                <option value="default">Show All</option>
                <option value="price0to200">$0-$500</option>
                <option value="price200to500">$200-$500</option>
                <option value="priceOver500">Over $500</option>
            </select>
            </div>
        </div>
                <div className="container">
                {data.map( (ItemInfo, index) => {
                    if ( price === "default" && type === "default" ) {
                        return <Items product={ItemInfo} />
                    } else if ( price === ItemInfo.price || type === ItemInfo.type ) {
                        return <Items product={ItemInfo} />
                    } else if ( price === ItemInfo.price && type === ItemInfo.type ) {
                        return <Items product={ItemInfo} />
                    }
                })}
                </div>
            </div>
        )
    }
}


export default Product;