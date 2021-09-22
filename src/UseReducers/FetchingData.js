import React, {useReducer , useEffect} from 'react'

const initialState  = {
    loading : true,
     error : '',
     posts : {}
  }
  const reducer= (state , action)=>{
    switch(action.type){
      case 'FETCH_SUCCESS':
       return {
         loading : false,
         posts : action.playload,
         error : ''
       }
     case 'FETCH_ERROR':
       return {
         loading : false,
         posts : {},
         error : 'Something went wrong'
       }
       default :
        return state;
     }
    
  }
const FetchingData = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
          fetch('https://jsonplaceholder.tykjpicode.com/users').then(response => response.json()).then( data => dispatch({type: 'FETCH_SUCCESS' , playload : data})).catch(error=> dispatch({typeof: 'FETCH_ERROR'}))
    }, [])
    console.log(state.posts);
    return (
        <div>
           {state.loading ? 'loading':  state.posts.map((Element , index)=>{
               return   <li key = {index}>{Element.name}</li> 
           })}
           {state.error ? state.error : null}
        </div>
    )
}

export default FetchingData
