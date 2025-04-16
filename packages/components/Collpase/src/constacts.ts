import { InjectionKey } from "vue";
import type { CollpaseContext } from "./collpase";
export const COLLPASE_CTX_KEY: InjectionKey<CollpaseContext> =
  Symbol("collpaseContext");
