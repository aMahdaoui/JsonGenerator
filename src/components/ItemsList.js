import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item'; 

const FeedList = (props) => {
    //map all items of our json object and display them 
    //throught item component
    let items = Object.keys(props.items).map((key, i) => { 
		return <Item 	cle={i}
                        key={i}
						prte={key} 
						value={props.items[key]}
                        newItem={props.newItem}
                        rm={props.removeItem} />
	})

    return ( 
            <ul className="list-group">
        		{items} 
        	</ul>  
    ); 
}  

FeedList.propTypes = { 

    items: PropTypes.object.isRequired, 
    removeItem : PropTypes.func.isRequired,
    newItem : PropTypes.func.isRequired
}; 


export default FeedList;
