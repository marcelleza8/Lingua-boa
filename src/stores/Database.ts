import { defineStore } from "pinia";
import { Definicao } from "../types/Definicao";

const localStorageKey = "definicoes";

const initialState: DatabaseState = {
  definicoesDatabase: JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"),
};

export const useDefinicoesStore = defineStore({
  id: "database",
  state: (): DatabaseState => initialState,
  getters: {
    definicoes: ({ definicoesDatabase }) =>
      definicoesDatabase ? definicoesDatabase : [],
    totalItems: ({ definicoesDatabase }) =>
      definicoesDatabase ? definicoesDatabase.length : 0,
  },
  actions: {
    setDatabase(data: string | null) {
      if (data) {
        this.definicoesDatabase = JSON.parse(data);
        localStorage.setItem(
          localStorageKey,
          JSON.stringify(this.definicoesDatabase),
        );
      }
    },
    create(data: Definicao) {
      const definicao: Definicao = {
        id: crypto.randomUUID(),
        palavra: data.palavra,
        antonimos: data.antonimos,
        sinonimos: data.sinonimos,
        significados: data.significados,
        etiquetas: data.etiquetas,
        frases: data.frases,
      };
      // this.definicoes.push(definicao);
      // localStorage.setItem(localStorageKey, JSON.stringify(this.definicoes));
    },
    update(definicao: Definicao) {
      // const index = this.definicoes.findIndex(
      //   (t: Definicao) => t.id === definicao.id,
      // );
      // if (index !== -1) {
      //   this.definicoes.splice(index, 1, definicao);
      //   localStorage.setItem(localStorageKey, JSON.stringify(this.definicoes));
      // }
    },
    delete(definicao: Definicao) {
      if (this.definicoesDatabase) {
        const index = this.definicoesDatabase.findIndex(
          (t: Definicao) => t.id === definicao.id,
        );

        if (index !== -1) {
          this.definicoesDatabase.splice(index, 1);

          localStorage.setItem(
            localStorageKey,
            JSON.stringify(this.definicoesDatabase),
          );
        }
      }
    },
  },
});

interface DatabaseState {
  definicoesDatabase: string | null;
}
