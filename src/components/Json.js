import React, { Component } from 'react'; 
 
import AddItems from './AddItems'; 
import ItemsList from './ItemsList'; 

    
import '../css/bootstrap.min.css'; 


class Json extends Component { 

    constructor(props) {
        super(props);
        this.state = {
        	//text : "hello world",
        	//tab1 : ['hghghg',{'id':58, "isDisplay":true}]
        }
    }

    componentDidMount() {
        this.localStorageToState();

        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
            "beforeunload",
            this.stateToLocalStorage
        ); 
    }

    componentWillUnmount() {
        window.removeEventListener(
          "beforeunload",
          this.stateToLocalStorage 
        );

        // saves if component has a chance to unmount
        this.stateToLocalStorage();
    }

    // get state from local
    localStorageToState = () => { 

        // get state from localStorage
        let value = localStorage.getItem('state'); 

        // parse the localStorage string and setState
        this.setState(JSON.parse(value)) 
    }

    // save state to local storage 
    stateToLocalStorage = () => { 
        // save to localStorage 
        localStorage.setItem('state', JSON.stringify(this.state));
    }
    



    // add item to state when end user submit form Add new item
    NewItem = (newItem) =>{  
 
        this.setState({...this.state, [newItem.key]: newItem.value})
 
    };

    //remove item from state
    removeItem = (prteItem) =>{   

        delete this.state[prteItem] 
        this.setState(this.state);  
        	 
    }  
    // display what we want, the final json object, 
    // thanks to the state, its it!
    displayJSON =  () => {
        alert (JSON.stringify(this.state, null, 10 ))
    }
 

    render() { 
         
	    return ( 
            <div  className="container">  
                <div  className=" "> 
                    <h2>try to add some items using form below to generate JSON</h2>
                </div> 
                <hr />
                <div  className=" row">   
                <div className="col-7">

    	    		<AddItems 	newItem={this.NewItem} />

    	    		<hr /> 

     
                </div>
                <div className="col-5 " >
                    <p className="p-3 mb-2 text-warning bg-dark">all existed items
                        <span className="float-right">
                            <button id="up" 
                                    className="btn btn-warning "
                                    onClick={this.displayJSON} >
                            Generate JSON
                            </button>
                        </span>
                    </p>
                    <pre className="p-3">
                        <ItemsList   items = {this.state}
                                    newItem={this.NewItem} 
                                    val="hello"
                                    removeItem={this.removeItem} />
                    </pre> 
                </div> 
			</div>	 
	    		 
	    	</div> 
	    );
	};
 
 
}
export default Json;
