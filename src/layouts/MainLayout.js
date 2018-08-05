import React, { Component } from 'react'
class MainLayout extends Component {

	render () {

		return (	
			<div className="container">
			<img src={"https://www.npower.com/ui/common/images/logo_2x.png"} alt="Npower" width="150px"/>
			{this.props.children} 
			</div>
		)
	}
}


export default MainLayout
