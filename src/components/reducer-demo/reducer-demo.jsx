import { useReducer } from "react"

let initialState = {
    likes: 0
}

function reducer(state, action){
    switch(action.type){
         case "like": 
          return { likes: state.likes + 1 }
         case "dislike":
          return { likes: state.likes - 1 }
    }
}

export function ReducerDemo(){

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleLikeClick(){
        dispatch({type: 'like'});
    }

    return(
        <div className="container-fluid">
            <div className="mt-4 w-50 card">
                <div className="card-header">
                    <h2>Naresh IT Live</h2>
                </div>
                <div className="card-body">
                    <iframe src="https://www.youtube.com/embed/QdznP9S1wS0" className="w-100" height="300"></iframe>
                </div>
                <div className="card-footer">
                    <button onClick={handleLikeClick} className="btn btn-warning bi bi-hand-thumbs-up"> [{state.likes}] Likes </button>
                </div>
            </div>
        </div>
    )
}