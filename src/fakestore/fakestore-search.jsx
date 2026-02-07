

export function FakestoreSearch(){
    return(
        <div className="container-flud">
            <form method="get" action="/results">
                <h2>Search Products</h2>
                <select name="category">
                    <option>All</option>
                    <option>Mobiles</option>
                    <option>Watches</option>
                </select>
                <input type="text" name="product" />
                <button type="submit" className="btn mx-2">Search</button>
            </form>
        </div>
    )
}