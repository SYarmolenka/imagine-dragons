import React, { PureComponent } from "react";
import { Transition as ReactTransition } from "react-transition-group"
import PropTypes from 'prop-types';

class Transition extends PureComponent {
  static propTypes = {
    defaultStyle: PropTypes.object.isRequired,
    transitionStyles: PropTypes.object.isRequired,
    transitionTime: PropTypes.number.isRequired,
  };

  constructor (props) {
    super(props)
    this.listenHandler = this.listenHandler.bind(this)
    this.state = {
      in: false
    }
  }

  componentDidMount () {
    global.window.addEventListener('gatsby-plugin-page-transition::exit', this.listenHandler)
    this.setState({
      in: true
    })
  }

  listenHandler () {
    this.setState({
      in: false
    })
  }

  componentWillUnmount () {
    global.window.removeEventListener('gatsby-plugin-page-transition::exit', this.listenHandler)
  }

  render() {
    const { children, defaultStyle, transitionStyles, transitionTime } = this.props;

    return (
      <ReactTransition
        timeout={transitionTime}
        in={this.state.in}
      >
      {
        status => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[status],
            }}
          >
            {children}
          </div>
        )
      }
      </ReactTransition>
    )
  }
};

export default Transition