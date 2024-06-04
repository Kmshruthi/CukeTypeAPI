import { BeforeAll } from "@cucumber/cucumber";
import { getEnv } from "../env/env";


BeforeAll(async function () {
  getEnv();
})
