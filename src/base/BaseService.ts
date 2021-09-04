const { RESTDataSource } = require('apollo-datasource-rest');

export class BaseService extends RESTDataSource {
  baseURL = process.env.API_URL;

  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
    request.headers.set('Accept', 'application/json');
  }
}
