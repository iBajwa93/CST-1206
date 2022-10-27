const express = require("express");
const app = express();
const PORT = 5000;

//CRUD
//C - Create
//R - Read
//U - Update
//D - Delete

let articles = [
  {
    id: 1,
    title: "Latest Vendetta",
    author: "Ian",
    timeRequired: "2 minutes",
    description: "This is an article for the latest revenge strategies",
  },

  {
    id: 2,
    title: "Super Happy Fun Time",
    author: "Bajwa",
    timeRequired: "1 minutes",
    description: "Twas' a gay old time",
  },
];

//We need the MiddleWare to extract the incoming data as JSON
app.use(express.json());

app.get("/", (req, res) => {
  //redirecting to new routes
  res.redirect("/api/");
});
app.get("/api/v1", (req, res) => {
  res.send("ENDPOINTS");
});

//Get endpoint for all posts
app.get("/api/v1/posts", (req, res) => {
  return res.status(200).json({
    message: "Successfully fetched the articles",
    data: articles,
  });
});

//Get endpoint for posts with a given ID
app.get("/api/v1/posts/:postId", (req, res) => {
  // const id = Number(req.params.postId);
  // const id = +req.params.postId;

  const id = req.params.postId;

  //This fetches the article with the given id
  const findArticle = articles.find((article) =>
    article.id == id ? true : false
  );

  if (findArticle) {
    return res.status(200).json({
      message: "Successfully fetched the article",
      data: findArticle,
    });
  } else {
    return res.status(404).json({
      message: "Article doesn't exist!",
    });
  }
});

//POST endpoint for posts with given data
app.post("/api/v1/posts", (req, res) => {
  const data = req.body;
  //error handling if any of the fields are missing
  if (!data.title || !data.description || !data.author || !data.timeRequired) {
    return res.status(500).json({
      message: "One of the parameters is missing",
    });
  }
  data.id = articles.length + 1;
  articles.push(data);

  return res.status(201).json({
    message: "Successfully created the article",
    data: articles,
  });
});

//Updating any of the data

app.put("/api/v1/posts/:id", (req, res) => {
  const id = req.params.id;
  const postToUpdate = req.body;
  // const findArticle = articles.find((article) =>
  //   article.id == id ? true : false
  // );

  // if (findArticle) {
  //   return res.status(200).json({
  //     message: "Successfully fetched the article",
  //     data: findArticle,
  //   });
  // } else {
  //   return res.status(404).json({
  //     message: "Article doesn't exist!",
  //     data: findArticle,
  //   });
  // }
  if (
    !postToUpdate.title ||
    !postToUpdate.description ||
    !postToUpdate.author ||
    !postToUpdate.timeRequired
  ) {
    return res.status(500).json({
      message: "One of the parameters is missing",
    });
  }
  articles = articles.map((post) => {
    if (post.id == id) {
      post = postToUpdate;
    }
    return post;
  });

  return res.status(200).json({
    message: "Successfully updated the article",
    data: articles,
  });
});

//Deleting a particular Post

app.delete("/api/v1/posts/:id", (req, res) => {
  const id = req.params.id;

  const index = articles.findIndex((article) => {
    if (article.id == id) {
      return true;
    }
  });

  if (index != -1) {
    articles.splice(index, 1);
    return res.status(200).json({
      message: "Successfully deleted the article",
      data: articles,
    });
  } else {
    return res.status(404).json({
      message: "Element you are trying to delete does not exist!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
