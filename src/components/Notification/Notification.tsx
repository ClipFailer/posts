interface Props {
	message: string
}

export default function Notification({ message }: Props) {
	return (
		<div className="fixed inset-0 bg-black/55 backdrop-blur-md flex justify-center items-center">
			<h1 className="text-4xl font-bold animate-pulse">{message}</h1>
		</div>
	)
}
