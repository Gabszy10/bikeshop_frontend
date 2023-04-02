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
import "../assets/styles/style.css";

import MessengerCustomerChat from "react-messenger-customer-chat";

import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/reducers/cartReducer";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Shared/GoTop";

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
          {/* <GoTop scrollStepInPx="50" delayInMs="10.50" /> */}
          <MessengerCustomerChat
            pageId="127061742122440"
            appId="592986798075465"
            htmlRef="www.facebook.com/i-Wheels.shop"
          />
          ,
        </React.Fragment>
      );
    }
  }
);
