export const prerender = true;

const response = await fetch(
  "https://api.giphy.com/v1/gifs/search?q=cat&api_key=9IpIWesiBJ7I7u3x8iDd9Zhm1llzHxT9&limit=20"
);
const data = await response.json();
// console.log(data.data);

function Animals() {
  return (
    <div>
      <h2 className="title">
        <marquee behavior="" direction="">
          Cats chidos
        </marquee>
      </h2>
      <p className="text-animal">
        El gato posee belleza sin vanidad, fuerza sin insolencia, coraje sin
        ferocidad, todas las virtudes del hombre sin sus vicios.
      </p>
      <div className="containerGift">
        {data.data.map((imageSizes) => (
          <div className="pelicula" key={imageSizes.id}>
            <img
              className="poster"
              src={imageSizes.images.original.url}
              alt={imageSizes.title}
            />
            <p>{imageSizes.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animals;
