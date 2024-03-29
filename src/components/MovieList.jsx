const MovieList = (props) => {
    return (
      <div>
        <div className="Card">
         
            
            {props.movies.map((movie, index) => {
               return (
                 <div className="MovieCard">
                   <div className="ImgDiv">
                     <img key={index} src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="movie" />
                     <div className="btnDiv">
                       <button onClick={() => props.onAdd(movie)}>
                         {props.btnText}
                       </button>
                     </div>
                   </div>
                 </div>
               ); 
            })}
          
        </div>
      </div>
    );
}

export default MovieList;