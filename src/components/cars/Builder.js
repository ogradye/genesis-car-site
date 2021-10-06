import { useState } from "react";
import { Link } from "react-router-dom";
import BuilderStep from "./BuilderStep";
import BuilderStepBar from "./BuilderStepBar";
import Color from "./steps/Color";
import Interior from "./steps/Interior";
import PowerTrain from "./steps/PowerTrain";
import Summary from "./steps/Summary";

export default function Builder(props) {
	const steps = { 1: { name: 'Powertrain' }, 2: { name: 'Color' }, 3: { name: 'Interior' }, 4: { name: 'Accessories' }, 5: { name: 'Summary' } };

	const [selections, setSelections] = useState({
		pt: '2.5T AWD',
		price: 50850,
		color: 'black',
		features: ['18" Alloy Wheels', '14.5" HD Navigation Screen', 'Forward Collision-Avoidance Assist'],
		accessories: [],
	});

	const options = [
		{ pt: '2.5T AWD', price: 50850, includes: ['18" Alloy Wheels', '14.5" HD Navigation Screen', 'Forward Collision-Avoidance Assist'] },

		{ pt: '2.5T RWD', price: 47000, includes: ['18" Alloy Wheels', '14.5" HD Navigation Screen', 'Forward Collision-Avoidance Assist'] },

		{ pt: '3.5T AWD', price: 62250, includes: ['19" Alloy Wheels', 'Leather Seating Surfaces', 'Lexicon® Premium Audio w/ 21 Speakers'] },

		{ pt: '3.5T RWD', price: 59100, includes: ['19" Alloy Wheels', 'Leather Seating Surfaces', 'Lexicon® Premium Audio w/ 21 Speakers'] }
	]

	const handleColorSelection = (color) => {
		const copy = Object.assign({}, selections);
		copy.color = color;
		setSelections(copy)
	}

	const handleAccessorySelection = (event, accessories) => {
		const copy = Object.assign({}, selections);

		const matches = copy.accessories.filter(acc => {
			return acc.id === accessories.id
		});




		// if(!event.target.checked){
		// 	delete matches;
		// }

		if (matches.length >= 1) {
			return;
		}

		else {
			copy.accessories.push(accessories);
		}



		setSelections(copy);

		console.log(selections);

	}

	return (
		<div>

			<BuilderStepBar car={props.car}>
				<BuilderStep car={props.car} step={1} currentStep={props.step}><span className="step-number">1</span>Powertrain</BuilderStep>
				<BuilderStep car={props.car} step={2} currentStep={props.step}><span className="step-number">2</span>Color</BuilderStep>
				<BuilderStep car={props.car} step={3} currentStep={props.step}><span className="step-number">3</span>Interior</BuilderStep>
				<BuilderStep car={props.car} step={4} currentStep={props.step}><span className="step-number">4</span>Accessories</BuilderStep>
				<BuilderStep car={props.car} step={5} currentStep={props.step}><span className="step-number">5</span>Summary</BuilderStep>
			</BuilderStepBar>

			<div className="builder container">
				<h1 className="builder-title">
					{steps[props.step].name !== 'Summary' && 'Choose your'}
					<span className="builder-title-step-name">{steps[props.step].name}</span>
				</h1>

				{props.step === 1 &&
					<PowerTrain options={options} selections={selections} setSelections={setSelections} />
				}

				{props.step === 2 &&
					<Color selections={selections} setSelections={setSelections} car={props.car} />
				}

				{props.step === 3 &&
					<Interior />
				}

				{props.step === 4 &&
					<div>
						<input type="checkbox" onClick={(event) => { handleAccessorySelection(event, { id: 'sr', name: 'Sun Roof', price: 720 }) }}></input>
						<input type="checkbox" onClick={(event) => { handleAccessorySelection(event, { id: 'sr2', name: 'Sun Roof', price: 120 }) }}></input>
					</div>
				}

				{props.step === 5 &&
					<Summary selections={selections} car={props.car} />
				}


				<div className="prev-next-group">
					<div>
						<Link to={props.step !== 1 ? `/cars/builder/${props.car}/${props.step - 1}` : `/cars/builder/${props.car}/${props.step}`} className="btn btn-primary complete-order-btn">Previous</Link>
					</div>
					{props.step !== 5 &&
						<div>
							<Link to={props.step !== 5 ? `/cars/builder/${props.car}/${props.step + 1}` : `/cars/builder/${props.car}/${props.step}`} className="btn btn-primary complete-order-btn">Next</Link>
						</div>
					}
				</div>
			</div>
		</div>
	)
}