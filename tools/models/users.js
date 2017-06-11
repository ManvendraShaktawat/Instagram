import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	firstName:{
		type:String,
		required:true
	},
		lastName:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
		email:{
		type:String,
		required:true,
		unique:true
	},
		gender:{
		type:String,
		required:true
	},
		dob: String,
		mobileNumber:String,
});

let users = mongoose.model("users",userSchema);

export function getUsers(callback) {
	users.find(callback);
}

export function getUserByEmail(email, callback) {
  users.findOne({email},callback);
}

export function addUsers(user,callback){
	users.create(user,callback);
}
