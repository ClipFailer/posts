interface Props {
	message: string
}

export default function Notification({ message }: Props) {
	return (
		<div className="fixed inset-0 bg-black/55 backdrop-blur-md flex justify-center items-center">
			<h1 className="text-xl text-center font-bold animate-pulse md:text-2xl">
				{message}
			</h1>
		</div>
	)
}
