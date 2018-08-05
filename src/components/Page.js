import React, { Component } from 'react'
import DataColumn from './DataColumn'

class MovieList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			title: '',
			description: '',
			modal: false
		}

		this.setModalData = this.setModalData.bind(this);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	getContent(){
		return this.props.pageContent;
	}

	setModalData(data) {
		document.body.classList.add('modal-open');
		this.props.setModalData(data);
		this.props.setModal(true);
	}

	render () {
		return (
			<div className="row">
				{this.getContent().map((data, index) =>
					<DataColumn key={index+1} title={data.title} content={data.description} imgLg={data.imgLg} setModalData={this.setModalData}/>         
				)}
			</div>
		)
	}
}


export default MovieList
