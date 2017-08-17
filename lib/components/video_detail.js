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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoDetail = function (_Component) {
     _inherits(VideoDetail, _Component);

     function VideoDetail() {
          _classCallCheck(this, VideoDetail);

          return _possibleConstructorReturn(this, (VideoDetail.__proto__ || Object.getPrototypeOf(VideoDetail)).apply(this, arguments));
     }

     _createClass(VideoDetail, [{
          key: 'render',
          value: function render() {

               //console.log("PASSING STATE TO DETAIL: "+JSON.stringify(this.props.location.state));
               var video = this.props.location.state.video;
               var videoId = video.resourceId.videoId;
               //const url = 'https://www.youtube.com/embed/'+ videoId;
               //BELOW. ES6 SYNTAX
               var url = 'https://www.youtube.com/embed/' + videoId;

               return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                         _reactRouterDom.Link,
                         { to: '/' },
                         _react2.default.createElement(
                              'div',
                              { className: 'backBtn' },
                              _react2.default.createElement(
                                   'p',
                                   null,
                                   'Back to List of videos'
                              )
                         )
                    ),
                    _react2.default.createElement(
                         'div',
                         { className: 'videotitle' },
                         video.title
                    ),
                    _react2.default.createElement(
                         'div',
                         { className: 'detailPubAt' },
                         video.publishedAt
                    ),
                    _react2.default.createElement(
                         'div',
                         { className: 'video-detail col-md-8' },
                         _react2.default.createElement(
                              'div',
                              { className: 'embed-responsive embed-responsive-16by9' },
                              _react2.default.createElement('iframe', { className: 'embed-responsive-item', src: url })
                         ),
                         _react2.default.createElement(
                              'div',
                              { className: 'details' },
                              _react2.default.createElement(
                                   'div',
                                   null,
                                   video.description
                              )
                         )
                    )
               );
          }
     }]);

     return VideoDetail;
}(_react.Component);

exports.default = VideoDetail;