import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as users from "./models/users";
import jwt from "jsonwebtoken";
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
mongoose.connect("mongodb://localhost/mingle");

app.use(bodyParser.json());

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use("/assets",express.static(path.join(__dirname, "../public/assets")));

app.use(require("webpack-hot-middleware")(compiler));

function authenticate(req, res, next) {
	const token =req.headers.auth;
	if(token) {
		jwt.verify(token, "somesecretkeyforjsonwebtoken", (err, decoded) => {
			if(err) {
				res.status(401).json({error:"Authentication failed"});
			} else {
				users.getUserById(decoded._doc._id, (err,user) => {
					if(!user) {
						res.status(404).json({error:"invalid user"});
					}
					next();
				});
			}
		});
	} else {
		res.status(403).json({
			error:"No token passed"
		});
	}
}

app.get("/api/users",function(req,res) {
	users.getUsers(function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	});
});

app.get("/api/users/:name", authenticate, function(req,res) {
	let name = req.params.name;
	users.getSearchUsers(name, function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	});
});

app.get("/api/profile/:id", authenticate, function(req,res) {
	let id = req.params.id;
	users.getUserById(id, function(err, user) {
		if(err) {
			throw err;
		}
		res.json(user);
	});
});

app.post("/api/auth",function(req,res) {
	const { email, password } = req.body;
	users.getUserByEmail(email, password, function(err, user) {
		if(err) {
			throw err;
		} else if (user) {
			let token = jwt.sign(user, "somesecretkeyforjsonwebtoken");
			res.json({token});
		} else {
			res.status(500).json({"error":"Username or password is incorrect"});
		}
	});
});

app.post("/api/users",function(req,res) {
	let user = req.body;

	users.addUsers(user,function(err, allUsers) {
		if(err) {
			res.status(404).json({"error":"Username already exist"});
		} else {
			users.getUserByEmail(user.email ,user.password, function (err, user) {
				console.log(user);
				if(user) {
					let token = jwt.sign(user, "somesecretkeyforjsonwebtoken");
					res.json({token});
				}
			});
		}
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
