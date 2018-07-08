import React, { Component } from 'react'; 
import ReactJson from 'react-json-view'
 
 
import AddItems from './AddItems'; 

  
import '../css/bootstrap.min.css'; 


class Json extends Component { 

    constructor(props) {
        super(props);
        this.state = {
        	src : {text : "hello world", obj : {text : "hello world", array : ['hhh',258,'jhki']}}, 
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


    localStorageToState = () => { 

        // get the key's value from localStorage
        let value = JSON.parse(localStorage.getItem('state')); 

        // parse the localStorage string and setState
        this.setState({src : value}) 
    }

    stateToLocalStorage = () => { 
        // save to localStorage
        localStorage.setItem('state', JSON.stringify(this.state.src));
    }
    



    /** add item to state.src when end user submit form Add new item
    *parent/child callback function 
    */
    NewItem = (newItem) =>{  
 
        this.setState({src : {...this.state.src, [newItem.key]: newItem.value}})
 
    };
 

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
                     <ReactJson src={this.state.src} theme="Ocean"
                                onEdit={e => {

                                    console.log("edit",e)
                                    this.setState({ src: e.updated_src }) 
                                     
                                }}

                                onDelete={e => {
                                    console.log("delete callback", e) 
                                    this.setState({src : e.updated_src}) 
                                }}
                                 />
                </div> 
			</div>	 
	    		 
	    	</div> 
	    );
	};
 
 
}
export default Json;
