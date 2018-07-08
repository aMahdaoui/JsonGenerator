import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddItems from './AddItems';

import edit from '../images/edit.png';
import remove from '../images/rm2.png';

class Item extends Component { 

    constructor(props) {
        super(props);
        this.state = { 
            isModified : false, // basically user must click to update  item  
        }
    }

    /* handle onClick event  button to display the component to modify item
    *  components's name used to modify item is 'AddItem'
    **/
    modify = (e) => { 
        this.setState({ 
            isModified : !this.state.isModified 
        }) 
    } 

     
    render() { 
        let pr = this.props   
        let {isModified} = this.state
        return (
        	<div> 
                <li key={pr.cle} className="list-group-item">
                     
                    <span className="float-right">
                        <button  title="edit item" 
                                className="btn btn-link btn-sm"
                                onClick={this.modify} >
                        <img src={edit} alt="change item" width="27"  />
                        </button>
                        &nbsp;
                        <button  title="remove item"
                                 className="btn btn-link btn-sm"
                                 onClick={() => pr.rm(pr.prte)}> 

                             <img src={remove} alt="remove item" width="27"  />
                        </button>
                    </span>  
                    <span >{typeof pr.value} </span><br /><hr />
                    <h6> <span >"{pr.prte}"</span > :{ JSON.stringify (pr.value, null, 2)} </h6> 
                     {isModified && <div > 
                            <hr />
                            <h6>chose item type to edit item</h6>
                            <AddItems   prty={pr.prte}
                                        newItem={pr.newItem} 
                                        onModify={this.modify}/>
                        </div>}
                            
                </li>  
            </div>
        );
    }
}  

Item.propTypes = { 
    prte: PropTypes.string.isRequired,
    cle: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
        PropTypes.bool,
    ]).isRequired,
    newItem : PropTypes.func.isRequired,
    rm : PropTypes.func.isRequired 
};


export default Item;
