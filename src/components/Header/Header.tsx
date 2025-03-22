import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className="flex justify-between mb-10 pt-2 text-2xl">
			<button className="bg-blue-600 px-2 py-1 rounded-2xl shadow-2xl font-bold cursor-pointer hover:bg-blue-700 transition-colors ">
				<Link to="/">Посты</Link>
			</button>
			<button className="bg-blue-600 px-2 py-1 rounded-2xl shadow-2xl font-bold cursor-pointer hover:bg-blue-700 transition-colors ">
				<Link to="/create-product">Создать</Link>
			</button>
		</div>
	)
}
