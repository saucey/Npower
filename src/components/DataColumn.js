
import React from 'react';

const DataColumn = (props) => (
    <div className="col-3">
    	<div className="pic">
    		<img src={props.imgLg} alt={props.title + ' picture'}/>
    	</div>
    	<div className="context">
		    <h2>{props.title}</h2>
		    <p>{props.content}</p>
	    </div>
	    <button onClick={props.setModalData.bind(null, props)}>Modal</button>
    </div>
)

export default DataColumn