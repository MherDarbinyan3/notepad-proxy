import { BaseService } from '../../base/BaseService';

export class GistService extends BaseService {
  constructor() {
    super();
    this.gistsBaseURL = `${this.baseURL}/gists`;
  }

  async getGists(): Promise<any> {
    return this.get(`${this.gistsBaseURL}/public`);
  }

  async getGist(id: number): Promise<any> {
    return this.get(`/${this.gistsBaseURL}/${id}`);
  }
}
