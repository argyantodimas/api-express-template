import express from "express";
import "express-router-group";
import mainController from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.group("/test", (mainRouter) => {
  mainRouter.get("/", mainController.test);
});

export default mainRouter;
