let form = document.getElementById("resenia_form");
let btn = document.getElementById("btn_resenia");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let dataForm = new FormData(form);

  const title = dataForm.get("title");
  const description = dataForm.get("description");

  title.replace("<", "&lt;").replace(">", "&gt;");
  description.replace("<", "&lt;").replace(">", "&gt;");

  const reqBody = {
    title,
    description,
  };

  btn.disabled = true;
  btn.innerHTML = "Enviando...";

  fetch(`https://crosscom.up.railway.app/api/resenia`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(reqBody),
  })
    .then((res) => {
      console.log(res);
      btn.disabled = false;

      btn.innerHTML = "Enviar";
      if (res.ok) {
        form.querySelector("[name=title]").value = "";
        form.querySelector("[name=description]").value = "";

        swal.fire({
          icon: "success",
          title: "Reseña enviada correctamente",
        });
      } else {
        swal.fire({
          icon: "error",
          title: "Error al enviar la reseña. Intertar luego",
        });
      }
    })
    .catch(() => {
      btn.innerHTML = "Enviar";
      btn.disabled = false;

      swal.fire({
        icon: "error",
        title: "Error al enviar la reseña. Intertar luego",
      });
    });
});
