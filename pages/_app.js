const App = ({ Component, pageProps }) => {
    return (
        <>
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
