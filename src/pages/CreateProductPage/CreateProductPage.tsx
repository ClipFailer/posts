import { useForm } from 'react-hook-form'
import { Product } from '../../types'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import Notification from '../../components/Notification/Notification'
import { addProduct } from '../../store/products/productsSlice'

type FormData = Product

export default function CreateProductPage() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [isNotification, setIsNotification] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ mode: 'onChange' })

	const createPost = (data: FormData) => {
		// data.userId = '1'
		data.id = v4()
		dispatch(addProduct(data))
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
			<h1 className="text-center text-3xl font-bold mb-5">Создание поста</h1>
			<div className=" bg-neutral-900 p-10 rounded-xl">
				<form
					className="flex flex-col gap-5"
					onSubmit={handleSubmit(createPost)}
				>
					<div>
						<h1 className="mb-2">Название поста</h1>
						<input
							type="text"
							placeholder="Введите название поста"
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
						Создать пост
					</button>
				</form>
			</div>

			{isNotification && (
				<Notification message={`Пост успешно создан! Переадресация...`} />
			)}
		</div>
	)
}
