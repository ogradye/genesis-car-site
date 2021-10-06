import NotFound from "./NotFound";
import Builder from "../components/cars/Builder";

export default function Car(props) {
	const cars = { 'g80': { 'name': 'g80' }, 'g70': { 'name': 'g70' } };

	if (cars[props.match.params.car] == null) {
		return <NotFound />
	}

	const renderActivePage = () => {
		return <Builder car={props.match.params.car} step={parseInt(props.match.params.step)} />
	}

	return (
		<div>
			{ renderActivePage() }
		</div>
	)
}