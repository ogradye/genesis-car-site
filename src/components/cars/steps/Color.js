const handleColorSelection = (color, selections, setSelections) => {
	const copy = Object.assign({}, selections);
	copy.color = color;
	setSelections(copy)
}



export default function Color(props) {
	return (
		<div>
			<img className="car-model" src={`/${props.car}/${props.selections.color}.jpg`} alt='car model'></img>
			<div className="color-bar">
				<div onClick={() => { handleColorSelection('black', props.selections, props.setSelections) }} className={`color-select black ${props.selections.color === 'black' ? 'active' : ''}`}></div>
				<div onClick={() => { handleColorSelection('white', props.selections, props.setSelections) }} className={`color-select white ${props.selections.color === 'white' ? 'active' : ''}`}></div>
				<div onClick={() => { handleColorSelection('gray', props.selections, props.setSelections) }} className={`color-select gray ${props.selections.color === 'gray' ? 'active' : ''}`}></div>
				<div onClick={() => { handleColorSelection('blue', props.selections, props.setSelections) }} className={`color-select blue ${props.selections.color === 'blue' ? 'active' : ''}`}></div>
				<div onClick={() => { handleColorSelection('green', props.selections, props.setSelections) }} className={`color-select green ${props.selections.color === 'green' ? 'active' : ''}`}></div>
				<div onClick={() => { handleColorSelection('red', props.selections, props.setSelections) }} className={`color-select red ${props.selections.color === 'red' ? 'active' : ''}`}></div>
			</div>
		</div>
	)
}