import { RESTDataSource } from 'apollo-datasource-rest'

export class LOL extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api-lol.herokuapp.com/api/'
  }
}