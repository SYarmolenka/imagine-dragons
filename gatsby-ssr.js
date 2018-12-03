const { JssProvider } = require("react-jss");
const { renderToString } = require("react-dom/server");
const React = require('react');
const { MuiThemeProvider } = require('@material-ui/core/styles');

const getPageContext = require("./src/getPageContext").default;
const Layout = require('./src/components/Layout').default;

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { theme, sheetsManager, sheetsRegistry, generateClassName } = getPageContext();

  replaceBodyHTMLString(
    renderToString(
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          {bodyComponent}
        </MuiThemeProvider>
      </JssProvider>
    )
  );

  setHeadComponents([
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{ __html: sheetsRegistry.toString() }}
    />
  ]);
};
