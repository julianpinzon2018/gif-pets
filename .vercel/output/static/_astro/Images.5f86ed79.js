import{j as s}from"./jsx-runtime.73bdaf71.js";import"./index.45a47ed6.js";const t=await fetch("https://rickandmortyapi.com/api/character"),e=await t.json();console.log(e.results);function l(){return s.jsxs("div",{children:[s.jsx("h2",{className:"title",children:s.jsx("marquee",{behavior:"",direction:"",children:"Holisss"})}),s.jsx("p",{className:"text-animal",children:'No sabemos nada realmente del amor si no queremos a los animales", Fred Wander.'}),s.jsx("div",{className:"containerGift",children:e.results.map(a=>s.jsxs("div",{className:"pelicula",children:[s.jsx("img",{className:"poster",src:a.image,alt:a.name,width:200,height:200}),s.jsx("p",{className:"text-image",children:a.name})]},a.id))})]})}export{l as default};