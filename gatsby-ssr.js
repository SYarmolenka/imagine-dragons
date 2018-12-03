const { JssProvider } = require("react-jss");
const { renderToString } = require("react-dom/server");
const React = require('react');

const getPageContext = require("./src/getPageContext").default;

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const pageContext = getPageContext();

  replaceBodyHTMLString(
    renderToString(
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        {React.cloneElement(bodyComponent, {
          pageContext
        })}
      </JssProvider>
    )
  );

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
    />
  ]);
};

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([]);
};
