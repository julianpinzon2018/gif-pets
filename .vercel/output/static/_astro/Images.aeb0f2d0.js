import{j as a}from"./jsx-runtime.73bdaf71.js";import"./index.45a47ed6.js";const t=await fetch("https://rickandmortyapi.com/api/character"),e=await t.json();console.log(e.results);function l(){return a.jsxs("div",{children:[a.jsx("h2",{className:"title",children:a.jsx("marquee",{behavior:"",direction:"",children:"Holisss"})}),a.jsx("p",{className:"text-animal",children:'No sabemos nada realmente del amor si no queremos a los animales", Fred Wander.'}),a.jsx("div",{className:"containerGift",children:e.results.map(s=>a.jsxs("div",{className:"pelicula",children:[a.jsx("img",{className:"poster",loading:"lazy",src:s.image,alt:s.name,width:200,height:200}),a.jsx("p",{className:"text-image",children:s.name})]},s.id))})]})}export{l as default};