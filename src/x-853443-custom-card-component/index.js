import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = ({properties}, {dispatch}) => {

	const {
		header1, 
		header2, 
		mainTitle, 
		mainSubheader1, 
		mainSubheader2,
		footer1,
		footer2,
		footer3,
		footer4,
		logoImage,
		sysId,
		table
	} = properties;

	const handleClick = () => {
		dispatch('CUSTOM_CARD_COMPONENT#CLICKED', {sysId, table})
	}

	return (
		<div id='card-container' 
			className='cardContainer' 
			on-click={handleClick}
			//  value={sysId}
			>
			<header className='headerContainer'>
				<img src={logoImage} height='50px' width='50px'/>
				<div>
					<div>{header1}</div>
					<div>{header2}</div>
				</div>
			</header>
			<div className='bottomHalf'>
			<main className='mainContainer'>
				<div className='mainTitle'>{mainTitle}</div>
				<div>{mainSubheader1}</div>
				<div>{mainSubheader2}</div>
			</main>
			<footer className='footerContainer'>
				<div>{footer1}</div>
				<div>{footer2}</div>
				<div>{footer3}</div>
				<div>{footer4}</div>
			</footer>	
			</div>
		</div>
	);
};

createCustomElement('x-853443-custom-card-component', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties: {
		header1: {default: 'NUM0203001'},
		header2: {default: 'In Progress'},
		mainTitle: {default: 'Service Portal Feature Update'},
		mainSubheader1: {default: ''},
		mainSubheader2: {default: ''},
		footer1: {default: 'test'},
		footer2: {default: ''},
		footer3: {default: ''},
		footer4: {default: ''},
		logoImage: {default: ''},
		sysId: {default: ''},
		table: {default: ''},
	},
	actionHandlers:{
		"CUSTOM_CARD_COMPONENT#CLICKED": ({action}) => {
			console.log(action.payload);
		}
	},
	// eventHandlers: [
	// 	{
	// 		events: ['click'],
	// 		effect({dispatch, action: {payload: {event}}}) { 
	// 			const {value} = event.path.find(el => el.id == 'card-container');
	// 			console.log(value);
	// 			console.log(event);
	// 			dispatch("CUSTOM_CARD_COMPONENT#CLICKED", {sysId: value});
	// 		}
	// 	}
		// {
		// 	events: ['CUSTOM_CARD_COMPONENT#CLICKED'],
		// 	// capture: true,
		// 	// target: document.getElementById('card-container'),
		// 	effect({dispatch, action: {payload: {event}}}) { 
		// 		// const {value} = event;
		// 		console.log(event);
		// 		dispatch('CC_COLOR_PICKER#VALUE_SET', {value: 'test'});
		// 	}
		// }
	// ]
});
