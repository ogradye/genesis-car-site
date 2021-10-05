export default function BoxSelect(props) {
	return (
		<div className={`select-box ${props.active ? 'active' : ''}`} onClick={props.onClick}>
			<div className="select-box-top">
				<h1 className="select-box-title">
					{props.title}
				</h1>

				<p className="select-box-price">
					${props.price.toLocaleString('en-US')}
				</p>
			</div>
			<ul className="select-box-list">
				{props.items && props.items.map((item, idx) => {
					return (
						<li className="select-box-item" key={idx}>
							{item}
						</li>
					)
				})}
			</ul>
		</div>
	)
}