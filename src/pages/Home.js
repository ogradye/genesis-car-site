import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

export default function Home(){
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

		<section>
			<h1 className="section-title">Genesis Vehicles</h1>
		</section>
	  </div>
	)
}