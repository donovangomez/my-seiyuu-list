import React from "react";
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

const Form: React.FC<seiyuuProps> = () => {
  const [searchInput, setSearchInput] = React.useState("Uwu");
  const [seiyuu, setSeiyuu] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    searchSeiyuu(searchInput);
    setSearchInput("");
  };

  const searchSeiyuu = async (query: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/people?q=${query}&order_by=favorites&sort=desc`
      );
      const data = await res.json();
      setSeiyuu(data.data);
      console.log(seiyuu)
    } catch (e) {
      console.log("error!!!", e);
      setError(error);
    }
    console.log(seiyuu);
    setLoading(false);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="try Rikako Aida"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
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
    </form>
  );
};

export default Form;
