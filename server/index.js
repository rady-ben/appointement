const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data");
const auth = require("./auth");
const constants = require("./constant");
const appointement = require("./appointement");

const app = express();
app.use(bodyParser.json());
app.use(cors());

data.initDB();

app.post("/auth/seller/signIn", async function(request, response) {
  const body = request.body;
  const result = await auth.signIn({
    type: constants.collections.seller,
    item: body
  });
  response.send(result);
});

app.post("/auth/seller/signUp", async function(request, response) {
  const body = request.body;
  const result = await auth.signUp({
    type: constants.collections.seller,
    item: body
  });
  response.send(result);
});

app.post("/auth/client/signIn", async function(request, response) {
  const body = request.body;
  const result = await auth.signIn({
    type: constants.collections.client,
    item: body
  });
  response.send(result);
});

app.post("/auth/client/signUp", async function(request, response) {
  const body = request.body;
  const result = await auth.signUp({
    type: constants.collections.client,
    item: body
  });
  response.send(result);
});

app.put("/appointement/appointement/insert", async function(request, response) {
  const body = request.body;
  const result = await appointement.insertItem({
    type: constants.collections.appointment,
    item: body
  });
  response.send(result);
});

app.put("/appointement/slot/insert", async function(request, response) {
  const body = request.body;
  const result = await appointement.insertItem({
    type: constants.collections.slot,
    item: body
  });
  response.send(result);
});

app.post("/appointement/appointement/getItems", async function(
  request,
  response
) {
  const body = request.body;
  const result = await appointement.getItems({
    collectionName: constants.collections.appointment,
    query: body
  });
  console.log(result);
  response.send(result);
});

app.get("/appointement/appointement/getSellersList", async function(
  request,
  response
) {
  const result = await appointement.getItems({
    collectionName: constants.collections.seller,
    query: {}
  });
  console.log(result);
  response.send(result);
});

app.post("/appointement/slot/getItems", async function(request, response) {
  const body = request.body;
  const result = await appointement.getItems({
    collectionName: constants.collections.slot,
    query: body
  });
  console.log(result);
  response.send(result);
});

app.put("/appointement/appointement/updateItem", async function(
  request,
  response
) {
  const body = request.body;

  const result = await appointement.updateItem({
    collectionName: constants.collections.appointment,
    query: body.query,
    newVal: body.newVal
  });
  console.log(result);
  response.send(result);
});

app.listen(3001, function() {
  console.log("Listening on port 3001!");
});
