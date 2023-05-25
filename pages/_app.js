import "../assets/styles/bootstrap.min.css";
import "../assets/styles/fontawesome.min.css";
import "../assets/styles/animate.min.css";
import "../assets/styles/slick.css";
import "../assets/styles/slick-theme.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../assets/styles/responsive.css";
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";
import "react-chatbot-kit/build/main.css";
import "../assets/styles/style.css";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/reducers/cartReducer";
import { DefaultSeo } from "next-seo";

import BotChat from "../components/chatbot";

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <React.Fragment>
          <DefaultSeo
            title="i-Wheels.shop"
            description="We offer the best brands of Bikes, E-Scooter, E-Bikes & E-Rides available in the market."
          />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
          {/* <GoTop scrollStepInPx="50" delayInMs="10.50" /> */},
          <BotChat />
        </React.Fragment>
      );
    }
  }
);
