function layout({ children }) {
	return (
		<div className="min-h-screen flex flex-col ">
			<main>{children}</main>
		</div>
	)
}

export default layout
