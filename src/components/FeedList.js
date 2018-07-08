import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
// class FeedList extends Component { 

//     constructor(props) {
//         super(props);
//     }
const FeedList = (props) => {
 
    const test = (i) => {
        alert(i)
    }
    //alert (props.val)
        //foreach item on items return an new Text component  
        let items = Object.keys(props.items).map((key, i) => { 
    		return <Item 	cle={i}
                            key={i}
							prte={key} 
							value={props.items[key]}
                            newItem={props.newItem}
                            rm={props.removeItem} />
    	})

        return (
        	<div >
                <ul className="list-group">
            		{items} 
            	</ul> 
            </div>
        ); 
}  

FeedList.propTypes = { 

    items: PropTypes.object.isRequired, 
    removeItem : PropTypes.func.isRequired,
    newItem : PropTypes.func.isRequired
}; 


export default FeedList;
