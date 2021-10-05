export default function BuilderStepBar(props){
	return (
		<div className="builder-step-bar">
			<h1 className="builder-bar-car-name">Genesis {props.car}</h1>
			{ props.children }
		</div>
	)
}