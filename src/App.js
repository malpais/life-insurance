import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import { InsuranceForm, ThankYouPage } from './components/Insurance';
import ContextApiProvider from './contex';
function App() {
	return (
		<>
			<ContextApiProvider>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/thankyou' component={ThankYouPage} />
				</Switch>
			</ContextApiProvider>
		</>
	);
}

export default App;
