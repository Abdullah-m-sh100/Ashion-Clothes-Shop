import Navbar from "../../components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="Blog">
      <Helmet>
        <title>Ashion - Blog</title>
      </Helmet>
      <Navbar />
    </div>
  );
};

export default Blog;
