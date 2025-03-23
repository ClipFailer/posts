import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Notification from '../../components/Notification/Notification'
import { updateFavorite } from '../../store/favorites/favoritesSlice'
import {
	selectProducts,
	updateProduct,
} from '../../store/products/productsSlice'
import { Product } from '../../types'

export default function EditProduct() {
	const params = useParams()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Product>({ mode: 'onChange' })

	const [isNotification, setIsNotification] = useState(false)

	const dispatch = useDispatch()
	const products = useSelector(selectProducts)

	const product = useMemo(() => {
		return products.find(p => p.id.toString() === params.id)
	}, [products, params.id])

	const edit = (data: Product) => {
		data.id = product!.id
		data.userId = product!.userId
		dispatch(updateProduct(data))
		dispatch(updateFavorite(data))
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
		<div className="mb-10">
			<h1 className="text-center text-3xl font-bold mb-5">
				Редактирование поста
			</h1>
			<div className=" bg-neutral-900 p-10 rounded-xl">
				<form className="flex flex-col gap-5" onSubmit={handleSubmit(edit)}>
					<div>
						<h1 className="mb-2">Название поста</h1>
						<input
							type="text"
							placeholder="Введите название поста"
							defaultValue={product?.title}
							className="p-2 rounded-xl outline-2 focus:outline-blue-600 w-full"
							{...register('title', {
								required: 'Название поста обязательно!',
								minLength: {
									value: 3,
									message:
										'Название поста должно состоять как-минимум из 3-х символов',
								},
							})}
						/>
						{errors.title && (
							<h1 className="mt-2 text-red-500">{errors.title.message}</h1>
						)}
					</div>

					<div>
						<h1 className="mb-2">Содержание</h1>
						<textarea
							placeholder="Введите содержание поста"
							defaultValue={product?.body}
							className="p-3 rounded-xl outline-2 focus:outline-blue-600 w-full min-h-50"
							{...register('body', {
								required: 'Содержание поста обязательно!',
								minLength: {
									value: 30,
									message:
										'Содержание поста должно состоять как-минимум из 30-ти символов',
								},
							})}
						/>
						{errors.body && (
							<h1 className="mt-2 text-red-500">{errors.body.message}</h1>
						)}
					</div>
					<button className="bg-blue-600 px-2 py-1 rounded-2xl shadow-2xl font-bold text-xl cursor-pointer hover:bg-blue-700 transition-colors ">
						Редактировать
					</button>
				</form>
			</div>

			{isNotification && (
				<Notification message={`Пост успешно изменён! Переадресация...`} />
			)}
		</div>
	)
}
