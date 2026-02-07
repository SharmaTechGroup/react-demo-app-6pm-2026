
export function DataGrid(props){
    return(
        <table className="table caption-top table-hover">
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map(key=> <th key={key}>{key}</th>)
                    }
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item =>
                        <tr key={item}>
                            {
                                Object.keys(item).map(key=> <td key={key}>{item[key]}</td>)
                            }
                            <td>
                                <button className="btn btn-danger bi bi-trash"></button>
                                <button className="btn btn-warning mx-2 bi bi-pen"></button>
                                <button className="btn btn-primary bi bi-eye"></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}