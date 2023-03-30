class Movie {
    constructor() {
        this.title = '';
        this.year = '';
        this.director = '';
        this.rating = '';
    } 
}

const movie1 = new Movie();
movie1.title = 'Cocaine Bear';
movie1.year = '2003';
movie1.director = 'Jonny Vorn Soth';
movie1.rating = 'R';


const myMovies = [];

myMovies.push(movie1);
console.log(myMovies[0]);
