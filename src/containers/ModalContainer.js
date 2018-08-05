import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from '../components/Modal'

import { setModal } from '../actionCreators'

const mapDispatchToProps = dispatch => bindActionCreators({
  setModal
}, dispatch)

const mapStateToProps = state => ({
	modalData: state.modalData,
	modal: state.modal,
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
