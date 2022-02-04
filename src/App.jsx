import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import MovieDetail from "./containers/movie-detail/MovieDetail";
import MovieList from "./containers/movie-list/MovieList";
import WatchList from "./containers/watch-list/WatchList";

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/movie/now-playing" />} />
        <Route path="/movie/now-playing" element={<MovieList />} />
        <Route path="/movie/popular" element={<MovieList />} />
        <Route path="/movie/top-rated" element={<MovieList />} />
        <Route path="/movie/upcoming" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movie/watch-list" element={<WatchList />} />
        <Route path="*" element={<Navigate to="/movie/now-playing" />} />
      </Routes>
    </SiteLayout>
  );
}

export default App;
