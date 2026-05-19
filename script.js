 fetch("margot-robbie.json")// on charge le json
    .then((actor) => // une fois que le fichier est chargé
        actor.json())// on le convertit en objet json
    .then((data)=>{ // une fois que le json est converti en objet
        console.log(data);// on affiche le résultat dans la console
        createActor(data); // on appelle la fonction createActor en lui passant les données du json
    })

    function createActor(_data){
        // on récupère les éléments du html
        const actorName=document.getElementsByClassName("actor-name")[0];
        const actorPicture=document.getElementsByClassName("actor-picture")[0];
        const actorMovies=document.getElementsByClassName("actor-movies")[0];

        // on remplit les éléments du html avec les données du json
        actorName.innerHTML=_data.firstname + " " + _data.lastname;
        actorPicture.src=_data.picture;

        let liste=document.createElement("ul");
        liste.innerHTML="";
        let movie="";
    // on parcourt la liste des films de l'acteur et on les ajoute à la variable moviesList
        for (let x=0; x<_data.movies.length;x++){
            movie = "<li>" + _data.movies[x].name + "|" + _data.movies[x].year + "</li>";
        
            liste.innerHTML +=movie;}
        // on remplit l'élément actorMovies avec la liste des films de l'acteur
        actorMovies.appendChild(liste);

    }