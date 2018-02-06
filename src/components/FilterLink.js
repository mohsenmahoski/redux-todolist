import React , {Component} from 'react';
import {connect} from 'react-redux';
import {visibilityfilter} from '../actions';

class FilterLink extends Component{
	_filter(e){
       e.preventDefault();
       this.props.onClick();
	}
	render(){
		const {children} = this.props;
		return(
                 <a href="#" onClick={this._filter.bind(this)}>
                 	{children}
                 </a>
			  );
	}
}
const mapDispatchToProps = (dispatch , ownProps)=>{
	
	return{
         onClick: ()=>dispatch(visibilityfilter(ownProps.filter))
	};
}
export default connect(null , mapDispatchToProps)(FilterLink);