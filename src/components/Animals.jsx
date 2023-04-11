export const prerender = true;

const response = await fetch("https://rickandmortyapi.com/api/character");
const data = await response.json();
console.log(data.results);

function Animals() {
  return (
    <div>
      <h2 className="title">
        <marquee behavior="" direction="">
          Animals chidos
        </marquee>
      </h2>
      <p className="text-animal">
        No sabemos nada realmente del amor si no queremos a los animales", Fred
        Wander.
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
