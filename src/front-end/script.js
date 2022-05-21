const form = document.getElementById('submit').addEventListener('click', (e) => {
  const [name, sobrenome, email, cpf, phone, phone2] = document.querySelectorAll('.inputUser');

  e.preventDefault();
  console.log(name.value, sobrenome.value, email.value, cpf.value, phone.value, phone2.value);

  console.log(axios);

  axios.post('http://localhost:3000/contacts', {
    name: name.value,
    sobrenome: sobrenome.value,
    email: email.value,
    cpf: cpf.value,
    phone: phone.value,
    phone2: phone2.value,
  })
    .then(() => {
      alert('contato registrado');
    })
    .catch(() => {
      alert('todas as lacunas devem ser preenchidas');
    });
});
