'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class UserAvatar
 * @extends React.Component
 *
 * @author https://github.com/bltnico
 * @url https://github.com/bltnico/react-user-avatar
 * @version 1.1.1
 *
 * @example
 *
 * <UserAvatar
 *     size={100}
 *     onClick={this.doSomething}
 *     username="bltnico"
 *     textColor="#ffffff" />
 *
 */

var UserAvatar = function (_React$Component) {
    _inherits(UserAvatar, _React$Component);

    /**
     * Constructor
     *
     * @param {Object} props
     */

    function UserAvatar(props) {
        _classCallCheck(this, UserAvatar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserAvatar).call(this, props));

        _this.state = {
            color: null,
            text: null
        };
        return _this;
    }

    _createClass(UserAvatar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                color: this.getColor(),
                text: this.getText()
            });
        }

        /**
         * @static getColor
         * @param {String} str
         * @return {String}
         */

    }, {
        key: 'hashCode',

        /**
         * Thanks to Cristian Sanchez
         * @url http://stackoverflow.com/a/3426956/4185200
         *
         * @param {String} str
         * @return {String}
         */
        value: function hashCode(str) {
            var hash = 0,
                i = 0;
            for (i; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }return hash;
        }

        /**
         * Thanks to Cristian Sanchez
         * @url http://stackoverflow.com/a/3426956/4185200
         *
         * @param {Integer} int
         * @return {String}
         */

    }, {
        key: 'intToRGB',
        value: function intToRGB(i) {
            var c = (i & 0x00FFFFFF).toString(16).toUpperCase();

            return "00000".substring(0, 6 - c.length) + c;
        }

        /**
         * Get color with username
         * @return {String}
         */

    }, {
        key: 'getColor',
        value: function getColor() {
            var hash = this.hashCode(this.props.username);
            return this.intToRGB(hash);
        }

        /**
         * Get text with username
         * @return {String}
         */

    }, {
        key: 'getText',
        value: function getText() {
            var f = undefined,
                l = undefined;
            f = this.props.username.substr(0, 1);
            l = this.props.username.substr(this.props.username.length - 1, this.props.username.length);
            return (f + l).toUpperCase();
        }

        /**
         * Event when user click on user avatar
         * @return {Function}
         */

    }, {
        key: '_onClick',
        value: function _onClick() {
            return this.props.onClick();
        }

        /**
         * Render UserAvatar component
         * @return {String}
         */

    }, {
        key: 'render',
        value: function render() {

            var styles = {
                container: {
                    backgroundColor: !this.props.borderStyle ? "#" + this.state.color : "transparent",
                    border: !this.props.borderStyle ? "none" : "2px solid " + this.state.color,
                    borderRadius: this.props.size / 2,
                    width: this.props.size,
                    height: this.props.size,
                    textAlign: 'center',
                    lineHeight: this.props.size + "px"
                },
                text: {
                    color: !this.props.borderStyle ? this.props.textColor : this.state.color,
                    fontSize: this.props.size / 3 + "px"
                }
            };

            return _react2.default.createElement(
                'div',
                { style: styles.container, onClick: this._onClick.bind(this) },
                _react2.default.createElement(
                    'span',
                    { style: styles.text },
                    this.state.text
                )
            );
        }
    }], [{
        key: 'getColor',
        value: function getColor(str) {
            return this.intToRGB(this.hashCode(str));
        }
    }]);

    return UserAvatar;
}(_react2.default.Component);

/**
 * Define UserAvatar propTypes
 */

exports.default = UserAvatar;
UserAvatar.propTypes = {
    username: _react2.default.PropTypes.string.isRequired,
    size: _react2.default.PropTypes.number,
    onClick: _react2.default.PropTypes.func,
    textColor: _react2.default.PropTypes.string,
    borderStyle: _react2.default.PropTypes.bool
};

/**
 * Init default UserAvatar props
 */
UserAvatar.defaultProps = {
    size: 100,
    textColor: "#ffffff",
    borderStyle: false
};