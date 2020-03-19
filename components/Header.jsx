import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const selectedCountryInitialValue = router.query && router.query.country ? router.query.country : "us";
    const [selectedCountry, setSelectedCountry] = useState(selectedCountryInitialValue);
    const handleChange = event => {
        setSelectedCountry(event.target.value);
        router.push("/[country]", `/${event.target.value}`);
    };

    return (
        <div>
            <select value={selectedCountry} onChange={handleChange}>
                <option value="us">USA</option>
                <option value="tr">Turkey</option>
            </select>
        </div>
    );
};

export default Header;
