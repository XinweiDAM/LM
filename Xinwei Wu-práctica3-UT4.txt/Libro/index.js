document.addEventListener("DOMContentLoaded", () => {
    fetch("index.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                const main = document.getElementsByTagName("main")[0];

                item.libros.forEach((libro) => {
                    const main = document.getElementById("libros");
                    main.innerHTML += `<h1>${libro.title}</h1>` 
                    main.innerHTML += `<h2>${libro.author}</h2>`
                    main.innerHTML += `<p>${libro.genre}</p>`
                    main.innerHTML += `<p>${libro.year}</p>`
                    main.innerHTML += `<img src = ${libro.cover}>`
                    });

                });
        })
        .catch((error) => console.error("Error loading data:", error));
});


