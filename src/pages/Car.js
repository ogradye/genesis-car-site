import NotFound from "./NotFound";
import Builder from "../components/cars/Builder";

export default function Car(props) {
	const cars = { 'g80': { 'name': 'g80' }, 'g70': { 'name': 'g70' } };

	if (cars[props.match.params.car] == null) {
		return <NotFound />
	}

	const renderActivePage = () => {
		if(props.match.params.step === '1'){
			return <Builder car={props.match.params.car} step={1} />
		}
		else if(props.match.params.step === '2'){
			return <Builder car={props.match.params.car} step={2} />;
		}
		else if(props.match.params.step === '3'){
			return <Builder car={props.match.params.car} step={3} />;
		}
		else if(props.match.params.step === '4'){
			return <Builder car={props.match.params.car} step={4} />;
		}
	}

	return (
		<div>
			{ renderActivePage() }
		</div>
	)
}