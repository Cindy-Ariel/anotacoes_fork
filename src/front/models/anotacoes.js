class anotacoes {
  constructor(titulo, notas) {
    this.titulo = titulo;
    this.notas = notas;

    if (typeof titulo !== "string" || typeof notas !== "string") {
      throw new Error("Criação de notas - Dados inválidos");
    }
  }
}
