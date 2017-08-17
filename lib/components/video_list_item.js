'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //console.log("VIDEO LIST ITEM")


var VideoListItem = function (_Component) {
  _inherits(VideoListItem, _Component);

  function VideoListItem() {
    _classCallCheck(this, VideoListItem);

    return _possibleConstructorReturn(this, (VideoListItem.__proto__ || Object.getPrototypeOf(VideoListItem)).apply(this, arguments));
  }

  _createClass(VideoListItem, [{
    key: 'render',
    value: function render() {
      var video = this.props.video;

      //console.log("IN VIDEO LIST ITEM: "+  JSON.stringify(video.publishedAt));
      //console.log("IN VIDEO LIST ITEM: "+  JSON.stringify(video.channelId));
      //console.log("IN VIDEO LIST ITEM: "+  JSON.stringify(video.title));
      //console.log("IN VIDEO LIST ITEM: "+  JSON.stringify(video.description));
      //console.log("IN VIDEO LIST ITEM THUMBNAILS IN LIST ITEM: "+ video.thumbnails);
      var title = video.title;
      var published = video.publishedAt;
      var desc_o = video.description;
      var desc = desc_o.substring(0, 73) + " ...";
      var imageUrl = video.thumbnails.default.url;

      var location = {
        pathname: "/videoDetail",
        state: { video: video }
      };

      return (

        /*  <li onClick={() => this.props.onVideoSelect()} className="list-group-item">*/
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: location },
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            _react2.default.createElement(
              'div',
              { className: 'video-list media' },
              _react2.default.createElement(
                'div',
                { claseName: 'media-left' },
                _react2.default.createElement('img', { className: 'media-object pull', src: imageUrl })
              ),
              _react2.default.createElement(
                'div',
                { className: 'media-body' },
                _react2.default.createElement(
                  'div',
                  { className: 'media-heading listtitles' },
                  title
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'media-heading' },
                  published
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'mydesc' },
                  _react2.default.createElement(
                    'p',
                    null,
                    desc
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return VideoListItem;
}(_react.Component);

;

exports.default = VideoListItem;