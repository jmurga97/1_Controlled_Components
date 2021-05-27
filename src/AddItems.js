import React, { Component } from 'react';
import ShowItems from './ShowItems.js';

class AddItems extends Component {
	state = {
    	value: '',
      	items: []
    }
  
  	handleChange = (event) => {
    	this.setState({value: event.target.value})
    }
  	addItem = (event) => {
    	event.preventDefault();
      	this.setState((prevState) => ({
        	items: [...prevState.items, this.state.value]
        }))
    }
  
  	deleteLastItem = event => {
    	this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  	};

  	inputIsEmpty = () => {
    	return this.state.value === '';
  	};

  	noItemsFound = () => {
    	return this.state.items.length === 0;
  	};
  
  	render(){
      	
    	return(
        <div>
        	<form onSubmit={this.addItem}>
          		<input
            		type="text"
            		placeholder="Enter New Item"
            		value={this.state.value}
            		onChange={this.handleChange}
          		/>
          		<button disabled={this.inputIsEmpty()}>Add</button>
        	</form>

        	<button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          		Delete Last Item
        	</button>
			<ShowItems items={this.state.items}/>
		</div> 
        )
    }
}

export default AddItems;