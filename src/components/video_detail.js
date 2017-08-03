import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter, Route,browserHistory, Router, Switch} from 'react-router-dom';



class VideoDetail extends Component {

 render () {

   //console.log("PASSING STATE TO DETAIL: "+JSON.stringify(this.props.location.state));
   const video = this.props.location.state.video;
   const videoId = video.resourceId.videoId;
   //const url = 'https://www.youtube.com/embed/'+ videoId;
   //BELOW. ES6 SYNTAX
  const url= `https://www.youtube.com/embed/${videoId}`;

   return (
        <div>
             <Link to="/">
             <div className="backBtn"><p>Back to List of videos</p></div>
             </Link>
               <div className="videotitle" >{video.title}</div>
                  <div className="detailPubAt">{video.publishedAt}</div>
             <div className="video-detail col-md-8">
                 <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src={url}></iframe>
                 </div>
             <div className="details">

                 <div>{video.description}</div>
             </div>

             </div>
        </div>

   )};
 }

export default VideoDetail;
