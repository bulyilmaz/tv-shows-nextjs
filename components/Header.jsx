import { useState } from "react";
import Router, { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const selectedCountryInitialValue = router.query && router.query.country ? router.query.country : "";
    const [selectedCountry, setSelectedCountry] = useState(selectedCountryInitialValue);
    const handleChange = event => {
        setSelectedCountry(event.target.value);
        //router.push("/[country]", `/${event.target.value}`);
        Router.push(`/${event.target.value}`);
    };

    return (
        <div>
            <select value={selectedCountry} onChange={handleChange}>
                <option value="">Country</option>
                <option value="us">USA</option>
                <option value="tr">Turkey</option>
            </select>
        </div>
    );
};

export default Header;