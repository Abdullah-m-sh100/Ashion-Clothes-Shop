import "./Loading.css";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading">
      <Bars
        height="80"
        width="80"
        color="#ca1515"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
