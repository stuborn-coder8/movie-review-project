import Header from'./Header'
import './App.css';
import Movie from'./Movie'
import movie from'./movie.json'

function App() {
  
  return (
    <div className="App">
      
        <Header/>
        <div className="main">
          {
            movie.map((element)=>{
              return(
                <Movie
                
                title={element.Title}
                year={element.Year}
                img={element.Poster}/>
                             )
            })
          }

        </div>
          


        
        
    </div>
  );
}

export default App;
