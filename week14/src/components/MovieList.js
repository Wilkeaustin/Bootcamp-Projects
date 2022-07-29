import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import ReactStars from 'react-stars'
import { Figure } from 'react-bootstrap';
import ReviewForm from './ReviewForm';
import { movies } from './Movies';


export default function MovieList() {
    return (
        <div>
        <div style={{ display: 'block',
                      width: 700,
                      padding: 30 }}>
            <Figure>
                <Figure.Image
                    width={350}
                    height={300}
                    alt="171x180"
                    src="https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg"
                /><br></br>
                <h2>Star Wars: Rogue One</h2>
                Rating:<ReactStars size={85} />
                <Figure.Caption 
                style={{ 
                color: "white", 
                backgroundColor: '#282c34',
                width: 350,
                height: 100,
                borderColor: 'black',
                borderWidth: 5,
                paddingLeft: 10,
                justifyContent: 'center' 
                }}>
                    In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans <br></br> to the Death Star, the Empire's ultimate weapon of destruction.
                </Figure.Caption>
            </Figure><br></br>
            <Figure>
                <Figure.Image
                    width={350}
                    height={300}
                    alt="171x180"
                    src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
                /><br></br>
                <h2>Spider-Man: No Way Home</h2>
                Rating:<ReactStars size={85} />
                <Figure.Caption 
                style={{ 
                    color: "white", 
                    backgroundColor: '#282c34',
                    width: 350,
                    height: 100,
                    borderColor: 'black',
                    borderWidth: 5,
                    paddingLeft: 10,
                    justifyContent: 'center' 
                }}>
                With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, <br></br> dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
                </Figure.Caption>
            </Figure><br></br>
            <Figure>
                <Figure.Image
                    width={350}
                    height={300}
                    alt="171x180"
                    src="https://image.tmdb.org/t/p/original/spnMmUIi3AlocdB4XS2MPlN9k0G.jpg"
                /><br></br>
                <h2>No Country For Old Men</h2>
                Rating:<ReactStars size={85} />
                <Figure.Caption 
                style={{ 
                color: "white", 
                backgroundColor: '#282c34',
                width: 350,
                height: 100,
                borderColor: 'black',
                borderWidth: 5,
                paddingLeft: 10,
                justifyContent: 'center'
                }}>
                Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong <br></br> and more than two million dollars in cash near the Rio Grande.
                </Figure.Caption>
            </Figure><br></br><ReviewForm />
        </div>
        
        </div>
    )
}


