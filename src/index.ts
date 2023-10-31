import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "8080";
var newe = "hello";

app.use("/", (req: Request, res: Response) => {
	res.send("Welcome to Trails!");
});

app.listen(port, () => {
	console.log(`trails-server up and running at port: ${port}`);
});
