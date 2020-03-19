import Link from "next/link";

import "./Thumbnail.scss";

const Thumbnail = ({ imageUrl = "https://via.placeholder.com/300x400?text=?", caption, href = "", as = "" }) => {
    return (
        <div className="thumbnail">
            <Link href={href} as={as}>
                <a>
                    <p><img className="thumbnail-image" src={imageUrl}/></p>
                    <h3 className="thumbnail-caption">{caption}</h3>
                </a>
            </Link>
        </div>
    );
};

export default Thumbnail;