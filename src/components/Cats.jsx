export const prerender = true;

const response = await fetch("https://rickandmortyapi.com/api/character");
const data = await response.json();
console.log(data.results);

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
        {data.results.map((imageSizes) => (
          <div className="pelicula" key={imageSizes.id}>
            <img
              className="poster"
              src={imageSizes.image}
              alt={imageSizes.name}
              height={48}
            />
            <p>{imageSizes.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animals;
