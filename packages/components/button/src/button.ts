import { size, type } from "../../share";
export interface ButtonProps {
  size?: size;
  type?: type;
  disabled?: boolean;
}

export interface ButtonEmits {
  (e: "click", event: MouseEvent): void;
}
