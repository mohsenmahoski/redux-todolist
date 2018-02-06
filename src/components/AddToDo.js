import React , {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import TodoList from './TodoList';
import Footer from './Footer';

class AddToDo extends Component{
	_submit(e){
		e.preventDefault();
		if (!this.input.value.trim()){
			return ;
		}
       
        this.props.dispatch( addTodo(this.input.value) );
        this.input.value='';
	}
	render(){
		return(
                   <div>
                   	
                   	<form onSubmit={this._submit.bind(this)}>
                   		 <input  ref={(input)=>this.input=input} />
                   		 <button type="submit">add</button>
                   	</form>
                   	<TodoList />
                   	<Footer />
                   </div>
	    	  );
	}
}

export default connect()(AddToDo);