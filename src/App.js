import React from 'react';
import Product from './Components/ProductsPage/products';
import Items from '../src/Components/ProductItems/items';
import Footer from '../src/Components/Footer/footer';
import Nav from '../src/Components/NavBar/nav';


class App extends React.Component {
  render() {
    return(
      <div>
       <Nav />
        <Product />
        <Footer />
        
      </div>
    )
    
  }
}



export default App;
