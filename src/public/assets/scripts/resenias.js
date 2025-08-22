let form = document.getElementById("resenia_form");
let btn = document.getElementById("btn_resenia");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let dataForm = new FormData(form);

  const title = dataForm.get("title");
  const description = dataForm.get("description");

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
  }).then((res) => {
    console.log(res);
    btn.disabled = false;

    btn.innerHTML = "Enviar";
    if (res.ok) {
      swal.fire({
        icon: "success",
        title: "Reseña enviada correctamente",
      })
    } else {
      swal.fire({
        icon: "error",
        title: "Error al enviar la reseña. Intertar luego"
      })
    }
  });
});
