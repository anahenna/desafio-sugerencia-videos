
const iifeDOM = (() => {
    function funcionPrivada(url, id) {
        document.querySelector(`#${id}`).setAttribute("src", url)
    }
    return {
        funcionPublica(url, id) {
            funcionPrivada(url, id)
        }
    }
})()



class Multimedia {
    #url;
    constructor(url) {
        this.#url = url
    }

    get url() {
        return this.#url
    }
    setInicio() {
        return "Este método es para realizar un cambio en la url del video"
    }
}

class Reproductor extends Multimedia {

    constructor(url, id) {
        super(url)
        this._id = id
    }

    playMultimedia() {
        iifeDOM.funcionPublica(this.url, this._id)
    }
    setInicio(tiempo) {
        const linkVideo = document.querySelector(`#${this._id}`);
        const url = this.url + `?start=${tiempo}`;
        linkVideo.setAttribute('src', url);
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/rY0WxgSXdEE", "musica")
const peliculas = new Reproductor("https://www.youtube.com/embed/17ywQS6XO-M", "peliculas")
const series = new Reproductor("https://www.youtube.com/embed/4iisysmwB_k", "series")

musica.playMultimedia()
peliculas.playMultimedia()
series.playMultimedia()

musica.setInicio(26);
peliculas.setInicio(27);
