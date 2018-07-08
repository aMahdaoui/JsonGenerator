import React, { Component }  from 'react'; 
import PropTypes from 'prop-types';
import AddItems from '../AddItems'; 



import add from '../../images/add2.png';
import cancel from '../../images/cancel.png';

class NestedForm extends Component { 

    constructor(props) {
        super(props);
        this.state = { 
          Array : [],
          Object : {}
        }
    } 
    
    handleForm = (event) => {

      // <- prevent form submit from reloading the pagee.preventDefault();  
      event.preventDefault(); 
    
      var newItem  = { 
        key : this.keyRef.value ,
        value : this.state[this.props.type]
      }
   
      this.props.newItem(newItem);

      //hide form after submit
      this.onCancel()
    }

    onNewItem = (newItem) =>{  
        let {type} = this.props 
  
        if (type === "Array") {  
            this.setState({
              Array : [...this.state.Array,newItem.value]
            })  
        }else {   
            this.setState({
              Object :{...this.state.Object,[newItem.key] : newItem.value}, 
            })  
              
        }

    }; 

    onCancel = () => {
      // on cancel hide current forme add type
      let id
      this.props.type === "Array" ? id = 3 : id = 4
      this.props.onModify ? 
          this.props.onModify():
          this.props.onToggleForm(id)  
    }


    render ()   {
        let pr = this.props   
          return (
            <div >
              <br />   
                  <legend className="scheduler-border"  >
                      {pr.type} Informations
                  </legend>
                  <div style={{marginLeft: 40}}> 
                            <div className="row form-group"  > 
                                <label className="col-3" htmlFor="key"> {pr.type} Key:</label>
                                <input  ref= {(keyRef) => { this.keyRef = keyRef }  } 
                                        type="text" placeholder="key" 
                                        value = {pr.fixedPrty}
                                        readOnly={!!pr.fixedPrty} 
                                        className="form-control col-4"  />
                            </div>
                            <div className="form-group"  >  
                                <AddItems type ={pr.type}
                                          onToggleForm={pr.onToggleForm}
                                          newItem={this.onNewItem}/>
                            </div> 
                            <div  className="row ">
                              <button type="submit" 
                                      className="btn btn-link " 
                                      onClick={this.handleForm}  >
                                  <img  alt={"add item"} src={add} width="30"  />
                              </button>
                              <button   className="btn btn-link "
                                        onClick={this.onCancel} >
                                  <img alt={"cancel"} src={cancel} width="30"  />
                              </button>
                            </div>    
                  </div > 
            </div>
    );}
};
 

NestedForm.propTypes = {  
    type: PropTypes.string.isRequired,
    fixedPrty: PropTypes.string,
    newItem : PropTypes.func.isRequired,
    onModify : PropTypes.func,
    onToggleForm : PropTypes.func
};


export default NestedForm;