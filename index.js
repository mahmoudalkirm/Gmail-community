import { names, last_names } from "./names.js";
const MatSize = 199;
function createGmails() {
  let rand1 = Math.floor(names.length * Math.random());
  let rand2 = Math.floor(names.length * Math.random());
  return {
    temp:
      names[rand1] +
      last_names[rand2] +
      Math.floor(Math.random() * 10) +
      Math.floor(Math.random() * 10) +
      Math.floor(Math.random() * 10) +
      Math.floor(Math.random() * 10) +
      "@gmail.com",
    fname: names[rand1],
    lname: last_names[rand2],
  };
}
function getPackage() {
  let Emails = [];
  for (let i = 0; i < 10; i++) {
    let p = createGmails();
    Emails.push({
      email: p.temp.toLowerCase(),
      password: `${p.temp[0] + p.temp[1]}1234${
        p.temp[0] + p.temp[1]
      }`.toLowerCase(),
      fname: p.fname,
      lname: p.lname,
    });
  }

  return Emails;
}
function deploy(Emails) {
  let text = `<div>`;
  for (let i = 0; i < Emails.length; i++) {
    text += `
    <p>${Emails[i].fname}</p>
    <p>${Emails[i].lname}</p>
    <p>${Emails[i].email}</p>
    <p>${Emails[i].password}</p>\n\n
    <p>########</p>
    `;
  }
  text += "</div>\n";
  return text;
}
let root = document.getElementById("root");
let P = getPackage();
root.innerHTML = deploy(P);

let area = document.querySelector("#area");
document.querySelector("#collect").addEventListener("click", function () {
  let pattern = /[a-zA-Z0-9]{6,}@gmail.com/;
  let arr = area.value.split("\n");
  let emails = arr.filter((e) => pattern.test(e));
  let content = "";
  for (let i = 0; i < emails.length; i++) {
    content += emails[i] + "\n";
  }
  area.value = content;
});

// import { Email } from "./node_modules/email/index.js";
// const verifier = new EmailVerifier("YOUR_API_KEY");

// function checkEmailExistence(email) {
//   verifier.verify(email, function (err, info) {
//     if (err) {
//       console.error("Error verifying email:", err);
//     } else {
//       console.log("Email verification result:", info);
//       if (info.smtpCheck === true) {
//         console.log("Email exists and can receive messages.");
//       } else {
//         console.log("Email does not exist or cannot receive messages.");
//       }
//     }
//   });
// }

// // Example usage:
// const e = "test@example.com";
// checkEmailExistence(e);
