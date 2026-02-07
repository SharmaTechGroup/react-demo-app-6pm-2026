
export function Navbar(props)
{
     if(props.orientation==='horizontal') {
          return(
        <nav className={`d-flex flex-row ${props.theme} my-2 justify-content-between align-items-center p-4 border border-1 border-secondary`}>
            <div>
                <span className={props.logo}></span>
                <span className="fw-bold">{props.brand}</span>
            </div>
            <div>
                {
                    props.menuitems.map(item=> <span className="mx-3" key={item}>{item}</span>)
                }
            </div>
            <div>
                <span className="bi bi-heart"></span>
                <span className="bi bi-person mx-4"></span>
                <span className="bi bi-gift"></span>
            </div>
        </nav>
    )
     } else {
        return(
        <nav className={`d-flex flex-column ${props.theme} my-2 justify-content-between align-items-center p-2 border border-1 border-secondary`} style={{width:'200px', height:'400px'}}>
            <div>
                <span className={props.logo}></span>
                <span className="fw-bold">{props.brand}</span>
            </div>
            <div>
                {
                    props.menuitems.map(item=> <span className="my-4 btn w-100 btn-light d-block" key={item}>{item}</span>)
                }
            </div>
            <div>
                <span className="bi bi-heart"></span>
                <span className="bi bi-person mx-4"></span>
                <span className="bi bi-gift"></span>
            </div>
        </nav>
    )
     }
}