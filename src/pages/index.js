import axios from "axios";

const main = () => {
    const filmList = document.getElementById("film-list");

    const loadFilm = async () => {
        try {
            const res = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=6066a784c008e4785c52b502506f9115");
            displayFilm(res.data)
        } catch (error) {
            console.log("tesssss");
        }
    }

    const displayFilm = (tes) => {
        const data = tes.results.map((t) => {
            return `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w500${t.poster_path}" class="card-img-top" alt=${t.id}>
                    <div class="card-body">
                        <h5 class="card-title">${t.title}</h5>
                        <p class="card-text text-truncate"">${t.overview}</p>
                    </div>
                </div>
            </div>
            `
        }).join('')

        filmList.innerHTML = data
    }

    loadFilm()
}

export default main