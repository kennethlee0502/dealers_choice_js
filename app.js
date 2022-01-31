const express = require("express");
const app = express();
const PORT = 1122;
const morgan = require("morgan");
const spiderman = require("./spiderman");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Spider-mans</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
  <nav class = 'nav'>
  <a href="/"><img src="/logo.png" id ='logo'/></a>
  </nav>  
  <div id = 'row'>
          <a href="/spiderman"><img src="/spiderman.jpg" class ='spiderman img' /></a>
          <a href="/amazing"><img src="/amazing.jpg" class ='amazing img'/></a>
          <a href="/homecoming"><img src="/homecoming.jpg" class ='coming img'/></a>
    </div>
  </body>
</html>`;

  res.send(html);
});

app.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const post = spiderman.find(id);
  const posts = [post];
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${post.title}</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="body">
      <nav>
        <header><a href="/"><img id ='logo' src="/logo.png"/></a>
       </nav>
        </header>
        ${posts.map(
          (post) => `
          <div class='inside'>
          <div class = 'h1'><h1>${post.title}</h1>
          </div>
            <div class="content">
            <img src="/${post.id}.jpg" class ='insideimg'/>
            <p class= "postcontent">${post.content}
            </p>
            <p class = "boxoffice">
              Box Office: $${post.boxoffice} million
              </p>
              <div>
             ${post.date}
              </div>
            </div>
          </div>`
        )}
      </div>
    </body>
  </html>`;

  res.send(html);
  next();
});

app.listen(PORT, () => {
  console.log(`App Listening in post ${PORT}`);
});
