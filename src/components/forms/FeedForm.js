import React, { Component } from 'react';

class FeedForm extends Component { 

    constructor(props) {
        super(props); 
    }

    /** function to set the added title's item first char to UpperCase,
    * it will be useful while sorting items alphabetically 
    **/
    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /** onSublit form 'add item' callback newItem function of 
    * parent component (Feed), which take as param item object of :
    * title : typed by user and getted by ref of input tag
    * description,
    * voteCount : by default 0
    **/
    handleForm = (e) => {
    	e.preventDefault(); 
 
    	var newItem  = {
    		title : this.capitalize(this.keyRef.value) ,
    		description : this.capitalize(this.valueRef.value) ,
    		voteCount : 0
    	}

    	e.target.reset(); 
    	this.props.newItem(newItem);
    }

    render() {
        return (

            <div > 
                <br />
            <fieldset className="form-group">
                <legend className="scheduler-border"  >Text Informations</legend>
                <form       className="form-inline"   
                            ref={(FeedFormRef) => { this.FeedFormRef = FeedFormRef } }
                            id="FeedForm" 
                            onSubmit={this.handleForm} >
        	        	<div className="form-group"  > 
                        <label className="mr-sm-2" for="key">Key:</label>
    	        		<input 	ref= {(keyRef) => { this.keyRef = keyRef }  } 
    	        				type="text" placeholder="key" 
    	        				className="form-control mb-2 mr-sm-2 mb-sm-0"  />
                    </div>
                    <div className="form-group">
                        <label className="mr-sm-2" for="value">value:</label>
                        <input  ref= {(valueRef) => { this.valueRef = valueRef }} 
                                type="text" placeholder="value" 
                                className="form-control mb-2 mr-sm-2 mb-sm-0" />
                    </div>           
                    <button type="submit" 
                            className="btn btn-primary ">
                                Add
                    </button> 
        	   </form>
            </fieldset>
            </div>
        );
    }
} 

export default FeedForm;
