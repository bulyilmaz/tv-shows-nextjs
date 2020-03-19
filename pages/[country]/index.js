/*import { useEffect, useState } from "react";
import axios from "axios";

const CountryShows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get("http://api.tvmaze.com/schedule?country=US&date=2014-12-01")
            .then(response => {
                setShows(response.data);
            });
    }, []);

    return (
        <div>
            <p>Country Shows</p>
            <ul>
                { shows.map((show, index) => (
                    <li key={index}>{show.name}</li>
                )) }
            </ul>
        </div>
    );
};

export default CountryShows;*/

//import fetch from "node-fetch";
import axios from "axios";
import Error from "next/error";

import Thumbnail from "../../components/Thumbnail.jsx";

const CountryShows = ({ shows = [], country, statusCode }) => {
    if (statusCode) {
        return (
            <Error statusCode={statusCode} title="There was a problem here!"/>
        );
    }

    return (
        <div>
            <p>Country Shows</p>
            { shows.map((showItem, index) => {
                const { show } = showItem;

                return (
                    <div key={index}><Thumbnail imageUrl={(show.image && show.image.medium) || undefined} caption={show.name} href="/[country]/[showId]" as={`/${country}/${show.id}`}/></div>
                );
            }) }
        </div>
    );
};

CountryShows.getInitialProps = async context => {
    try {
        const { country } = context.query;
        /*const res = await fetch.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);
        const json = await res.json();*/
        const res = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);
        const json = await res.data;

        return {
            shows: json,
            country
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500
        };
    }

};

export default CountryShows;