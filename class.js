class Movie {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    } 
    
    Year(){
        return this.year;
    }

    Titlte(){
        return this.title;
    }

}

const myMovie = new Movie('Cocaine Bear', 2023);

let message = `"${myMovie.Titlte()}" came out in the year, ${myMovie.Year()}.`;
console.log(message);
