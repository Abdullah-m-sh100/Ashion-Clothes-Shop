import "./Instagram_section.css";
import { inst_images } from "../../assets/info";
import InstagramSectionCard from "../Instagram_section_card/Instagram_section_card";

const InstagramSection = () => {
  return (
    <div className="InstagramSection">
      <div className="all_card">
        {inst_images.map((inst) => (
          <InstagramSectionCard key={inst.id} image={inst.image} />
        ))}
      </div>
    </div>
  );
};

export default InstagramSection;
