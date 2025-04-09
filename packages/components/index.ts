import { ZIcon } from "./icon";
import { ZButton } from "./button";
import { makeInstaller } from "@z/utils";
const components = [ZIcon, ZButton];

export const install = makeInstaller(components);
export { ZIcon, ZButton };
