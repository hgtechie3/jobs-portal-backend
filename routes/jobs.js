const handlers = require("../handlers/jobs");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Devbir's Job Portal React Demo API server");
  });
  /**
   * Add a Job
   */
  app.post("/addJob", (req, res) => {
    handlers
      .addNewJob(req.body)
      .then(jobCreatedRes => {
        res.status(200).json({
          success: true
        });
      })
      .catch(jobCreatedErr => {
        res.status(400).json({
          success: false,
          error: JSON.stringify(jobCreatedErr)
        });
      });
  });

  /**
   * Get a list of all jobs
   */
  app.post("/getJobsList", (req, res) => {
    handlers
      .getJobsList(req.body)
      .then(jobList => {
        res.status(200).json({
          success: true,
          data: jobList
        });
      })
      .catch(jobListErr => {
        res.status(400).json({
          success: false,
          error: JSON.stringify(jobListErr)
        });
      });
  });

  /**
   * Update a job
   */
  app.put("/updateJob", (req, res) => {
    handlers
      .updateJob(req.body)
      .then(jobList => {
        res.status(200).json({
          success: true
        });
      })
      .catch(jobListErr => {
        res.status(400).json({
          success: false,
          error: jobListErr
        });
      });
  });

  /**
   * Soft delete a job
   */
  app.delete("/deleteJob", (req, res) => {
    handlers
      .deleteJob(req.body)
      .then(jobList => {
        res.status(200).json({
          success: true
        });
      })
      .catch(jobListErr => {
        res.status(400).json({
          success: false,
          error: jobListErr
        });
      });
  });
};
