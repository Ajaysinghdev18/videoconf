import { Container, Row, Col, TabContent, Card, CardTitle, CardText, TabPane, Nav, NavItem, NavLink, CustomInput, Form, FormGroup, Label, Input, Button, CardImg, CardBody,CardSubtitle } from 'reactstrap';
import './InvoiceHistory.css'
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";



const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true
    },
    {
        name: "Dua on",
        selector: "Status",
        sortable: true
      },
    {
      name: "Status",
      selector: "Status",
      sortable: true
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      sortable: true,
      right: true
    }
  ];

  const movies = [
    {
        id: 1,
        title: "Beetlejuice",
        year: "1988",
        runtime: "92",
        genres: ["Comedy", "Fantasy"],
        Status: <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
        plot:
          'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
      },
      {
        id: 2,
        title: "The Cotton Club",
        year: "1984",
        runtime: "127",
        genres: ["Crime", "Drama", "Music"],
        Status:  <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
        plot:
          "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
      },
      {
        id: 3,
        title: "The Shawshank Redemption",
        year: "1994",
        runtime: "142",
        genres: ["Crime", "Drama"],
        Status: <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        plot:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
      },
      {
        id: 4,
        title: "Crocodile Dundee",
        year: "1986",
        runtime: "97",
        genres: ["Adventure", "Comedy"],
        Status:  <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
        plot:
          "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
      },
      {
        id: 5,
        title: "Valkyrie",
        year: "2008",
        runtime: "121",
        genres: ["Drama", "History", "Thriller"],
        Status:  <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
        plot:
          "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
        posterUrl:
          "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
      },
      {
        id: 6,
        title: "Ratatouille",
        year: "2007",
        runtime: "111",
        genres: ["Animation", "Comedy", "Family"],
        Status: <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
        plot:
          "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
      },
      {
        id: 7,
        title: "City of God",
        year: "2002",
        runtime: "130",
        genres: ["Crime", "Drama"],
        Status: <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors:
          "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
        plot:
          "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
      },
      {
        id: 8,
        title: "Memento",
        year: "2000",
        runtime: "113",
        genres: ["Mystery", "Thriller"],
        Status: <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
        plot:
          "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        id: 9,
        title: "The Intouchables",
        year: "2011",
        runtime: "112",
        genres: ["Biography", "Comedy", "Drama"],
        Status:  <Button color="success" className="rounded" size="sm">Paid</Button>,
        actors: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
        plot:
          "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        posterUrl:
          "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"
      },
      {
        id: 10,
        title: "Stardust",
        year: "2007",
        runtime: "127",
        genres: ["Adventure", "Family", "Fantasy"],
        Status: "Matthew Vaughn",
        actors: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
        plot:
          "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
      },
      {
        id: 11,
        title: "Apocalypto",
        year: "2006",
        runtime: "139",
        genres: ["Action", "Adventure", "Drama"],
        Status: "Mel Gibson",
        actors:
          "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
        plot:
          "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
      },
      {
        id: 12,
        title: "Taxi Driver",
        year: "1976",
        runtime: "113",
        genres: ["Crime", "Drama"],
        Status: "Martin Scorsese",
        actors: "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
        plot:
          "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        id: 13,
        title: "No Country for Old Men",
        year: "2007",
        runtime: "122",
        genres: ["Crime", "Drama", "Thriller"],
        Status: "Ethan Coen, Joel Coen",
        actors: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
        plot:
          "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
      },
      {
        id: 14,
        title: "Planet 51",
        year: "2009",
        runtime: "91",
        genres: ["Animation", "Adventure", "Comedy"],
        Status: "Jorge Blanco, Javier Abad, Marcos Martínez",
        actors: "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
        plot:
          "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
        posterUrl:
          "http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg"
      },
      {
        id: 15,
        title: "Looper",
        year: "2012",
        runtime: "119",
        genres: ["Action", "Crime", "Drama"],
        Status: "Rian Johnson",
        actors: "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
        plot:
          "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
        posterUrl:
          "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg"
      },
      {
        id: 16,
        title: "Corpse Bride",
        year: "2005",
        runtime: "77",
        genres: ["Animation", "Drama", "Family"],
        Status: "Tim Burton, Mike Johnson",
        actors: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
        plot:
          "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
        posterUrl:
          "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg"
      },
      {
        id: 17,
        title: "The Third Man",
        year: "1949",
        runtime: "93",
        genres: ["Film-Noir", "Mystery", "Thriller"],
        Status: "Carol Reed",
        actors: "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
        plot:
          "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
      },
      {
        id: 18,
        title: "The Beach",
        year: "2000",
        runtime: "119",
        genres: ["Adventure", "Drama", "Romance"],
        Status: "Danny Boyle",
        actors:
          "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
        plot:
          "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
      },
      {
        id: 19,
        title: "Scarface",
        year: "1983",
        runtime: "170",
        genres: ["Crime", "Drama"],
        Status: "Brian De Palma",
        actors:
          "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
        plot:
          "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
      },
      {
        id: 20,
        title: "Sid and Nancy",
        year: "1986",
        runtime: "112",
        genres: ["Biography", "Drama", "Music"],
        Status: "Alex Cox",
        actors: "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
        plot:
          "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg"
      },
      {
        id: 21,
        title: "Black Swan",
        year: "2010",
        runtime: "108",
        genres: ["Drama", "Thriller"],
        Status: "Darren Aronofsky",
        actors: "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
        plot:
          'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
      },
      {
        id: 22,
        title: "Inception",
        year: "2010",
        runtime: "148",
        genres: ["Action", "Adventure", "Sci-Fi"],
        Status: "Christopher Nolan",
        actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        plot:
          "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
      },
  ]

function InvoiceHistory () {
    return (
        <>
        <div>
            <Container>
                
                    
                        <h5><b>Invoice History</b></h5>
                           
                                <DataTable
                               
                                columns={columns}
                                data={movies}
                                defaultSortFieldId={1}
                               
                                pagination
                                selectableRows
                                />
                         
                      
                 
                   
                </Container>
                    
        </div>
        </>
    )
}

export default InvoiceHistory;