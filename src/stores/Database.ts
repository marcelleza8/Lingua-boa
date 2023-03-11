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
    find: (state) => (uuid: string) => {
      if (state.definicoesDatabase)
        return state.definicoesDatabase.find((i) => i.id === uuid);
    },
  },
  actions: {
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
    },
    update(definicao: Definicao) {
      const index = this.definicoes.findIndex(
        (t: Definicao) => t.id === definicao.id,
      );
      if (index !== -1) {
        this.definicoes[index] = definicao;
        localStorage.setItem(
          localStorageKey,
          JSON.stringify(this.definicoesDatabase),
        );
      }
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
    setDatabase(data: string | null) {
      if (data) {
        this.definicoesDatabase = JSON.parse(data);
        localStorage.setItem(
          localStorageKey,
          JSON.stringify(this.definicoesDatabase),
        );
      }
    },
  },
});

interface DatabaseState {
  definicoesDatabase: Definicao[] | null;
}
