import { ZIcon } from "./icon";
import { ZButton } from "./button";
import { ZCollpase, ZCollpaseItem } from "./Collpase";
import { makeInstaller } from "@z/utils";
const components = [ZIcon, ZButton, ZCollpase, ZCollpaseItem];
export { ZIcon, ZButton, ZCollpase, ZCollpaseItem };

export const install = makeInstaller(components);
