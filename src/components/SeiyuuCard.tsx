import { FaExternalLinkAlt } from "react-icons/fa";

interface seiyuuProps {
  name: string,
  website_url: string,
  url: string,
  image_url: string
}

const SeiyuuCard: React.FC<seiyuuProps> = ({name, website_url, url, image_url }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image_url} />
      <a href={website_url}>
        <FaExternalLinkAlt />
      </a>
      <a href={url}> 
        <img src="/mal.svg" className="w-[32px] h-[32px]"/>
      </a>
    </>
  );
};

export default SeiyuuCard;
