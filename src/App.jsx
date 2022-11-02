import React from 'react';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import products from './data/products';
import './styles/index.scss';

function App() {
	return (
		<div>
			<Header />
			<Product product={products[0]} />
		</div>
	);
}

export default App;
