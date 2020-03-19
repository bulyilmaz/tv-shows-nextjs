import Router from "next/router";

const Home = () => {
  return (
      <h1>Home Page</h1>
  );
};

Home.getInitialProps = ({ res }) => {
  if (process.browser) { // client side redirect
    Router.push("/[country]", "/us");
  } else { // server side redirect
    if (res) {
      res.writeHead(301, {
        Location: "/us"
      });

      res.end();
    }
  }

  return {};
};

export default Home;
