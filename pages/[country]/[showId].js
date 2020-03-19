import axios from "axios";
import parse from "html-react-parser";
import Error from "next/error";

const ShowDetails = ({ show = {}, statusCode }) => {
    if (statusCode) {
        return (
            <Error statusCode={statusCode} title="There was a problem here!"/>
        );
    }

    return (
        <div>
            <p>Country Shows</p>
            <div>{show.name}</div>
            <div>{parse(show.summary)}</div>
            <img src={show.image.original}/>
        </div>
    );
};

ShowDetails.getInitialProps = async context => {
    try {
        const { showId } = context.query;
        const res = await axios.get(`https://api.tvmaze.com/shows/${showId}?embed=cast`);
        const json = await res.data;

        return {
            show: json
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500
        };
    }
};

export default ShowDetails;