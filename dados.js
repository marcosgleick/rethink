const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luíza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
]
    function LerDado() {
    var entrada = "Gabriel Gomes";
    pessoas.filter(p => {
        if (p.name == "Gabriel Gomes") {
            console.log(p);
        }
    })
}

 LerDado

function RetNomes() {
     const arr = [];
     pessoas.forEach(p => {/         let [nome, sobrenome] = p.name.split(" ");/        
     arr.push(nome)
     })
     console.log(arr);
 }

 RetNomes();
function IsertID() {
     const arr = [];
     i = 0;
    for (var pessoa of pessoas) {
         arr.push({id: i + 1, name: pessoa.name, age: pessoa.age});
         i++;
     }
     console.log(arr);
 }

 IsertID();

 function HabIdade() {
     pessoas.forEach(p => {
         if (p.age >= 18) {
             console.log(p);
         }
     })
 }

 HabIdade();

 function HabIdade() {
     var soma = 0;
     pessoas.forEach(p => {
         soma += p.age;
     })
     console.log(`Soma das idades: ${soma / pessoas.length}`);
 }

 HabIdade();