import React , {useEffect,useState} from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./pagination";
import { useDispatch ,useSelector} from "react-redux";
import { getAllMovie } from "../redux/actions/movieAction";
function MoviesList({ getPage, pageCount }) {
    const [movies, setMovies] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
      // getAllMovies();
      dispatch(getAllMovie());
    }, []);

    const dataMovies = useSelector((state) => state.movies);

    useEffect(() => {
      setMovies(dataMovies);
    }, [dataMovies]);

  return (
    <>
      <Row className="mt-3">
        {movies.length >= 1 ? (
          movies.map((movie) => {
            return <CardMovie key={movie.id} movie={movie} />;
          })
        ) : (
          <h2 className="text-center p-5">لا يوجد افلام</h2>
        )}
      </Row>
      {movies.length >= 1 ? (
        <PaginationComponent getPage={getPage} pageCount={pageCount} />
      ) : null}
    </>
  );
}

export default MoviesList;
