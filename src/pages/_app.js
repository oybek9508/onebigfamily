import "../styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}
