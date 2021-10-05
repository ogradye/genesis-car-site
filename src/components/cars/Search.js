import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
	const [foundCars, setFoundCars] = useState([]);

	const cars = [
		{ name: 'Genesis G80', price: '$42,000', model: 'g80', img: '/g80_white.png' },
		{ name: 'Genesis G90', price: '$72,000', model: 'g90', img: '/g90_black.png' }
	];



	const handleSearch = (e) => {
		const keyword = e.target.value;

		if (keyword !== '') {
			const results = cars.filter((car) => {
				return car.name.toLowerCase().startsWith(keyword.toLowerCase()) || car.model.toLowerCase().startsWith(keyword.toLowerCase());
				// Use the toLowerCase() method to make it case-insensitive
			});
			setFoundCars(results);
		}
		else {
			setFoundCars([])
		}
	};

	return (
		<div className="search-wrapper">
			<input type="search" className="form-control search" placeholder="Search" onChange={handleSearch}></input>
			<div className="search-results">
				{foundCars.length >= 1 &&
					foundCars.map((car) => {
						return (
							<div className="search-result">
								<Link to={`/cars/builder/${car.model}/1`}>
									{car.img && <img src={car.img} alt={car.name} className="search-result-img"></img>}
									<p className="search-result-name">{car.name}</p>
									<p className="search-result-price">{car.price}</p>
								</Link>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}