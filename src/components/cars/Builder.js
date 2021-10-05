import { useState } from "react";
import { Link } from "react-router-dom";
import BoxSelect from "./BoxSelect";
import BuilderStep from "./BuilderStep";
import BuilderStepBar from "./BuilderStepBar";

export default function Builder(props) {
	const steps = { 1: { name: 'Powertrain' }, 2: { name: 'Color' }, 3: { name: 'Accessories' }, 4: { name: 'Summary' } };

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

	const handlePowerTrainSelection = (content) => {
		const copy = Object.assign({}, selections);
		copy.pt = content.pt;
		copy.price = content.price
		copy.features = content.includes;
		setSelections(copy)
	}

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

		if(matches.length >= 1){
			return;
		}

		else{
			copy.accessories.push(accessories);
		}
		


		setSelections(copy);

		console.log(selections);

	}

	const displayCarColor = () => {
		let src;

		switch (selections.color) {
			case 'black':
				src = `/${props.car}/black.jpg`;
				break;
			case 'white':
				src = `/${props.car}/white.jpg`;
				break;
			case 'green':
				src = `/${props.car}/green.jpg`;
				break;
			case 'red':
				src = `/${props.car}/red.jpg`;
				break;
			case 'blue':
				src = `/${props.car}/blue.jpg`;
				break;
			case 'gray':
				src = `/${props.car}/gray.jpg`;
				break;
			default:
				src = `/${props.car}/black.jpg`;
				break;
		}

		return src;
	}

	return (
		<div>

			<BuilderStepBar car={props.car}>
				<BuilderStep car={props.car} step={1} currentStep={props.step}><span className="step-number">1</span>Powertrain</BuilderStep>
				<BuilderStep car={props.car} step={2} currentStep={props.step}><span className="step-number">2</span>Color</BuilderStep>
				<BuilderStep car={props.car} step={3} currentStep={props.step}><span className="step-number">3</span>Accessories</BuilderStep>
				<BuilderStep car={props.car} step={4} currentStep={props.step}><span className="step-number">4</span>Summary</BuilderStep>
			</BuilderStepBar>

			<div className="builder container">
				<h1 className="builder-title">
					{steps[props.step].name !== 'Summary' && 'Choose your'}
					<span className="builder-title-step-name">{steps[props.step].name}</span>
				</h1>

				{props.step === 1 &&
					<div>

						{options.map(option => {
							return (
								<BoxSelect key={option.pt}
									active={selections.pt === option.pt ? true : false}
									title={option.pt}
									price={option.price}
									items={option.includes}
									onClick={() => { handlePowerTrainSelection(option) }}
								/>
							)
						})}
					</div>
				}

				{props.step === 2 &&
					<div>
						<img className="car-model" src={displayCarColor()} alt='car model'></img>
						<div className="color-bar">
							<div onClick={() => { handleColorSelection('black') }} className={`color-select black ${selections.color === 'black' ? 'active' : ''}`}></div>
							<div onClick={() => { handleColorSelection('white') }} className={`color-select white ${selections.color === 'white' ? 'active' : ''}`}></div>
							<div onClick={() => { handleColorSelection('gray') }} className={`color-select gray ${selections.color === 'gray' ? 'active' : ''}`}></div>
							<div onClick={() => { handleColorSelection('blue') }} className={`color-select blue ${selections.color === 'blue' ? 'active' : ''}`}></div>
							<div onClick={() => { handleColorSelection('green') }} className={`color-select green ${selections.color === 'green' ? 'active' : ''}`}></div>
							<div onClick={() => { handleColorSelection('red') }} className={`color-select red ${selections.color === 'red' ? 'active' : ''}`}></div>
						</div>
					</div>
				}

				{props.step === 3 &&
					<div>
						<input type="checkbox" onClick={(event) => { handleAccessorySelection(event, { id: 'sr', name: 'Sun Roof', price: 720 } ) }}></input>
						<input type="checkbox" onClick={(event) => { handleAccessorySelection(event, { id: 'sr2', name: 'Sun Roof', price: 120 }) }}></input>
					</div>
				}

				{props.step === 4 &&
					<div>
						<h1 className="summary-title">Your Genesis {props.car.toUpperCase()}</h1>
						<img src={`/${props.car}/${selections.color}.jpg`} alt="car" className="summary-car"></img>
						<h1>Power Train</h1>
						<div className={`select-box `}>
							<div className="select-box-top">
								<h1 className="select-box-title">
									{selections.pt}
								</h1>

								<p className="select-box-price">
									${selections.price.toLocaleString('en-US')}
								</p>
							</div>
							<ul className="select-box-list">
								{selections.features && selections.features.map((item, idx) => {
									return (
										<li className="select-box-item" key={idx}>
											{item}
										</li>
									)
								})}
							</ul>
						</div>

						<h1>Color</h1>
						<div className={`select-box summary-color`}>
							<div className={`color-select ${selections.color}`}></div>
							{selections.color[0].toUpperCase() + selections.color.slice(1)}
						</div>

						<h1>Total</h1>
						<h2>${selections.price.toLocaleString('en-US')}</h2>
						{props.step === 4 && <div>
							<Link to={props.step !== 1 ? `/cars/builder/${props.car}/${props.step + 1}` : `/cars/builder/${props.car}/${props.step}`} className="btn btn-primary complete-order-btn">Complete Order</Link>
						</div>}
					</div>
				}


				<div className="prev-next-group">
					<div>
						<Link to={props.step !== 1 ? `/cars/builder/${props.car}/${props.step - 1}` : `/cars/builder/${props.car}/${props.step}`} className="btn btn-primary complete-order-btn">Previous</Link>
					</div>
					{props.step !== 4 &&
						<div>
							<Link to={props.step !== 4 ? `/cars/builder/${props.car}/${props.step + 1}` : `/cars/builder/${props.car}/${props.step}`} className="btn btn-primary complete-order-btn">Next</Link>
						</div>
					}
				</div>


			</div>
		</div>
	)
}