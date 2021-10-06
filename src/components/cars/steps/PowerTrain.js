import BoxSelect from "../BoxSelect"

const handlePowerTrainSelection = (content, selections, setSelections) => {
	const copy = Object.assign({}, selections);
	copy.pt = content.pt;
	copy.price = content.price
	copy.features = content.includes;
	setSelections(copy)
}

export default function PowerTrain(props) {
	return (<div>

		{props.options.map(option => {
			return (
				<BoxSelect key={option.pt}
					active={props.selections.pt === option.pt ? true : false}
					title={option.pt}
					price={option.price}
					items={option.includes}
					onClick={() => { handlePowerTrainSelection(option, props.selections, props.setSelections) }}
				/>
			)
		})}
	</div>)
}