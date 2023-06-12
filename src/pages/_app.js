import "../styles/globals.css";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App(props) {
	const { Component, pageProps } = props;
	return <Component {...pageProps} />;
}
