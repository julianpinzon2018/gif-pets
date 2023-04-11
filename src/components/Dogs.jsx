const response = await fetch(
  "https://api.giphy.com/v1/gifs/search?q=dog&api_key=9IpIWesiBJ7I7u3x8iDd9Zhm1llzHxT9&limit=20"
);
const data = await response.json();
// console.log(data.data);

function Animals() {
  return (
    <div>
      <h2 className="title">
        <marquee behavior="" direction="">
          Dogs chidos
        </marquee>
      </h2>
      <p className="text-animal">
        Un perro puede expresar más con su cola en minutos que lo que un dueño
        puede expresar con su lengua en horas.
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
