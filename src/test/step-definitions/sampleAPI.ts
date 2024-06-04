import { Given, Then, When } from "@cucumber/cucumber"
import PetsAPIRequest from "../../lib/api-call/petAPI/businessLogic/petApiRequests"
import { Assertions } from "../../lib/api-call/petAPI/businessLogic/assertions"
let petsAPIRequest: PetsAPIRequest;

Given('the API endpoint is healthy', function () {

});

When('I send a GET request to get the inventory', async function () {
  petsAPIRequest = new PetsAPIRequest()
  this.inventoryResponse = await petsAPIRequest.getPetsInventory()
});

When('the response status should be {int}', async function (status_code) {
  Assertions.assertStatusCode(this.inventoryResponse, status_code)
});

Then('assert the response', function () {
  Assertions.assertInventoryResponse(this.inventoryResponse)
});
