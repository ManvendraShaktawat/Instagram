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

export function getSearchUsers(name,callback) {
	users.find({"firstName":{$regex: name, $options: "i"}}, {password:0}, callback);
}

export function getUserByEmail(email,password, callback) {
  users.findOne({email,password}, {password:0} ,callback);
}
export function getUserById(id, callback) {
  users.findOne({_id:id}, {password:0}, callback);
}

export function addUsers(user,callback){
	users.create(user, callback);
	/*let usr = new users(user);
	usr.save(user,callback);*/
}

