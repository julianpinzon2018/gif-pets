import{j as s}from"./jsx-runtime.73bdaf71.js";import"./index.45a47ed6.js";const i=await fetch("https://api.giphy.com/v1/gifs/search?q=memes&api_key=9IpIWesiBJ7I7u3x8iDd9Zhm1llzHxT9&limit=20"),e=await i.json();console.log(e.data);function c(){return s.jsxs("div",{children:[s.jsx("h2",{className:"title",children:s.jsx("marquee",{behavior:"",direction:"",children:"Memes chidos"})}),s.jsx("p",{className:"text-animal",children:"Nunca me siento tan solo como cuando necesito ponerme crema solar en la espalda."}),s.jsx("div",{className:"containerGift",children:e.data.map(a=>s.jsxs("div",{className:"pelicula",children:[s.jsx("img",{className:"poster",src:a.images.original.url,alt:a.title}),s.jsx("p",{children:a.title})]},a.id))})]})}export{c as default};
