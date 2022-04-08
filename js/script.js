console.log("Ciao Mondo");

// CREO CICLO PER I BOX

const container = document.querySelector(".container");

const max = 1000

for(let i=0; i <= max; i++){


  const box = document.createElement("div");
  box.className = "box";
  box.append = (i);

  container.append(box)
}

