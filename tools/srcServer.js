import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as users from "./models/users";
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
mongoose.connect("mongodb://10.207.49.41/mingle");

app.use(bodyParser.json());

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use("/assets",express.static(path.join(__dirname, "../public/assets")));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/api/users",function(req,res) {
	users.getUsers(function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	});
});

app.get("/api/users/:email",function(req,res) {
	let email = req.params.email;
	users.getUserByEmail(email, function(err, user) {
		if(err) {
			throw err;
		}
		res.json(user);
	});
});

app.post("/api/users",function(req,res) {
	let user = req.body;

	users.addUsers(user,function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	});
});

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open(`http://localhost:${port}`);
	}
});
