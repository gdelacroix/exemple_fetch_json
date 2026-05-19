 fetch("margot-robbie.json")
    .then((actor) =>actor.json())
    .then((data)=>{
        console.log(data);
        createActor(data);
    })

    function createActor(_data){
        const actorName=document.getElementsByClassName("actor-name")[0];
        const actorPicture=document.getElementsByClassName("actor-picture")[0];
        const actorMovies=document.getElementsByClassName("actor-movies")[0];

        actorName.innerHTML=_data.firstname + " " + _data.lastname;
        actorPicture.src=_data.picture;

        let moviesList="";

        for (let x=0; x<_data.movies.length;x++){
            moviesList += "<li>" + _data.movies[x].name + "|" + _data.movies[x].year + "</li>";
        }
        actorMovies.innerHTML=moviesList;

    }