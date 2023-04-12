export const prerender = true;

const response = await fetch("https://rickandmortyapi.com/api/character");
const data = await response.json();
console.log(data.results);

function Animals() {
  return (
    <div>
      <h2 className="title">
        <marquee behavior="" direction="">
          Holisss
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
              decoding="async"
              className="poster"
              // loading="lazy"
              src={imageSizes.image}
              alt={imageSizes.name}
              width={200}
              height={200}
            />
            <p className="text-image">{imageSizes.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animals;
