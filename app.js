import getElement from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const url = "https://randomuser.me/api/";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btn = getElement(".btn");

const btns = [...document.querySelectorAll(".icon")];



const showUser = async() => {
   const person = await getUser()
   displayUser(person)
}

window.addEventListener("DOMContentLoaded", showUser)
btn.addEventListener("click", showUser)

