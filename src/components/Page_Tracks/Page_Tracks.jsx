import "./Page_Tracks.css";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

const PageTracks = ({ namePage }) => {
  return (
    <div className="PageTracks">
      <div className="container">
        <FaHome />
        <Link to="/">Home</Link>
        <IoIosArrowForward />
        <p>{namePage}</p>
      </div>
    </div>
  );
};

export default PageTracks;
