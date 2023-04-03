//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Guilherme de Moura Santos -2110362
//DATA: 02/03/2023


// Função responsável por validar o formulário de cadastro de paciente
function validadeSingUp(e) {
    e.preventDefault(); // Evita que o formulário seja submetido e a página seja recarregada

    // Coleta os valores dos campos do formulário
    const form = e.target;
    const name = form.name.value.trim(); // nome do paciente
    const email = form.email.value.trim(); // e-mail do paciente
    const dateOfBirth = form.dateOfBirth.value.trim(); // data de nascimento do paciente
    const cpf = form.cpf.value.trim(); // CPF do paciente
    const address = form.address.value.trim(); // endereço do paciente
    const phone = form.phone.value.trim(); // telefone do paciente

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!name || !email || !dateOfBirth || !cpf || !address || !phone) {
        alert('Preencha todos os campos obrigatórios.'); // Exibe uma mensagem de alerta caso algum campo esteja vazio
        return; // Interrompe a execução da função
    }

    // Recupera a lista de pacientes cadastrados do LocalStorage ou cria uma nova lista vazia
    const patients = JSON.parse(localStorage.getItem('patients')) || [];

    // Adiciona um novo paciente à lista de pacientes
    patients.push({ name, email, dateOfBirth, cpf, address, phone });

    // Atualiza a lista de pacientes no LocalStorage
    localStorage.setItem('patients', JSON.stringify(patients));

    form.reset(); // Limpa o formulário
}

// Seleciona o formulário de cadastro de paciente
const form = document.getElementById('patientForm');

// Adiciona um listener ao evento de submit do formulário
form.addEventListener('submit', validadeSingUp);
