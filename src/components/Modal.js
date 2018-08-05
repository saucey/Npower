import React, { Component } from 'react'

class Modal extends Component {

	constructor(props) {
		super(props)

		this.hideModal = this.hideModal.bind(this);
		this.escFunction = this.escFunction.bind(this);
	}

	escFunction(event){
		if(event.keyCode === 27) {
			this.hideModal(event)
		}
	}

	componentDidMount(){
		document.addEventListener("keydown", this.escFunction, false);
	}

	componentWillUnmount(){
		document.removeEventListener("keydown", this.escFunction, false);
	}

	showModal() {

		return (
			this.props.modal ?
			<div className="modal" onClick={this.hideModal}>
				<div className="modal-box" onClick={(e) => e.stopPropagation()}>
					<button onClick={this.hideModal}>X</button>
					<h2>{this.props.modalData.title}</h2>
					<p>{this.props.modalData.content}</p>
				</div>
			</div>

			: ''
		)
	}

	hideModal(e) {
		e.preventDefault();
		document.body.classList.remove('modal-open');
		this.props.setModal(false);
	}

	render () {

		return (	
			<div className="pagewrapper">
				{this.showModal()}
				{this.props.children} 
			</div>
		)
	}
}


export default Modal;
