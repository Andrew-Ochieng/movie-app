const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const mainEl = document.getElementById('main')


function getMovies() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            showMovies(data.results)
    
        })
        .catch((err) => console.log(err))
}


function showMovies(movies) {
    mainEl.innerHTML = ""

    movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    mainEl.innerHTML += `
            <div class="movie">
                <img id="image" src="${imgPath + poster_path} "
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span id="vote">
                        ${vote_average}
                    </span>
                </div>
                
            </div>
        `
        
    });
}

// const voteColor = document.getElementById('vote').innerHTML

// function changeColor() {
//     if (voteColor < 7) {
//         voteColor.style.color = "red"
//     } else if (voteColor <= 8) {
//         voteColor.style.color = "orange"
//     } else {
//         voteColor.style.color = "green"
//     }
// }




document.addEventListener("DOMContentLoaded", () => {
    getMovies()


})



















