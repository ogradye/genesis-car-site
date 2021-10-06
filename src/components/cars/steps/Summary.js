import { Link } from "react-router-dom"

export default function Summary(props) {
	return (
		<div>
			<h1 className="summary-title">Your Genesis {props.car.toUpperCase()}</h1>
			<img src={`/${props.car}/${props.selections.color}.jpg`} alt="car" className="summary-car"></img>
			<h1>Power Train</h1>
			<div className={`select-box `}>
				<div className="select-box-top">
					<h1 className="select-box-title">
						{props.selections.pt}
					</h1>

					<p className="select-box-price">
						${props.selections.price.toLocaleString('en-US')}
					</p>
				</div>
				<ul className="select-box-list">
					{props.selections.features && props.selections.features.map((item, idx) => {
						return (
							<li className="select-box-item" key={idx}>
								{item}
							</li>
						)
					})}
				</ul>
			</div>

			<h1>Color</h1>
			<div className={`select-box summary-color`}>
				<div className={`color-select ${props.selections.color}`}></div>
				{props.selections.color[0].toUpperCase() + props.selections.color.slice(1)}
			</div>

			<h1>Total</h1>
			<h2>${props.selections.price.toLocaleString('en-US')}</h2>
			{props.step === 5 && <div>
				<Link to={props.step !== 1 ? `/cars/builder/${props.car}/${props.step + 1}` : `/cars/builder/${props.car}/${props.step}`} className="btn btn-primary complete-order-btn">Complete Order</Link>
			</div>}
		</div>
	)
}