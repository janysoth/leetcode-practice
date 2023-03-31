class Movie {
    constructor() {
        this.title = '';
        this.year = '';
        this.director = '';
        this.rating = '';
    } 
}

class Car {
    constructor(){
        this.year = '';
        this.brand = '';
        this.name = '';
    }
}

const movie1 = new Movie();
movie1.title = 'Cocaine Bear';
movie1.year = '2023';
movie1.director = 'Jonny Vorn Soth';
movie1.rating = 'R';


const myMovies = [];
const myCars = [];
myMovies.push(movie1);

console.log(myMovies[0]);



const car1 = new Car ();
car1.year = '2012';
car1.brand = 'Honda';
car1.name = 'Civics';

const car2 = new Car ();
car2.year = '2023';
car2.brand = 'Mitsubishi';
car2.name = 'Outlander';

myCars.push(car1);
myCars.push(car2);

console.log(myCars, myMovies);