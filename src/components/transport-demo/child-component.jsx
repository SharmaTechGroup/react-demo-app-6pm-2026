

export function ChildComponent({onChildClick}){

    function handleClick(){
        let data = 'Hello from child';
        onChildClick(data);
    }

    return(
        <div className="p-4 bg-warning">
            <h4>Child Component</h4>
            <button onClick={handleClick} className="btn btn-light">Send Data to parent</button>
        </div>
    )
}