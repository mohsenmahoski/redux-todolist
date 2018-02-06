export const todos = (state=[],action)=>{
     switch(action.type){
        case 'ADD_TODO':
          return [
                ...state,
                {
                	id:action.id,
                	text:action.text,
                	complete:false
                }
           ];
        case 'TGGLE_TODO':

           return state.map(t=>{

           	  if (t.id !== action.id ){
                
                    return t
           	  }
              console.log(! t.complete);
           	  return {
           	  	...t,
           	  	complete : ! t.complete
           	  }

           });
    

        default : return state;
     }
}

export default todos;