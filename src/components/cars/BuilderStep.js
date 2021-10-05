import { Link } from "react-router-dom";

export default function BuilderStep(props){
	return (
		<div className="builder-step">
			<Link to={`/cars/builder/${props.car}/${props.step}`} className={`builder-step-link ${parseInt(props.currentStep) === props.step ? 'active' : '' }`} >{ props.children }</Link>
		</div>
	)
}