const data = require("../data");

async function signIn({ type, item }) {
  try {
    const db = await data.connectDB();
    const finde = await data.findItems({ db, collectionName: type, item });
    if (finde) {
      db.close();
      return true;
    }
    db.close();
    return false;
  } catch (error) {
    console.log(error);
  }
}

async function signUp({ type, item }) {
  try {
    const db = await data.connectDB();
    const finde = await data.findItems({ db, collectionName: type, item });
    if (!finde) {
      await data.insertItem({ db, collectionName: type, item });
      db.close();
      return true;
    }
    db.close();
    return false;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  signIn: signIn,
  signUp: signUp
};
