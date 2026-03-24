import { NavLink } from "react-router-dom";
import "./About_section.css";

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <div className="container">
        <div className="text-1">
          <h2>About Ashion</h2>
          <p>
            Welcome to Ashion, your one-stop destination for fashion that blends
            style, quality, and affordability. Founded with a passion for
            bringing the latest trends to your wardrobe, we offer a curated
            selection of clothing, accessories, and cosmetics for women, men,
            and kids.
          </p>
          <p>
            Our mission is to empower everyone to express their unique style
            through high-quality products that don't break the bank. At Ashion,
            we believe fashion is more than just clothing—it's a way to
            celebrate individuality and confidence.
          </p>
        </div>
        <div className="text-2 row">
          <div className="col-1">
            <h3>Our Values</h3>
            <ul>
              <li>
                <span>Quality:</span> We source materials from trusted suppliers
                to ensure durability and comfort.
              </li>
              <li>
                <span>Sustainability:</span> Committed to eco-friendly
                practices, we strive to reduce our environmental footprint.
              </li>
              <li>
                <span> Inclusivity:</span>
                Our collections cater to diverse tastes, sizes, and styles.
              </li>
              <li>
                <span>Customer Satisfaction:</span>
                Your happiness is our priority, with seamless shopping and
                support.
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Our Story</h3>
            <p>
              Since our inception in 2020, Ashion has grown from a small
              boutique to a global online retailer. Inspired by the vibrant
              fashion scenes of major cities, our team of designers and curators
              work tirelessly to bring you collections that are both timeless
              and on-trend.
            </p>
            <p>
              Join us on this journey to redefine fashion, one outfit at a time.
            </p>
          </div>
        </div>
        <div className="text-3">
          <span>Why Shop with Us?</span>
          <p>
            At Ashion, we offer free shipping on orders over $50, hassle-free
            returns, and 24/7 customer support. Explore our collections today
            and discover why thousands of customers trust us for their fashion
            needs.
          </p>
          <NavLink className="nav-link" to="/shop">
            <button>Shop Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
