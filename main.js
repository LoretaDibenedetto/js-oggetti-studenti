let student = {
    name: "Giorgio",
    surname: "Pasqualino",
    age: 24,
    peso: 78.5
};


for (var key in student) {
    console.log(key + ": " + student[key]);
  }
