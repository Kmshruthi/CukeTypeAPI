import { expect } from 'chai';
export class Assertions {

  public static assertInventoryResponse(response:any){
   
    expect(response.body).to.haveOwnProperty("sold")
    expect(response.body).to.haveOwnProperty("PRACavailable")
    expect(response.body).to.haveOwnProperty("in stock")
  }

  public static assertStatusCode(response:any, status_code:string){
    expect(response.statusCode).to.equal(200);
  }
}