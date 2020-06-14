const JobsModel = require("../models/jobs");

const handlers = {
  addNewJob: async job => {    
    JobsModel.create(
      {
        title: job.title,
        location: job.location,
        status: job.status,
        description: job.description
      },
      function(err, job) {
        return err ? false : true;
      }
    );
  },
  getJobsList: async data => {
    let result = "";
    const page = data.page ? parseInt(data.page) : 1;
    const limit = data.limit ? parseInt(data.limit) : 10;
    const offset = data.page ? (page - 1) * limit : 0;

    const count = await JobsModel.count();
    result = await JobsModel.find({})
      .sort({ date: -1 })
      .skip(offset)
      .limit(limit);
    return { count, result };
  },
  updateJob: async data => {
    var query = { _id: data.id };

    await JobsModel.findOneAndUpdate(
      query,
      {
        title: data.title,
        location: data.location,
        status: data.status,
        description: data.description
      },
      function(err, doc) {
        return err ? false : true;
      }
    );
  },
  deleteJob: async data => {    
    var query = { _id: data.id };

    await JobsModel.findOneAndUpdate(
      query,
      {
        deleted: true     
      },
      function(err, doc) {
        return err ? false : true;
      }
    );
  }
};

module.exports = handlers;
