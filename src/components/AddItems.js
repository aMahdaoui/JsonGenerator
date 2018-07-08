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

    // onChange = (event) => { 
    //     let index = event.target.selectedIndex;
    //     let optionElement = event.target.childNodes[index]
    //     let id =  optionElement.getAttribute('id');    
    // }

    onToggleForm = (idType) => {  
        let newForm = this.state.formsDisplayed 
        let id = parseInt(idType,10)
        let isDisplayed = !this.state.formsDisplayed[id]
        newForm.splice(id, 1,isDisplayed) 
        this.setState({
            formsDisplayed : newForm
        });    
    }

    prepareForm = (event) => { 
        event.preventDefault();
        let id = this.selectVal.value
        this.onToggleForm(id)
        //let newForm = this.state.formsDisplayed  
        //let isDisplayed = !this.state.formsDisplayed[id]
        // newForm.splice(id, 1,true) 
        // this.setState({
        //     formsDisplayed : newForm
        // });  
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

            {formsDisplayed[0] 
                && <FlattenForm fixedPrty ={pr.prty} type="Text" 
                                newItem={pr.newItem} 
                                onToggleForm={this.onToggleForm}
                                onModify={pr.onModify}/> }  
            {formsDisplayed[1] 
                && <FlattenForm fixedPrty ={pr.prty} type="Number" 
                                newItem={pr.newItem}
                                onToggleForm={this.onToggleForm}
                                onModify={pr.onModify}/> } 
            {formsDisplayed[2] 
                && <FlattenForm fixedPrty ={pr.prty} type="Boolean" 
                                newItem={pr.newItem}
                                onToggleForm={this.onToggleForm}
                                onModify={pr.onModify}/> } 
            {formsDisplayed[3] 
                && <NestedForm  fixedPrty ={pr.prty} type="Array" 
                                newItem={pr.newItem}
                                onToggleForm={this.onToggleForm}
                                onModify={pr.onModify}/> } 
            {formsDisplayed[4] 
                && <NestedForm  fixedPrty ={pr.prty} type="Object" 
                                newItem={pr.newItem}
                                onToggleForm={this.onToggleForm}
                                onModify={pr.onModify}/>} 
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
