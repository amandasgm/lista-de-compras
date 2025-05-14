const form = document.querySelector("#add-item");
const inputTask = document.querySelector("#add");

const list = document.querySelector("#items");
const item = document.querySelector(".item");

const remove = document.querySelector("#delete");

const trash = document.querySelector("button")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    if (inputTask.value === "") {
      alert("Erro: O campo não pode estar vazio!");

    } else {
      // Cria item div e adiciona a class
      const divItem = document.createElement("div");
      divItem.classList.add("item");
      
      // Cria o container-text e adiciona a class
      const containerItem = document.createElement("div");
      containerItem.classList.add("container-text");

      // Adiciona p container-text dentro da div item
      divItem.appendChild(containerItem);

      // Cria o input, define tipo e adiciona ele ao container-text
      const input = document.createElement("input");
      input.type = "checkbox";
      containerItem.appendChild(input);

      // Cria elemento label, define um conteudo em texto que sera o valor escrito no input e adiciona a label no container-text
      const taskName = document.createElement("label");
      taskName.textContent = inputTask.value;
      containerItem.appendChild(taskName);
      
      const trash = document.createElement("button"); // Criando o botão de exclusão (trash)

      const trashImg = document.createElement("img"); // Criando a imagem dentro do botão

      trashImg.src = "assets/icons/trash.svg"; // Caminho para a imagem

      trash.appendChild(trashImg); // Adicionando a imagem dentro do botão

      divItem.appendChild(trash); // Adicionando o botão de exclusão ao container

      list.appendChild(divItem); // Adicionando a div item completa no form items
      inputTask.value = ""; // Limpa o campo de entrada

      trash.addEventListener("click", () => {
        divItem.remove()
      })
    }  

  } catch (err) {
    alert("Algo está errado: " + err.message);
  }
});










