import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Movie, MoviePage } from "utils/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  
  const [moviePage, setMovie] = useState<MoviePage>( [{
    id: 1,
    title: "The Witcher",
    score: 4.5,
    count: 2,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    } ] );

  useEffect(() => {
    axios.get(`${BASE_URL}/movies.php?page=${pageNumber}&sort=id`).then((response) => {
      const data = response.data as MoviePage;
      
       setMovie(data);
    });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber : number) => {
    setPageNumber(newPageNumber);
}

  
  return (
    <>
      <Pagination onChange={handlePageChange} />
      <div className="container">
                <div className="row">
                {moviePage.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
    </>
  );
}
export default Listing;
