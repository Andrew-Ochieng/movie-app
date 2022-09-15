const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// initializa variables
const mainEl = document.getElementById('main')
const search = document.getElementById('search')
const myForm = document.getElementById('form')

// display all movies
function getMovies(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)


            showMovies(data.results)
    
        })
        .catch((err) => console.log(err))
}


// search movies
function showMovies(movies) {
    mainEl.innerHTML = ""


    movies.forEach((movie) => {
        const { poster_path, title, vote_average } = movie;
    
        mainEl.innerHTML += `
                <div class="movie">
                    <img id="image" src="${imgPath + poster_path}" alt="${title}"/>
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="${voteColor(vote_average)}">
                            ${vote_average}
                        </span>
                    </div>
                    
                </div>
            `
            
        });
    
}



myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // console.log('proceed')
    

    const searchTerm = search.value;

    if (searchTerm) {
        
        getMovies(searchApi + searchTerm) 

        search.value = ""
    }


})


// vote color
function voteColor(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}




document.addEventListener("DOMContentLoaded", () => {
    getMovies(apiUrl)


})



















