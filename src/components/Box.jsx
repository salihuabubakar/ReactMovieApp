const Box = (props) => {
    return (
      <div className="Box">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <input placeholder="Search Movie Here....." value={props.searchValue} onChange={(event)=> {
                    props.setSearchValue(event.target.value)
                }} type="text" />
            </div>
      </div>
    );
}

export default Box;