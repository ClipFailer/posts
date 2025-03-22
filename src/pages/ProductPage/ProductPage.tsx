import { useMemo, useState } from 'react'
import { FaEdit, FaHeart } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { RiDislikeFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
	removeFavorite,
	selectFavorites,
	toggleFavorites,
} from '../../store/favorites/favoritesSlice'
import {
	removeProduct,
	selectProducts,
} from '../../store/products/productsSlice'

import Notification from '../../components/Notification/Notification'
import { Product } from '../../types'

export default function ProductPage() {
	const params = useParams()
	const navigate = useNavigate()
	const [isNotification, setIsNotification] = useState(false)

	const favorites = useSelector(selectFavorites)
	const products = useSelector(selectProducts)

	const product = useMemo(() => {
		return products.find(p => p.id.toString() === params.id)
	}, [products, params.id])

	const dispatch = useDispatch()

	const toggle = (product: Product) => {
		dispatch(toggleFavorites(product))
	}

	const remove = () => {
		dispatch(removeProduct(product!))
		dispatch(removeFavorite(product!))
		successNotification()
	}

	const successNotification = () => {
		setIsNotification(true)
		setTimeout(() => {
			setIsNotification(false)
			navigate('/')
		}, 2000)
	}

	return (
		<div className="bg-neutral-900 p-10 rounded-xl mb-10">
			<h1 className="text-3xl font-bold text-center mb-5">{product?.title}</h1>
			{/* <h2 className="text-xl font-bold mb-5">Автор {user?.name}</h2> */}
			<p>{product?.body}</p>

			<div className="flex justify-end gap-5 mt-10">
				<button
					className="bg-green-500 pl-3 px-2 py-1 rounded-xl font-bold text-3xl cursor-pointer hover:bg-green-600 transition-colors"
					onClick={() => navigate(`/edit-product/${product?.id}`)}
				>
					<FaEdit />
				</button>
				<button
					className="text-3xl bg-red-600 px-2 py-1 rounded-xl font-bold cursor-pointer hover:bg-red-700 transition-colors"
					onClick={remove}
				>
					<MdDeleteForever />
				</button>
				<button
					className="font-bold text-3xl cursor-pointer hover:animate-pulse"
					onClick={() => toggle(product!)}
				>
					{favorites.some(p => p.id === product?.id) ? (
						<RiDislikeFill />
					) : (
						<FaHeart />
					)}
				</button>
			</div>

			{isNotification && (
				<Notification message={`Пост успешно удалён! Переадресация...`} />
			)}
		</div>
	)
}
