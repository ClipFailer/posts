import { ChangeEvent, useMemo, useState } from 'react'
import { useGetAllProductsQuery } from '../../api/products/productsApi'
import ProductsList from '../../components/ProductsList/ProductsList'

import { useSelector } from 'react-redux'
import Filter from '../../components/Filter/Filter'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import { useSortedProducts } from '../../hooks/useSortedProducts'
import { selectFavorites } from '../../store/favorites/favoritesSlice'
import { selectProducts } from '../../store/products/productsSlice'
import { FilterEnum, SortEnum } from '../../types'

export default function ProductsPage() {
	const [currentPage, setCurrentPage] = useState(1)
	const limit = 10

	const [filter, setFilter] = useState<FilterEnum>(FilterEnum.ALL)
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [sort, setSort] = useState<SortEnum>(SortEnum.TITLE)

	const favorites = useSelector(selectFavorites)

	const changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value as FilterEnum)
	}

	const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const changeSort = (e: ChangeEvent<HTMLSelectElement>) => {
		setSort(e.target.value as SortEnum)
	}

	const {
		isLoading: isProductLoading,
	} = useGetAllProductsQuery()

	const products = useSelector(selectProducts)

	const sortedProducts = useMemo(
		() => useSortedProducts(products!, favorites, filter, searchQuery, sort),
		[products, favorites, filter, searchQuery]
	)

	return (
		<div className="relative">
			<h1 className="text-center text-3xl font-bold mb-5">Посты</h1>

			<Filter
				filter={filter}
				changeFilter={changeFilter}
				searchQuery={searchQuery}
				changeSearchQuery={changeSearch}
				changeSort={changeSort}
			/>

			<ProductsList
				products={sortedProducts}
				currentPage={currentPage}
				limit={limit}
			/>

			{filter !== FilterEnum.FAVORITES
				? sortedProducts.length > 0 && (
						<Pagination
							currentPage={currentPage}
							changePage={setCurrentPage}
							total={sortedProducts.length}
							limit={limit}
						/>
				  )
				: ''}

			{isProductLoading && <Loader />}
		</div>
	)
}
