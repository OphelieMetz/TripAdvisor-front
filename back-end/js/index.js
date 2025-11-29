// console.log("Coucou");

// console.log(document);

document.addEventListener("DOMContentLoaded", () => {
  //   const mainTitle = document.querySelector("h1");
  //   console.log(mainTitle.classList);

  // const button = document.querySelector("#button-change");

  // const paragraph = document.querySelector(".text");

  // button.addEventListener("click", () => {
  //   // console.log("J'ai cliqué");
  //   paragraph.textContent = "Banane";
  // });

  // document.querySelector("#button-hide").addEventListener("click", () => {
  //   paragraph.classList.add("hidden");
  // });

  // document.querySelector("#button-toggle").addEventListener("click", () => {
  //   paragraph.classList.toggle("hidden");
  // });

  document.querySelector(".form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    const response = await axios.post("http://localhost:3000/send-email", {
      firstName,
      lastName,
      email,
      message,
    });

    console.log(response.data);
  });
});
