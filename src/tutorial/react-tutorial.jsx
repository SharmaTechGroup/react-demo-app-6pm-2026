
import { useParams } from "react-router-dom";

export function ReactTutorial(){

    let params = useParams();

    return(
        <div>
            <h4>React Tutorial</h4>
            <dl>
                <dt>Topic</dt>
                <dd>{params.topic}</dd>
                <dt>Sub Topic</dt>
                <dd>{params.subtopic}</dd>
                <dt>Duration</dt>
                <dd>{params.duration}</dd>
            </dl>
        </div>
    )
}