

const btn=document.getElementById('toggleBtn')
btn.addEventListener('click',toggleRecomendations);

let poster=document.getElementById('poster')

function toggleRecomendations(e)
{
   poster.src = "./images/Animal-first-look.jpg"
   poster.src = "./images/sambahadur.jpg"
   btn.textContent="Sam Bahadur";
   btn.style.backgroundColor='blue';
   btn.style.color='white';
}

function handleFormSubmit(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    let genre = document.getElementById('genre').value;
    let cast = document.getElementById('cast').value;
    
    let movieDetails = {
       name,
       year,
       genre,
       cast
    };

    localStorage.setItem(movieDetails.name, JSON.stringify(movieDetails));

    displayUserOnScreen(movieDetails);

    document.getElementById('name').value = '';
    document.getElementById('year').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('cast').value = '';
}

localStorage.setItem(movieDetails.name, JSON.stringify(movieDetails));

function displayUserOnScreen(movieDetails) {
    const movieItem = document.createElement("li");

    movieItem.appendChild(
        document.createTextNode(
            `${movieDetails.name.toUpperCase()} - ${movieDetails.year} - ${movieDetails.genre.toUpperCase()} - ${movieDetails.cast.toUpperCase()}`
        )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    movieItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    movieItem.appendChild(editBtn);

    const movieList = document.getElementById("movieList");
    movieList.appendChild(movieItem);

    deleteBtn.addEventListener("click", function (event) {
        movieList.removeChild(event.target.parentElement);
        localStorage.removeItem(movieDetails.name);
    });

    editBtn.addEventListener("click", function (event) {
        movieList.removeChild(event.target.parentElement);
        localStorage.removeItem(movieDetails.name);
        document.getElementById('name').value = movieDetails.name;
        document.getElementById('year').value = movieDetails.year;
        document.getElementById('genre').value = movieDetails.genre;
        document.getElementById('cast').value = movieDetails.cast;
    });
}