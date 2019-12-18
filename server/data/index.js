const MongoClient = require("mongodb").MongoClient;
const constants = require("../constant");

const { dbName, dbUrl, collections } = constants;

function connectDB() {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(dbUrl, function(err, db) {
      if (err) reject(err);
      console.log("connect to db succufully");
      resolve(db);
    });
  });
}

async function initDB() {
  const db = await connectDB();
  Object.keys(collections).forEach(async key => {
    await createCollection({ db, collection: collections[key] });
  });
}

function createCollection({ db, collection }) {
  return new Promise(function(resolve, reject) {
    var dbo = db.db(dbName);
    dbo.createCollection(collection, function(err, res) {
      if (err) reject(err);
      console.log(`collection ${collection} created`);
      resolve(res);
    });
  });
}

function insertItem({ db, collectionName, item }) {
  return new Promise(function(resolve, reject) {
    var dbo = db.db(dbName);
    dbo.collection(collectionName).insertOne(item, function(err, res) {
      if (err) reject(err);
      console.log(`1 item insertedin ${collectionName}`);
      resolve(res);
    });
  });
}

function findItems({ db, collectionName, item }) {
  return new Promise(function(resolve, reject) {
    var dbo = db.db(dbName);
    dbo
      .collection(collectionName)
      .find(item)
      .toArray(function(err, result) {
        if (err) reject(err);
        if (result.length) {
          console.log("result");
          console.log(result);
          resolve(true);
        } else {
          resolve(false);
        }
      });
  });
}

async function getItems({ db, collectionName, query = {} }) {
  return new Promise(function(resolve, reject) {
    var dbo = db.db(dbName);
    dbo
      .collection(collectionName)
      .find(query)
      .toArray(function(err, result) {
        if (err) reject(err);
        resolve(result);
      });
  });
}

function updateItem({ db, collectionName, query, newVal }) {
  return new Promise(function(resolve, reject) {
    console.log(query);
    console.log(newVal);
    var dbo = db.db(dbName);
    var newvalue = { $set: newVal };
    dbo
      .collection(collectionName)
      .updateOne(query, newvalue, function(err, res) {
        if (err) reject(err);
        console.log("1 document updated");
        resolve(res);
      });
  });
}

module.exports = {
  initDB: initDB,
  connectDB: connectDB,
  findItems: findItems,
  insertItem: insertItem,
  getItems: getItems,
  updateItem: updateItem
};
