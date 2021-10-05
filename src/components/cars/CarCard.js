import { Link } from "react-router-dom"

export default function CarCard(props) {
	return (
		<div className="car-card">
			<img src={props.car.img} alt={props.car.name} className="car-card-img"></img>
			<div className="car-card-body">
				<h1 className="car-card-name">{props.car.name}</h1>
				<p className="car-card-desc">{props.car.desc}</p>
				<Link to={props.car.href} className="car-card-btn">Explore</Link>
			</div>
		</div>
	)
}