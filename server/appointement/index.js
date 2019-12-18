const data = require("../data");

async function insertItem({ type, item }) {
  try {
    const db = await data.connectDB();
    await data.insertItem({ db, collectionName: type, item });
    console.log("slot insered successfully");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function getItems({ collectionName, query }) {
  try {
    const db = await data.connectDB();
    const items = await data.getItems({ db, collectionName, query });
    db.close();
    return items;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function updateItem({ collectionName, query, newVal }) {
  try {
    const db = await data.connectDB();
    await data.updateItem({ db, collectionName, query, newVal });
    db.close();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  insertItem: insertItem,
  getItems: getItems,
  updateItem: updateItem
};
