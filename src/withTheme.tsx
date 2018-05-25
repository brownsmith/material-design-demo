import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import getPageContext from './getPageContext';
// import JssProvider from 'react-jss/lib/JssProvider';

function withTheme(Component) {
  return class extends React.Component {
    public static propTypes = {
      pageContext: PropTypes.object,
    };

    public static getInitialProps = (ctx) => {
      if (Component.getInitialProps) {
        return Component.getInitialProps(ctx);
      }

      return {};
    }

    public pageContext = null;

    constructor(props, context) {
      super(props, context);

      this.pageContext = this.props.pageContext || getPageContext();
    }

    public componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    public render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        // <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}>
            {/* <CssBaseline /> */}
            <Component {...this.props} />
          </MuiThemeProvider>
        // </JssProvider>
      );
    }
  };
}

export default withTheme;
