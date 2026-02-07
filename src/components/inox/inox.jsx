import axios from "axios";
import { useEffect, useState } from "react"

export function Inox(){

    const [movies, setMovies] = useState([{title:null, poster:null, language:null, certificate:null}]);

    function LoadMovies(){
        axios.get('movies.json')
        .then(response=>{
            setMovies(response.data);
        })
    }

    useEffect(()=>{
        LoadMovies();
    },[])

    return(
        <div className="container-fluid p-3">
            <header>
                <div className="text-center fw-bold fs-4">Inox Movies</div>
            </header>
            <section className="mt-3 d-flex flex-row">
                {
                    movies.map(movie=>
                        <div key={movie.title} className="card m-2 p-2 w-25">
                            <img src={movie.poster} className="card-img-top" height="200"/>
                            <div className="card-header text-center fw-bold">
                                {movie.title}
                            </div>
                            <div className="card-body">
                               <dl>
                                <dt>Language</dt>
                                <dd>{movie.language}</dd>
                                <dt>Certificate</dt>
                                <dd>{movie.certificate}</dd>
                               </dl>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-warning w-100"> Book Ticket </button>
                            </div>
                        </div>

                    )
                }
            </section>
        </div>
    )
}