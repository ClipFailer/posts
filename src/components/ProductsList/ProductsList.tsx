import { useMemo } from 'react'
import { Product } from '../../types'
import ProductItem from '../ProductItem/ProductItem'

interface Props {
	products?: Product[]
	limit: number
	currentPage: number
}

export default function ProductsList({ products, currentPage, limit }: Props) {
	// const { data: users, isLoading, error } = useGetAllUsersQuery()

	// Делим массив продуктов для пагинации
	const cuttedProducts = useMemo(() => {
		const start = (currentPage - 1) * limit
		const end = start + limit

		return products!.slice(start, end)
	}, [products, currentPage, limit])

	if (products?.length === 0) {
		return <h1 className="text-center text-2xl">Посты не найдены.</h1>
	}

	return (
		<div className="grid grid-cols-1  gap-4 mx-auto mb-5 ">
			{cuttedProducts.map(p => (
				<ProductItem
					key={p.id}
					data={p}
					// creator={users?.find(u => u.id === p.userId)}
				/>
			))}
		</div>
	)
}
