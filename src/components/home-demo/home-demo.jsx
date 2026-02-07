import { useState } from "react"
import { DataGrid } from "../../controlled-components/data-grid";

export function HomeDemo(){
    const [products] = useState([{Name:'TV', Price:34000}, {Name:'Mobile', Price:40000}]);
    const [employees] = useState([{FirstName: 'Raj', LastName:'Kumar', Desigation:'Manager', Salary: 45000}, {FirstName: 'Raj', LastName:'Kumar', Desigation:'Manager', Salary: 45000},{FirstName: 'Raj', LastName:'Kumar', Desigation:'Manager', Salary: 45000},{FirstName: 'Raj', LastName:'Kumar', Desigation:'Manager', Salary: 45000}]);
    return(
        <div className="container-fluid">
            <DataGrid caption="Products Table" data={products} />
            <DataGrid caption="Employee Details" data={employees} />
        </div>
    )
}