import Header from "../components/Header.jsx";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Header/>
            <Component {...pageProps}/>
            <style jsx>{`
                :global(h3) {
                    color: red;
                }
            `}</style>
        </>
    );
};

export default App;