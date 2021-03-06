'use strict';

const Controller = require('egg').Controller;

class GwController extends Controller {
  async index() {
    const data = this.ctx.request.body;
    const jobName = data.enviroment.jenkins.JOB_NAME;
    const buildNumber = data.enviroment.jenkins.BUILD_NUMBER;
    await this.ctx.model.JobName.findOrCreate({
      where: {
        jobName,
      },
      defaults: {
        jobName,
      },
    });
    const createResult = await this.ctx.model.Build.create({
      buildNumber,
      jobName,
      data,
    });
    await this.ctx.service.dingtalk.push(data);
    this.ctx.body = {
      success: true,
      message: '',
      data: createResult,
    };
  }
}

module.exports = GwController;
