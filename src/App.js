import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
           movieList: [
               {
                Title: 'Earth Trailers',
                ReleaseDate: '3/18/2019',
                LeadActor: 'Dalton Keck',
                SubGenre: 'Zombies',
                Producer: 'Tim Cook',
                icon: 'fas fa-users',
                color: '#6fba1c',
               },
               {
               Title: 'Fly Again. II.',
               ReleaseDate: '3/18/1989',
               LeadActor: 'Dalton Keck',
               SubGenre: 'Insectoid',
               Producer: 'Tim Cook',
               icon: 'fas fa-users',
               color: '#6fba1c',
               },
               {
                Title: 'Magma Eaters',
                ReleaseDate: '3/18/2018',
                LeadActor: 'Dalton Keck',
                SubGenre: 'Nature',
                Producer: 'Burt Reynolds',
                icon: 'fas fa-users',
                color: '#9c27b0',
               },

           ],
        }
    }

    render() {
        const { movieList } = this.state;
        movieList.sort(function(a, b) {
            let nameA = a.ReleaseDate;
            let nameB = b.ReleaseDate;
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        });
        return (
          <div className="App">
            <Timeline orientation="right">
              {
                  movieList.map((movie, i) => {
                      return(
                          <TimelineEvent
                              title={movie.Title}
                              titleStyle={{fontSize: '1.5em'}}
                              icon={<i className = {movie.icon}/>}
                              iconColor={movie.color}
                          >
                              <div>
                                  <label>Release Date:</label>
                                  <span> {movie.ReleaseDate}</span>
                              </div>
                              <div>
                                  <label>Lead Actor:</label>
                                  <span> {movie.LeadActor}</span>
                              </div>
                              <div>
                                  <label>Sub-Genre:</label>
                                  <span> {movie.SubGenre}</span>
                              </div>
                              <div>
                                  <label>Producer:</label>
                                  <span> {movie.Producer}</span>
                              </div>
                          </TimelineEvent>
                      )
                  })
              }
            </Timeline>
          </div>
        );
    }
}

export default App;
