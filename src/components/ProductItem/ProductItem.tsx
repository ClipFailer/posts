import { useNavigate } from 'react-router-dom'
import { Product } from '../../types'

import { FaHeart } from 'react-icons/fa'
import { RiDislikeFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

import { MdDeleteForever } from 'react-icons/md'
import {
	removeFavorite,
	selectFavorites,
	toggleFavorites,
} from '../../store/favorites/favoritesSlice'
import { removeProduct } from '../../store/products/productsSlice'

interface Props {
	data: Product
	// creator?: User
}

export default function ProductItem({ data }: Props) {
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const favorites = useSelector(selectFavorites)

	const toggle = (e: React.MouseEvent<HTMLButtonElement>, data: Product) => {
		e.stopPropagation()
		dispatch(toggleFavorites(data))
	}

	const remove = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
		e.stopPropagation()
		dispatch(removeFavorite(product))
		dispatch(removeProduct(product))
	}

	return (
		<div
			className="flex flex-col justify-between bg-blue-600 p-5 rounded-xl shadow-2xl hover:bg-blue-700 transition-colors cursor-pointer"
			onClick={() => navigate(`/products/${data.id}`)}
		>
			<div>
				<h1 className="text-xl font-bold mb-2 text-center  truncate">
					{data.title}
				</h1>
				<h2 className="text-xl font-bold"></h2>
			</div>
			{/* <p>Создатель поста: {creator?.name}</p> */}

			<div className="flex justify-end gap-5 mt-5">
				<button
					className="text-3xl bg-red-600 px-2 py-1 rounded-xl font-bold cursor-pointer hover:bg-red-700 transition-colors"
					onClick={e => remove(e, data)}
				>
					<MdDeleteForever />
				</button>
				<button
					className="font-bold text-3xl cursor-pointer hover:animate-pulse active:animate-ping"
					onClick={e => toggle(e, data)}
				>
					{favorites.some(p => p.id === data.id) ? (
						<RiDislikeFill />
					) : (
						<FaHeart />
					)}
				</button>
			</div>
		</div>
	)
}
