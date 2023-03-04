interface seiyuuProps {
    seiyuu: {
      mal_id: number,
      name: string,
      website_url: string,
      url: string,
      images: {
        jpg: {
          image_url: string
        }
      }
    }[]
  }
  

const FeaturedSeiyuu: React.FC<seiyuuProps> = ({seiyuu}) => {
    return(
        <>
          <h2>This is the seiyuu container</h2>
      
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(
      "https://api.jikan.moe/v4/people?order_by=favorites&sort=desc&limit=15"
    );
    const data = await res.json();
    const seiyuu = data.data;
  
    return { props: {seiyuu} };
  }

export default FeaturedSeiyuu;