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
    
    /**
    * extract state array/object items and send them to parent component 
    * to update JSON object final format  
    */
    onSubmit = (event) => {

      // <- prevent form submit from reloading the page  
      event.preventDefault(); 
    
      var newItem  = { 
        key : this.keyRef.value ,
        value : this.state[this.props.type]
      }
      // callback function 
      this.props.newItem(newItem);

      //hide form after submit
      this.onCancel()
    }


    /** add item to state.array or state.object according to user submit 
    *  form nested item (array or object)
    *  parent/child callback function 
    */
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

    // on cancel hide form add type after submit 
    //using callback function "onToggleForm" with id of item form
    onCancel = () => {
      
      let id
      this.props.type === "Array" ? id = 3 : id = 4 
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
                  <div style={{marginLeft: 30}}> 
                            <div className="row form-group"  > 
                                <label className="col-3" htmlFor="key"> {pr.type} Key:</label>
                                <input  ref= {(keyRef) => { this.keyRef = keyRef }  } 
                                        type="text" placeholder="key" 
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
                                      onClick={this.onSubmit}  >
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
    newItem : PropTypes.func.isRequired, 
    onToggleForm : PropTypes.func.isRequired
};


export default NestedForm;