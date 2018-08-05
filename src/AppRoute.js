import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import MainLayout from './layouts/MainLayout'
import PageContainer from './containers/PageContainer'
import Modal from './containers/ModalContainer'
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router'

class AppRoute extends Component {
	render() {
		return (
			<Modal>
				<MainLayout>
					<Router>
						<Switch>
							<Route exact path="/" component={PageContainer} />
						</Switch>
					</Router>
				</MainLayout>
			</Modal>
		)
	}
}

export default AppRoute
