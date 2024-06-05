import React from 'react';
import WelcomeСomponent from './components/WelcomeСomponent'
import AboutComponent from './components/AboutComponent'
import ExpertsComponent from './components/ExpertsComponent'
import MechanicsComponent from './components/MechanicsComponent'
import ProfitComponent from './components/ProfitComponent'
import FooterComponent from './components/FooterComponent'
import OrganizationComponent from './components/OrganizationComponent'


class App extends React.Component {
	render() {
		return (
			<div className="content">
				<WelcomeСomponent/>
				<MechanicsComponent/>
				<ProfitComponent/>
				<AboutComponent/>
				<ExpertsComponent />
				<OrganizationComponent />
				<FooterComponent/>
			</div>
		);
	}
}

export default App;
