import 'assets/styles/main.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Explore from 'components/blocks/Explore'
import Discounts from 'components/blocks/Discounts'
import AboutUs from 'components/blocks/AboutUs'
import OurProducts from 'components/blocks/OurProducts'
import Testimonial from 'components/blocks/Testimonial'
import Offer from 'components/blocks/Offer'
import News from 'components/blocks/News'
import WhoWeAre from 'components/blocks/WhoWeAre'
import CartDetails from 'components/util/CartDetails'

import { useEffect, useState } from 'react';

import tomatosPhoto from 'assets/images/news-item-tomatos.png'
import greenPhoto from 'assets/images/news-item-green.png'
import logo from 'assets/images/logo.svg'


import broccoli from 'assets/images/products/product-broccoli.png'
import banana from 'assets/images/products/product-banana.png'
import nuts from 'assets/images/products/product-nuts.png'
import eggs from 'assets/images/products/product-eggs.png'
import hazelnut from 'assets/images/products/product-hazelnut.png'
import mungBean from 'assets/images/products/product-mung-bean.png'
import tomato from 'assets/images/products/product-tomato.png'
import zelco from 'assets/images/products/product-zelco.png'
import { calcCartTotal } from 'components/util/ProductUtil'

const baseUrl = 'http://127.0.0.1:5050';

function App() {
	const loadProducts = async () => {
		let products = await fetch(`${baseUrl}/products`)
			.then(resp => {
				if (!resp.ok) {
					throw new Error('Error getting products!');
				}
				return resp.json();
			})
			.catch(err => console.error(err));

		setProducts(products);
	}

	const confirmOrder = async (order, name, email) => {
		await fetch(`${baseUrl}/orders`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				order: order,
				name: name,
				email: email,
				total: calcCartTotal(order)
			})
		})
			.then(resp => {
				if (!resp.ok) {
					alert('Error processing order!');
					throw new Error('Error processing order!');
				}
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		loadProducts();
	}, []);

	const [products, setProducts] = useState([]);
	const [cartProducts, setCartProducts] = useState([]);
	const [isCartVisible, setCartModalVisible] = useState(false);
	const [news, setNews] = useState([
		{
			date: "25 Nov", // TODO: date type
			user: "Rachi Card",
			title: "The Benefits of Vitamin D & How To Get It",
			description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
			image: greenPhoto,
		},
		{
			date: "25 Nov", // TODO: date type
			user: "Rachi Card",
			title: "Our Favourite Summertime Tommeto",
			description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
			image: tomatosPhoto,
		},
	])

	function addToCart(product, count) {
		console.log(`Adding ${count} units of ${product.name} to cart...`);

		setCartProducts([...cartProducts, {
			product: product,
			count: count
		}]);
	}

	function openCart() {
		if (cartProducts.length === 0) {
			alert('Your cart is empty!');
			return;
		}

		setCartModalVisible(true);
	}

	function closeCartModal() {
		setCartModalVisible(false);
	}

	function completeOrder(cart, name, email) {
		console.log(`Order by ${name}(${email}) confirmed!`);
		console.log(cart);

		closeCartModal();
		setCartProducts([]);

		confirmOrder(cart, name, email);
	}

	function removeFromCart(entry) {
		const cartCopy = [...cartProducts];
		const idx = cartCopy.indexOf(entry);
		if (idx !== -1) {
			cartCopy.splice(idx, 1);
		} else {
			console.error('Entry not found!');
		}

		setCartProducts(cartCopy);
	}

	function changeProductCountBy(entry, value) {
		const cartCopy = [...cartProducts];
		const idx = cartCopy.indexOf(entry);
		cartCopy[idx].count += value;

		setCartProducts(cartCopy);
	}

	function incrementProductCount(entry) {
		changeProductCountBy(entry, 1);
	}

	function decrementProductCount(entry) {
		changeProductCountBy(entry, -1);
	}

	return (
		<div className="App">
			<Header handleOpenCart={openCart} logo={logo} cartCount={cartProducts.length} />
			<Explore />
			<Discounts />
			<AboutUs />
			<OurProducts handleCart={addToCart} products={products} />
			<Testimonial />
			<Offer products={products.slice(0, 4)} />
			<WhoWeAre />
			<News news={news} />
			<Footer logo={logo} />
			<CartDetails
				incrementProductCount={incrementProductCount}
				decrementProductCount={decrementProductCount}
				handleProductRemoval={removeFromCart}
				order={completeOrder}
				isVisible={isCartVisible}
				cart={cartProducts}
				handleExit={closeCartModal} />
		</div>
	);
}


export default App;
