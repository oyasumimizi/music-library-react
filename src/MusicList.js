import React from 'react';

import axios from 'axios';

export default class MusicList extends React.Component {
  state = {
    music: [id, title, album, artist, releaseDate]
  }
}

  componentDidMount() {
    axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
      .then(res => {
        const music = res.data;
        console.log(music);
        this.setState({ music });
        this.setState({ loading: false })
      })
  }

  render() {

    if(this.state.loading == true){
       return(<div>Loading...</div>)
    }
    else{
        return(
         <p>
           {this.state.music.id}
           {this.state.music.title}
           {this.state.music.album}
           {this.state.music.artist}
           {this.state.music.releaseDate}
        </p>
    )
  }
}

// if (this is true) ? do this: else do this