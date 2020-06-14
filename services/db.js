const mongoose = require('mongoose');

const connections = {
  connect: async () => {
    try {
      await mongoose.connect(
        "mongodb://devbir:devbirreact1@ds139841.mlab.com:39841/reactdemo",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
    } catch (connectErr) {
      console.timeLog("connection error");
    } finally {
      console.log("db connected");
    }
  }
};

module.exports = connections;
