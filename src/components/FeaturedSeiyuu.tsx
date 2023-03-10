import SeiyuuCard from "./SeiyuuCard";

interface seiyuuProps {
  seiyuu: {
    mal_id: number;
    name: string;
    website_url: string;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
  }[];
}

const FeaturedSeiyuu: React.FC<seiyuuProps> = ({ seiyuu }) => {
  return (
    <section>
      <div className="flex flex-wrap gap-2 justify-center">
        {seiyuu.map((seiyuu) => (
          <div key={seiyuu.mal_id}>
            <SeiyuuCard
              name={seiyuu.name}
              website_url={seiyuu.website_url}
              url={seiyuu.url}
              image_url={seiyuu.images.jpg.image_url}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSeiyuu;
