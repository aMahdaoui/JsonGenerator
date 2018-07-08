import React, { Component }  from 'react'; 
import PropTypes from 'prop-types';

import FlattenForm from './forms/FlattenForm';
import NestedForm from './forms/NestedForm';

import add from '../images/add.png';
 

class AddItems extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            //all item we want add are hidden at first time
            //5 arg correspond to 5 item e.g: 
            //(string,number,bool,array,object)
            formsDisplayed : [false, false, false, false, false]  
        }
    } 
 
    //Display/hide form add type after click add item button 
    // "onToggleForm" with id of item form
    
    onToggleForm = (idType) => {  
        let newForm = this.state.formsDisplayed 
        let id = parseInt(idType,10)
        let isDisplayed = !this.state.formsDisplayed[id]
        newForm.splice(id, 1,isDisplayed) 
        this.setState({
            formsDisplayed : newForm
        });    
    }

    // call onToggleForm function with right item type id 
    prepareForm = (event) => { 
        event.preventDefault();
        let id = this.selectVal.value
        this.onToggleForm(id)  
    }

    render ()   {

        let {formsDisplayed} = this.state
        let pr = this.props
        return (

        <div>
            <form   className="form-inline" 
                    onSubmit={this.prepareForm} >
                <div className="form-group">
                    <label className="mr-sm-2" htmlFor="items">Items:</label>
                    <select className="form-control mb-2 mr-sm-2 mb-sm-0"  
                            ref={(input) => this.selectVal = input} > 
                        <option value='0'>Text</option>
                        <option value="1">Number</option>
                        <option value="2">Boolean</option>
                        <option value="3">Array</option>
                        <option value="4">Object</option>
                    </select>
                </div> 
                <div className="form-group">
                    <button type="submit" title="add item" className="btn btn-link">
                        <img    src={add} alt={"add item"} width="30" />
                    </button>
                </div> 
            </form>  

            {
            /*
            * display right add type form according to selected value
            * formsDisplayed[0] : string (FlattenForm)
            * formsDisplayed[1] : number (FlattenForm)
            * formsDisplayed[2] : bool   (FlattenForm)
            * formsDisplayed[3] : array  (NestedForm)
            * formsDisplayed[4] : object (NestedForm)
            *
            */

            formsDisplayed[0] 
                && <FlattenForm type="Text" 
                                newItem={pr.newItem} 
                                onToggleForm={this.onToggleForm} /> }  
            {formsDisplayed[1] 
                && <FlattenForm type="Number" 
                                newItem={pr.newItem}
                                onToggleForm={this.onToggleForm} /> } 
            {formsDisplayed[2] 
                && <FlattenForm type="Boolean" 
                                newItem={pr.newItem}
                                onToggleForm={this.onToggleForm} /> } 
            {formsDisplayed[3] 
                && <NestedForm  type="Array" 
                                newItem={pr.newItem}
                                onToggleForm={this.onToggleForm} /> } 
            {formsDisplayed[4] 
                && <NestedForm  type="Object" 
                                newItem={pr.newItem}
                                onToggleForm={this.onToggleForm} />} 
        </div>
        );
    }
} 

AddItems.propTypes = { 

    prty: PropTypes.string,
    onModify : PropTypes.func,
    newItem : PropTypes.func.isRequired
}; 

export default AddItems;
