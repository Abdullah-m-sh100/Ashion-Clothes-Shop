import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Option-Shop-page.css";

const OptionShopPage = ({  handelSetCategory = () => {}  }) => {
  const [expanded, setExpanded] = useState("all");


  useEffect(() => {
  handelSetCategory(expanded); // This fails because handelSetCategory is undefined
}, [expanded]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="OptionShopPage">
      <div className="categories">
        <h1>Categories</h1>

        <Accordion
          className="Accordion"
          expanded={expanded === "all"}
          onChange={handleChange("all")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">All</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Coats</li>
              <li>Jackets</li>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Jeans</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "women"}
          onChange={handleChange("women")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Women</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Coats</li>
              <li>Jackets</li>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Jeans</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "men"}
          onChange={handleChange("men")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Men</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Coats</li>
              <li>Jackets</li>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Jeans</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "kids"}
          onChange={handleChange("kids")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Kids</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Coats</li>
              <li>Jackets</li>
              <li>Dresses</li>
              <li>Shirts</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "accessories"}
          onChange={handleChange("accessories")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Accessories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Bags</li>
              <li>Watches</li>
              <li>Shoes</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="Accordion"
          expanded={expanded === "cosmetic"}
          onChange={handleChange("cosmetic")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Cosmetic</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Make-up</li>
              <li>Skin Care</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="size">
        <h1>Shop by size</h1>
        <div>
          {["xs", "xs-s", "s", "m", "m-l", "l", "xl", "xxs"].map((s) => (
            <label key={s} htmlFor={s}>
              <input type="checkbox" id={s} /> {s}
            </label>
          ))}
        </div>
      </div>

      <div className="color">
        <h1>Shop by color</h1>
        <div>
          {[
            "blacks",
            "whites",
            "reds",
            "greys",
            "blues",
            "beige",
            "greens",
            "yellows",
          ].map((c) => (
            <label key={c} htmlFor={c}>
              <input type="checkbox" id={c} />{" "}
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionShopPage;
