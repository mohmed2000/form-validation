// import { withRouter } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// function Back(props) {
//     return (
//     <div className="bIcon">
//         <span > <FontAwesomeIcon icon={faAngleLeft}/> </span>
//         <button className="bBtn" onClick={() => props.history.goBack()}> Back </button>
//     </div>
//     )
// }
// // export default Back;
//  export default withRouter(Back);

import {useReducer} from 'react'
import axios from 'axios'
export default function Menu() {
    const[state,dispatch]=useReducer(reducer,"hello")
    function reducer(state,action) {
        if(action.type==="loading"){
            return{loading:true}
        }
        else if(action.type==="success"){
            return{loading:false,data:action.payload}
        }
    }
   async function fetchData() {
        try{
           const action1 = {type:"loading"} 
           dispatch(action1)
           const{data}=await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=j7zz2sAHXNWYdGjBCxCHn3H6MjHGVnoT&tag=&rating=g`)
            dispatch({type:"success",payload:data})
        }
        catch(error){
            dispatch({type:"error"})
        }
    }
    function randomGif(e) {
        fetchData()
    }
    return (
        <div>
            <button onClick={randomGif}>random gif</button>
            {state.loading&&"loading...."}
            {state.data && <div><img src={state.data.data.images.original.url} alt="vv"/></div>}

        </div>
    )
}




