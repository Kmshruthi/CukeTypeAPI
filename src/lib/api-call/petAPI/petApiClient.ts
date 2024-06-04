
let request = require('supertest');
export default class petsAPI{

  public get = async (baseURL:string, subURL:string) => {
    return request(baseURL)
    .get(subURL)    
  }

}