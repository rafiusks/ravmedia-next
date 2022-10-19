import Image from "next/image"

function Tech({ img, title }) {
	return (
		<div className="flex items-center space-x-2 p-2">
			<div className="relative h-10 w-10">
				<Image className="w-10" src={img} layout="fill" alt={title} />
			</div>
			<span className="font-semibold">{title}</span>
		</div>
	)
}

export default Tech
