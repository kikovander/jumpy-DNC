const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const msgInput = "Campo Obrigatório";
  const msgForm = "Campos Obrigatórios não registrados.";
  const msgValidaEmail = "Campo Obrigatório ou E-mail inválido";

  let errorMessageName = document.querySelector(".msgName");
  let errorMessageEmail = document.querySelector(".msgValidaEmail");
  let errorMessagePhone = document.querySelector(".msgPhone");
  let errorMessageCPF = document.querySelector(".msgCPF");
  let errorMessagePassword = document.querySelector(".msgPassword");
  let errorMessageGeneral = document.querySelector(".msgGeneral");

  if (document.forms[0].name.value === "") {
    errorMessageName.innerHTML = msgInput;
    errorMessageGeneral.innerHTML = msgForm;
  } else {
    errorMessageName.innerHTML = "";
  }

  if (
    document.forms[0].email.value === "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
  ) {
    errorMessageEmail.innerHTML = msgValidaEmail;
    errorMessageGeneral.innerHTML = msgForm;
  } else {
    errorMessageEmail.innerHTML = "";
  }

  if (document.forms[0].phone.value === "") {
    errorMessagePhone.innerHTML = msgInput;
    errorMessageGeneral.innerHTML = msgForm;
  } else {
    errorMessagePhone.innerHTML = "";
  }

  if (document.forms[0].cpf.value === "") {
    errorMessageCPF.innerHTML = msgInput;
    errorMessageGeneral.innerHTML = msgForm;
  } else {
    errorMessageCPF.innerHTML = "";
  }

  if (document.forms[0].password.value === "") {
    errorMessagePassword.innerHTML = msgInput;
    errorMessageGeneral.innerHTML = msgForm;
  } else {
    errorMessagePassword.innerHTML = "";
  }

  if (
    document.forms[0].name.value &&
    document.forms[0].email.value &&
    document.forms[0].phone.value &&
    document.forms[0].cpf.value &&
    document.forms[0].password.value !== ""
  ) {
    errorMessageGeneral.innerHTML = "Sucesso!";
    errorMessageGeneral.style.color = "#0F7B0F";
  } else {
    errorMessageGeneral.innerHTML = msgForm;
    errorMessageGeneral.style.color = "#e73550";
  }
});

function criaMascara(mascaraInput) {
  const maximoInput = document.getElementById(`${mascaraInput}`).maxLength;
  let valorInput = document.getElementById(`${mascaraInput}`).value;
  let valorSemPonto = document
    .getElementById(`${mascaraInput}`)
    .value.replace(/([^0-9])+/g, "");
  const mascaras = {
    CPF: valorInput
      .replace(/[^\d]/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
    phone: valorInput
      .replace(/[^\d]/g, "")
      .replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
    // CEP: valorInput.replace(/[^\d]/g, "").replace(/(\d{5})(\d{3})/, "$1-$2"),
    // CNJ: valorInput
    //   .replace(/[^\d]/g, "")
    //   .replace(
    //     /(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/,
    //     "$1-$2.$3.$4.$5.$6"
    //   ),
  };

  valorInput.length === maximoInput
    ? (document.getElementById(`${mascaraInput}`).value =
        mascaras[mascaraInput])
    : (document.getElementById(`${mascaraInput}`).value = valorSemPonto);
}
