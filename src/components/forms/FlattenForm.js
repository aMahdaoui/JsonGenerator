import React, { Component }  from 'react'; 
import PropTypes from 'prop-types';


import add from '../../images/add2.png';
import cancel from '../../images/cancel.png';
 

class FlattenForm extends Component { 

    constructor(props) {
        super(props); 
    } 

    typeId = (type) => {
      switch(type) {
          case 'Text':
              return 0 
          case 'Number':
              return 1 
          case 'Boolean':
              return 2 
          default:
              return -1
      } 
    }


    onSubmit = (event) => {

      // <- prevent form submit from reloading the pagee.preventDefault();  
      event.preventDefault(); 
    
      var newItem  = { 
        key : this.keyRef.value ,
        value : this.valueRef.value
      }

      this.props.type === "Number" && (newItem.value = parseInt(newItem.value,10))
      this.props.type === "Boolean" && (newItem.value = this.valueRef.checked)

      event.target.reset();  

      // invoke parent function to add item to State
      this.props.newItem(newItem);

      // then hide forme after submitting it
      this.onCancel();
    }

    onCancel = () => { 
      // on cancel hide current forme add type
      // then hide forme after submitting it
      this.props.onModify ? 
          this.props.onModify() :  
          this.props.onToggleForm(this.typeId(this.props.type))
    }


    render ()   {
        let {type} = this.props 
        let typeForm = type
        if (type === "Boolean"){   
          typeForm = "Checkbox"
        } 
          return (
            <div > 
            <br /> 
                <legend className="scheduler-border"  >{type} Informations</legend>
                <form       className="  row justify-content-center align-items-center "  
                            onSubmit={this.onSubmit} >
                    <div className="form-group col-4 "  > 
                        <label className="" htmlFor="key"> {type} Key:</label>
                        <input  ref= {(keyRef) => { this.keyRef = keyRef }  } 
                                type="text" placeholder="key" 
                                value = {this.props.fixedPrty}
                                readOnly={!!this.props.fixedPrty} 
                                className="form-control" 
                                required />
                    </div>
                    <div className="form-group col-5 ">
                        <label className="" htmlFor="value">{type} : </label>
                        <input  className="form-control  " 
                                ref= {(valueRef) => { this.valueRef = valueRef }} 
                                type={typeForm} 
                                required/>
                    </div>  
                     
                    <div  className="form-group col-3 ">
                      <button className="btn btn-link " type="submit" 
                              title="add item" >
                                  <img  alt={"add item"} src={add} width="30"  />
                      </button>
                      <button   title="cancel" className="btn btn-link "
                                onClick={this.onCancel} >
                                  <img alt={"cancel"}src={cancel} width="30"  />
                      </button>
                    </div> 
              </form>
          </div>
    );}
};

 

FlattenForm.propTypes = { 
    type: PropTypes.string.isRequired,
    fixedPrty: PropTypes.string,
    newItem : PropTypes.func.isRequired,
    onModify : PropTypes.func,
    onToggleForm : PropTypes.func
};

export default FlattenForm;