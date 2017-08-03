import axios from 'axios';
import React, {Component} from 'react';
import VideoListItem from './video_list_item';
import {BrowserRouter, Route,browserHistory, Router, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';


const  url="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw";

class VideoList extends Component {
  constructor(props) {
     super(props);
     this.state = {
     videos: [],

   }
 }
//END CONTSTRUCTOR
  componentDidMount() {
      this.makeCallToAxios();
  }
  makeCallToAxios() {
        axios.get(url)
          .then(res => {
            const videos =  res.data.items;
            delete videos[4];
            //var myvideos = videos;
            this.setState({
            videos:videos,
          })
      });
      //console.log(this.props)
  }
/*
  navigateToDetailVideo() {
 console.log("NAVIGATING TO THE DETAIL PAGE: "+  JSON.stringify(this.props.history));
 this.props.history.push('/videoDetail');
 }
 */

render() {
  //console.log("WHERE ARE THE VIDEOS: "+ JSON.stringify(this.state.videos));
  //console.log("WHERE IS THE HISTORY: "+ JSON.stringify(this.props.history));
  const videoItems =  this.state.videos.map((video, i) => {
  //const myindx = i;
  return  <VideoListItem
  /*onVideoSelect={this.navigateToDetailVideo.bind(this)}*/
  key={video.etag}
  video={video.snippet}/>
  })

return(
  <div>
  <div><p className="listTitle">Beyond YouTube Video List</p></div>
<ul className="col-md-8 list-group">
{videoItems}
</ul>

</div>
)}

};


export default VideoList;
