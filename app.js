const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/tico', (req, res) => {
  console.log("Just got a request!")
  res.send('teco')
})

app.get('/meunome', (req, res) => {
  console.log("Just got a request!")
  res.send('Isabela Pires Oliveira')
})

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Pikachu",
    },
    {
      id: 2,
      name: "Butterfree",
    },
    {
      id: 3,
      name: "Pidgeot",
    },
    {
      id: 4,
      name: "Bulbasaur",
    },
    {
      id: 5,
      name: "Charizard",
    },
    {
      id: 6,
      name: "Squirtle",
    },
    {
      id: 7,
      name: "Kingler",
    },
    {
      id: 8,
      name: "Primeape",
    },
    {
      id: 9,
      name: "Muk",
    },
    {
      id: 10,
      name: "Tauros",
    },
  ]);
});

app.get("/serie", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Até o céu",
    },
    {
      id: 2,
      name: "Arow",
    },
    {
      id: 3,
      name: "jovem sheldon",
    }
  ]);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello Express API 
    </section>
  </body>
</html>
`
