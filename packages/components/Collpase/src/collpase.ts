import type { Ref } from "vue";

export type CollpaseItemName = string | number;
export interface CollpaseProps {
  modelValue: CollpaseItemName[];
  accordion?: boolean;
}

export interface CollpaseItemProps {
  name: CollpaseItemName;
  title?: string;
  disabled?: boolean;
}

export interface CollpaseEmits {
  (e: "update:modelValue", value: CollpaseItemName[]): void;
  (e: "change", value: CollpaseItemName[]): void;
}

export interface CollpaseContext {
  activeNames: Ref<CollpaseItemName[]>;
  handleItemClick: (name: CollpaseItemName) => void;
}
