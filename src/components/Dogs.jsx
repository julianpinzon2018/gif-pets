export const prerender = true;

const response = await fetch("https://dog.ceo/api/breed/hound/images");
let data = await response.json();
data = data.message;
const d = data.slice(0, 20);
console.log(d);

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
        {d.map((imageSizes) => (
          <div className="pelicula" key={imageSizes}>
            <img className="poster" src={imageSizes} alt="" height={48} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animals;
