
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';

import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const  url="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw";

ReactDOM.render(

  <BrowserRouter>
<div>
   <Switch>
      <Route path="/videoDetail" component={VideoDetail} history={history}/>
      <Route path="/" component={VideoList} history={history}/>

   </Switch>
</div>

</BrowserRouter>
  ,
  document.getElementById('container')
);
