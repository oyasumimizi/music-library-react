import React from 'react';

import axios from 'axios';

export default class MusicList extends React.Component {
  state = {
    music: []
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

  renderTableData() {
    return this.state.music.map((music, index) => {
       const { id, title, album, artist, releaseDate } = music;
       return (
          <tr key={id}>
          {/* // <tr key={title}>
          // <tr key={album}>
          // <tr key={artist}>
          // <tr key={releaseDate}> */}
             <td key = {id+index}>{id}</td>
             <td key = {title+index}>{title}</td>
             <td key = {album+index}>{album}</td>
             <td key = {artist+index}>{artist}</td>
             <td key = {releaseDate+index}>{releaseDate}</td>
          </tr>
      )
    });
  }

  
  render() {
    let musicTable = this.renderTableData();
        return(
         <table>
           <thead>
           <th>ID</th>
           <th>Title</th>
           <th>Album</th>
           <th>Artist</th>
           <th>Release Date</th>
           </thead>
           <tbody>
          {musicTable}
           </tbody>
           {/* <div>
      {musicTable.filter(musicTable => musicTable.includes('')).map(filteredMusicTable => (
        <li>
          {filteredMusicTable}
        </li>
      ))}
    </div> */}
        </table>)
}
}