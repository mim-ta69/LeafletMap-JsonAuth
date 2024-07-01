document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const usersDiv = document.getElementById("users");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.accessToken) {
            alert("ثبت‌نام موفقیت‌آمیز بود!");
            window.location.href = "login.html";
            // return false;
          } else {
            alert("خطا در ثبت‌نام");
          }
        });
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.accessToken) {
            console.log({ accessToken: data.accessToken });
            alert("ورود موفقیت‌آمیز بود!");
            window.location.href = "./LeafletMap/index02.html";
          } else {
            alert("نام کاربری یا رمز عبور اشتباه است");
          }
        });
    });
  }

  // ============ For test ============ //
  // if (usersDiv) {
  //   fetch("http://localhost:3000/users")
  //     .then((res) => res.json())
  //     .then((users) => {
  //       for (let i = 0; i < users.length; i++) {
  //         const currentUser = users[i];
  //         const userBox = document.createElement("div");
  //         const infoTag = document.createElement("p");
  //         infoTag.innerText =
  //           "ID: " + currentUser.id + ", " + "Email: " + currentUser.email;
  //         userBox.appendChild(infoTag);
  //         usersDiv.appendChild(userBox);
  //       }
  //     });
  // }
});
