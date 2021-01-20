import "./App.css";
import Row from "./Row";
import Request from "./request";
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflex Originals"
        fetchUrl={Request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fectchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
