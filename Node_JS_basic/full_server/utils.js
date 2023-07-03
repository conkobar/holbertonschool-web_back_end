/* reads db asynchronously */
const MongoClient = require('mongodb').MongoClient;

async function readDatabase(fp) {
  // read database asynchronously
  let request = await MongoClient.connect(
    'mongodb://localhost:27017/', (err, client) => {
      if (err) throw err;
      const db = client.db();
    }
  )
  return request
}
