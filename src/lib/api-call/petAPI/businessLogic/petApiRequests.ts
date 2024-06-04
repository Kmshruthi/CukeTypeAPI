import petAPI from "../petApiClient"
import { Assertions } from "./assertions"

export default class petAPIRequests extends petAPI {

  constructor() {
    super()
  }

  public getPetsInventory = async () => {
    return new Promise((resolve, reject) => {
      const baseURL: any = process.env.PETSBASEURL
      this.get(baseURL, "inventory")
        .then((response: any) => {
          if (response.statusCode === 200) {
            resolve(response);
          } else {
            reject(`API is unhealthy - ${response.body[0].errorCode}`);
          }
        })
        .catch((err) => reject(err));
    })
  }

}