"use strict";

const Api = require("claudia-api-builder");
const api = new Api();

api.get("/", () => {
  return "Hello World!";
});

module.exports = api;
