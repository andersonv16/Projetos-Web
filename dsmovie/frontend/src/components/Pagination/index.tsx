import {ReactComponent as Arrow} from 'assets/img/Arrow.svg'
import './index.css'


type Props = {
    onChange: Function;
}

const initialState = {

    firstPage: 1,
    lastPage: 3,
    page: 0,
    disableFirst: true,
    disableLast: false
}

let state = {...initialState}

function changePage(){
    if(state.page > 0){
                state.disableFirst = false
        }
        else if(state.page === 0){
            state.disableFirst = true  
        }

   if (state.page === 24) {
       state.disableLast =  true
   }else{
    state.disableLast =  false
   }
}
function alterPage(){
    if(state.page  === 12){
        state.firstPage = 2
    }
    else if(state.page  === 24){
        state.firstPage = 3
    }else{
        state.firstPage = 1 
    }
}

function Pagination({onChange} : Props){

    return (
<div className="dsmovie-pagination-container">
    
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={state.disableFirst} onClick={()=>onChange(state.page = state.page - 12)} >
            <Arrow />
         
        </button>
        <p>{`${state.firstPage} de ${state.lastPage}`}</p>
        <button className="dsmovie-pagination-button" disabled={state.disableLast} onClick={()=>onChange(state.page = state.page + 12)}>
            <Arrow className="dsmovie-flip-horizontal" />
            {changePage()}
            {alterPage()}
        </button>
    </div>
</div>
    )
}
export default Pagination