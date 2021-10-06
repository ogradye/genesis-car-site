import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import CarCard from '../components/cars/CarCard'

export default function Home() {
	return (
		<div className="container">
			<div className="hero">
				<h1 className="hero-head">
					<span className="hero-one">
						First Ever 2023
					</span>
					<span className="hero-two">
						Genesis <span className="hero-g80">G80</span>
					</span>
				</h1>

				<img src="/g80_white.png" alt="g80" className="hero-g80-img"></img>

				<h2 className="hero-h2">LUXURY, PERFORMANCE, & ELECTRIC</h2>
				<p className="hero-p">
					Introducing the all-new Genesis Electrified G80. The debut of an energized new approach to clean driving,
					our first-ever all-electric sedan proudly builds upon G80’s legacy of providing world-class performance,
					design, and technology to the modern motorist. For Electrified G80, the future is now. Coming spring 2022.
				</p>

				<Link to="/cars/builder/g80/1" className="btn btn-primary hero-cta">Reserve your 2023 G80 Today <FontAwesomeIcon icon={faArrowRight} /></Link>
			</div>
			<h1 className="section-title">Genesis Vehicles</h1>

			<div className="car-card-row">
				<CarCard car={
					{
						name: 'G70',
						desc: 'With a commitment to pushing limits, the G70’s track-bred DNA will give you the confidence to conquer every corner, on or off the track',
						href: '/cars/builder/g70/1',
						img: '/g70_showcase.jpg'
					}
				} />

				<CarCard car={
					{
						name: 'G80',
						desc: 'One of the most spacious midsize luxury sedans on the market, G80 embodies a new approach to luxury vehicle design with an exhilarating combination of athletic styling and agile performance.',
						href: '/cars/builder/g80/1',
						img: '/g80_showcase.jpg'
					}
				} />

				<CarCard car={
					{
						name: 'G90',
						desc: 'Take elegance to new heights in the Genesis G90. Our full-size luxury flagship sedan anticipates and satisfies your every conceivable need, while exceeding every expectation.',
						href: '/cars/builder/g90/1',
						img: '/g90_showcase.jpg'
					}
				} />
			</div>
		</div>
	)
}