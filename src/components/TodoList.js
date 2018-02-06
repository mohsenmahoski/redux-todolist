import React , {Component} from 'react';
import {connect} from 'react-redux';
import {toggle_todo} from '../actions';


class TodoList extends Component{
	_complete(id){
          this.props.dispatch(toggle_todo(id));
	}
	render(){
		const {todos} = this.props;
		return(
                   <ul>
                   	{todos.map((t,index)=> t !==  undefined ? <li onClick={()=>{this._complete(t.id)}} style={{  textDecoration: t.complete ? 'none' : 'line-through' }} key={index}>{t.text}</li> : null  )}
                   </ul>
			  );
	}
}
const _avilabletodos= (filter , todos)=>{
     switch(filter){
     	case 'SHOW_ALL' :
            return todos
     	case 'SHOW_COMPLETE' :
     	    
     	    return todos.filter(t=>{
     	    	if (t.complete){
     	    		return t;
     	    	}
     	    });
     	case 'SHOW_UNCOMPLETE' :
     	    return todos.map(t=>{
     	    	if (!t.complete){
     	    		return t;
     	    	}
     	    })
        default : return [];

     }
}

const mapStateToProps = (state) => {
	return{
	        todos:_avilabletodos( state.visibilityfilter , state.todos )
	      }
};

export default connect(mapStateToProps,null)(TodoList);