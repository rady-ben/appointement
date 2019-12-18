const dbUrl = "mongodb://localhost:27017/appointmentManager";
const dbName = "appointmentManager";
const collections = {
  seller: "seller",
  client: "client",
  slot: "slot",
  appointment: "appointment"
};

module.exports = {
  dbUrl,
  dbName,
  collections
};
