let student = {
    name: "Giorgio",
    surname: "Pasqualino",
    age: 24,
    peso: 78.5
}


for (var key in student) {
    console.log(key + ": " + student[key]);
  }





  let students = [
    {
      name: "Mario",
      surname: "Rossi",
      età: 18,
      peso: 70
    },
    {
      name: "Luca",
      surname: "Verdi",
      età: 20,
      peso: 65
    },
    {
      name: "Giulia",
      surname: "Bianchi",
      età: 19,
      peso: 60
    }
  ];
  
  // Ciclo per stampare nome e cognome di ogni studente
  for (let i = 0; i < students.length; i++) {
    console.log("Nome: " + students[i].name + ", Cognome: " + students[i].surname);
  } 

  l