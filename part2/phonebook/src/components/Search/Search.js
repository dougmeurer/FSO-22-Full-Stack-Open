export function Search ({handleFilter}) {

    return (
        <form>
            <input className="form-control" placeholder="search" type="text"onChange={(event) => {handleFilter(event);}}/>
        </form>
    )
  }