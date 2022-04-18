import express from "express";
import logger from "morgan";

const appServer = express();
appServer.use(express.json());
appServer.use(logger("dev"));

export { appServer };
