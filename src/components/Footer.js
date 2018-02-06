import React , {Component} from 'react';
import FilterLink from './FilterLink';

class Footer extends Component{
   render(){
   	  return( 
              <p>
              	<FilterLink filter="SHOW_ALL">
              		ALL
              	</FilterLink>
              	{" "}
              	<FilterLink filter="SHOW_COMPLETE">
              		Active
              	</FilterLink>
              	{" "}
              	<FilterLink filter="SHOW_UNCOMPLETE">
              		UNCOMPLETE
              	</FilterLink>
              	{" "}
              </p>  
   	  	    );
   }
}

export default Footer;