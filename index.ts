// Escrevendo a função soma com typescript
function soma(a: number, b: number) {
  return a + b;
}

// Como funcionam as interfaces
// types
// interfaces

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: "pequeno" | "medio" | "grande";
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: "cachorro",
  porte: "medio",
  tipo: "terrestre",
};

// Tratando a tag input
const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
});
