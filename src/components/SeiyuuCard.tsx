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
    </>
  );
};

export default SeiyuuCard;
