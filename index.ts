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
  executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: "Elefante",
  tipo: "terrestre",
  executarRugido: (alturaEmDecibeis) => `${alturaEmDecibeis}dB`,
};

// const felino: IFelino = {
//   nome: "Leão",
//   tipo: "terrestre",
//   visaoNoturna: true,
// };
