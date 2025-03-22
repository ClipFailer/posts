import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface Props {
	currentPage: number
	changePage: (page: number) => void
	total: number
	limit: number
}

export default function Pagination({
	currentPage,
	changePage,
	total,
	limit,
}: Props) {
	const nextPage = () => {
		if (currentPage < 10) {
			changePage(currentPage + 1)
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			changePage(currentPage - 1)
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	return (
		<div className="flex justify-center gap-4 items-center my-5">
			<button
				className="text-2xl  bg-blue-600 rounded-2xl p-2 cursor-pointer"
				onClick={prevPage}
			>
				<FaArrowLeft />
			</button>
			<h1 className="text-3xl">
				{currentPage} / {Math.ceil(total / limit)}
			</h1>
			<button
				className="text-2xl   bg-blue-600 rounded-2xl p-2 cursor-pointer"
				onClick={nextPage}
			>
				<FaArrowRight />
			</button>
		</div>
	)
}
