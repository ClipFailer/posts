import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProductPage from '../../pages/CreateProductPage/CreateProductPage'
import EditProduct from '../../pages/EditProduct/EditProduct'
import ProductPage from '../../pages/ProductPage/ProductPage'
import ProductsPage from '../../pages/ProductsPage/ProductsPage'
import Header from '../Header/Header'

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<div className="container mx-auto px-10 pt-1">
					<Header />
					<Routes>
						<Route path="/" element={<ProductsPage />} />
						<Route path="/products/:id" element={<ProductPage />} />
						<Route path="/create-product" element={<CreateProductPage />} />
						<Route path="/edit-product/:id" element={<EditProduct />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}
