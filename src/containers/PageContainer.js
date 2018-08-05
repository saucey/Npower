import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from '../components/page'

import {setModalData, getPageContent, setModal } from '../actionCreators'

const mapDispatchToProps = dispatch => bindActionCreators({
  onLoad: getPageContent,
  setModalData,
  setModal
}, dispatch)

const mapStateToProps = state => ({
  pageContent: state.pageContent,
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
