//console.log("VIDEO LIST ITEM")
import React, {Component} from 'react';
import {BrowserRouter, Route,browserHistory, Router, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

class VideoListItem extends Component {

render () {
  var video = this.props.video;

  //console.log("IN VIDEO LIST ITEM: "+  JSON.stringify(video.publishedAt));
  //console.log("IN VIDEO LIST ITEM: "+  JSON.stringify(video.channelId));
  //console.log("IN VIDEO LIST ITEM: "+  JSON.stringify(video.title));
  //console.log("IN VIDEO LIST ITEM: "+  JSON.stringify(video.description));
  //console.log("IN VIDEO LIST ITEM THUMBNAILS IN LIST ITEM: "+ video.thumbnails);
      const title = video.title;
      const published = video.publishedAt;
      const desc_o = video.description;
      const desc =  desc_o.substring(0, 73)+ " ...";
      const imageUrl = video.thumbnails.default.url;

      const location = {
      pathname: "/videoDetail",
      state: { video: video }
    }

return (

    /*  <li onClick={() => this.props.onVideoSelect()} className="list-group-item">*/
    <Link to={location}>
      <li  className="list-group-item">
      <div className="video-list media">
      <div claseName="media-left">
        <img className="media-object pull" src={imageUrl} />
      </div>
      <div className="media-body">
        <div className="media-heading listtitles">{title}</div>
      <div className="media-heading">{published}</div>
      <div className="mydesc"><p>{desc}</p></div>
      </div>
      </div>
      </li>
      </Link>
  )}
};

export default VideoListItem;
