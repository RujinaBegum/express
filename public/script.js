// document.getElementById("btn1").addEventListener("click", async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/data"); // Change port if needed
//     const data = await res.json();
//     document.getElementById("result").innerText =
//       "API Data:\n" + JSON.stringify(data, null, 2);
//   } catch (err) {
//     console.error(err);
//     document.getElementById("result").innerText = "Failed to fetch /api/data";
//   }
// });

// document.getElementById("btn2").addEventListener("click", async () => {
//   try {
//     const res = await fetch("http://localhost:3000/getusers"); // Change port if needed
//     const users = await res.json();
//     document.getElementById("result").innerText =
//       "Users:\n" + JSON.stringify(users, null, 2);
//   } catch (err) {
//     console.error(err);
//     document.getElementById("result").innerText = "Failed to fetch /getusers";
//   }
// });
