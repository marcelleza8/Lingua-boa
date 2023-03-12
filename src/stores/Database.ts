import { defineStore } from "pinia";
import { Definicao } from "../types/Definicao";

function uuidv4(a: any = "", b: any = "") {
  for (
    b = a = "";
    a++ < 36;
    b +=
      (a * 51) & 52
        ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16)
        : "-"
  );
  return b;
}

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
      if (state.definicoesDatabase) {
        let found = state.definicoesDatabase.find((i) => i.id === uuid);
        if (!found) {
          found = {
            palavra: "",
            antonimos: [],
            sinonimos: [],
            significados: [],
            etiquetas: [],
            frases: [],
          };
        }
        return found;
      }
    },
  },
  actions: {
    create(data: Definicao) {
      data.id = uuidv4();
      this.definicoesDatabase?.push(data);
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(this.definicoesDatabase),
      );
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
