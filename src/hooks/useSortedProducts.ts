import { FilterEnum, Product, SortEnum } from '../types'

export const useSortedProducts = (
	products: Product[],
	favorites: Product[],
	filter: FilterEnum,
	searchQuery: string,
	sort: SortEnum
) => {
	let sortedProducts: Product[] = []

	switch (filter) {
		case FilterEnum.ALL:
			sortedProducts = products
			break
		case FilterEnum.FAVORITES:
			sortedProducts = favorites
	}

	if (searchQuery) {
		sortedProducts = sortedProducts.filter(p =>
			p[sort]?.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}

	return sortedProducts
}
