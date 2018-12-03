import React, { Component } from "react";
import { MuiThemeProvider, withStyles as muiWithStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import getPageContext from "./getPageContext";

const withStyles = styles => WrapperComponent => {
  const StyledComponent = muiWithStyles(styles)(WrapperComponent);

  class WithStyles extends Component {
    constructor(props) {
      super(props);

      this.pageContext = this.props.pageContext || getPageContext();
    }

    componentDidMount() {
      const jssStyles = document.querySelector("#server-side-jss");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;
    
    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <CssBaseline />
          <StyledComponent {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  return WithStyles;
}

export default withStyles;
