import { useEffect, useState } from 'react';
import './App.css';

// 1099c01d
const Api = " http://www.omdbapi.com/?i=tt3896198&apikey=1099c01d"

function App() {
 const [movie, setMovie] = useState([])
 const [SearchMovieData, setSearchMovieData] = useState('')
 
 useEffect(() => {
   searchMovie("All")
   
   //  const ['Poster' , 'Director' , 'Title'] = setStoreMovieData
  }, [])

  const searchMovie =async (title)=>{
    const fetching = await fetch(`${Api}&s=${title}`)
    const data = await fetching.json()
     setMovie(data.Search)
   //  setStoreMovieData(data)
  }
 
  console.log(movie) 
  return (
    <div className="app">
      <h1>Movie App</h1>
            <div className="search">
            <input
            value={SearchMovieData}
             placeholder='Search for Movies'
            onChange={(e)=> setSearchMovieData(e.target.value)}
            />
            <button
            onClick={()=> searchMovie(SearchMovieData)}
            
            >🔎</button>
            
            </div>
      {
        <>
           {
             movie?.length > 0 ? (
              <div className='container'>
              {
                movie.map((moviee)=>{


              return(
                <div className='movie' key={moviee.imdbID}>
                <div>
                  <p>{moviee.Year}</p>

                </div>
                <div>
                  <img  src={moviee.Poster !== 'N/A' ? moviee.Poster : 'https://via.placeholder.com/400'} alt='Loading'/>
                </div>
                <div>
                  <span>{moviee.Type}</span>
                  <h3>{moviee.Title}</h3>

                </div>
              </div>
              )
                })
              }
            </div>
             ) : 
             (
               <div className='empty'>
                <h2>No Movies Found</h2>
               </div>
             )

           }
        </>
      }
    </div>
  );
}

export default App;
