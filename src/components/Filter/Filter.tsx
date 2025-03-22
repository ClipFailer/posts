import { ChangeEvent } from 'react'
import { SortEnum } from '../../types'

interface Props {
	filter: string
	changeFilter: (e: ChangeEvent<HTMLInputElement>) => void
	searchQuery: string
	changeSearchQuery: (e: ChangeEvent<HTMLInputElement>) => void
	changeSort: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function Filter({
	filter,
	changeFilter,
	changeSearchQuery,
	changeSort,
}: Props) {
	return (
		<div className="flex items-center justify-between gap-5 mb-5 flex-col md:flex-row">
			<div className="flex gap-2">
				<input
					type="text"
					placeholder="Поиск"
					className="p-2 rounded-xl outline-2 focus:outline-blue-600"
					onChange={e => changeSearchQuery(e)}
				/>
				<select
					className="rounded-xl"
					defaultValue={SortEnum.TITLE}
					onChange={e => {
						changeSort(e)
					}}
				>
					{/* <option value="" className="text-black" disabled>
						Фильтр
					</option> */}
					<option value={SortEnum.TITLE} className="text-black">
						По названию
					</option>
					<option value={SortEnum.BODY} className="text-black">
						По содержимому
					</option>
				</select>
			</div>
			<div className="flex gap-5">
				<label>
					<input
						type="radio"
						value="all"
						className="mr-1"
						checked={filter === 'all'}
						onChange={e => changeFilter(e)}
					/>
					Все
				</label>
				<label>
					<input
						type="radio"
						value="favorites"
						className="mr-1"
						checked={filter === 'favorites'}
						onChange={e => changeFilter(e)}
					/>
					Избранные
				</label>
			</div>
		</div>
	)
}
