'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _video_list_item = require('./video_list_item');

var _video_list_item2 = _interopRequireDefault(_video_list_item);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw";

var VideoList = function (_Component) {
  _inherits(VideoList, _Component);

  function VideoList(props) {
    _classCallCheck(this, VideoList);

    var _this = _possibleConstructorReturn(this, (VideoList.__proto__ || Object.getPrototypeOf(VideoList)).call(this, props));

    _this.state = {
      videos: []

    };
    return _this;
  }
  //END CONTSTRUCTOR


  _createClass(VideoList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.makeCallToAxios();
    }
  }, {
    key: 'makeCallToAxios',
    value: function makeCallToAxios() {
      var _this2 = this;

      _axios2.default.get(url).then(function (res) {
        var videos = res.data.items;
        delete videos[4];
        //var myvideos = videos;
        _this2.setState({
          videos: videos
        });
      });
      //console.log(this.props)
    }
    /*
      navigateToDetailVideo() {
     console.log("NAVIGATING TO THE DETAIL PAGE: "+  JSON.stringify(this.props.history));
     this.props.history.push('/videoDetail');
     }
     */

  }, {
    key: 'render',
    value: function render() {
      //console.log("WHERE ARE THE VIDEOS: "+ JSON.stringify(this.state.videos));
      //console.log("WHERE IS THE HISTORY: "+ JSON.stringify(this.props.history));
      var videoItems = this.state.videos.map(function (video, i) {
        //const myindx = i;
        return _react2.default.createElement(_video_list_item2.default
        /*onVideoSelect={this.navigateToDetailVideo.bind(this)}*/
        , { key: video.etag,
          video: video.snippet });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            { className: 'listTitle' },
            'Beyond YouTube Video List'
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'col-md-8 list-group' },
          videoItems
        )
      );
    }
  }]);

  return VideoList;
}(_react.Component);

;

exports.default = VideoList;