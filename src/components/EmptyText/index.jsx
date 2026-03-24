import { Link } from "react-router-dom";
import "./style.css";

export default function EmptyText({ pageName }) {
  return (
    <div className="EmptyText">
      <div>
        <h1>{pageName} is empty</h1>
        <Link to="/shop">
          <p>pleas add products</p>
        </Link>
      </div>
    </div>
  );
}
