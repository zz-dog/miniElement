import Collpase from "./src/collpase/collpase.vue";
import collpaseItem from "./src/collpaseItem/collpaseItem.vue";
import { withInstall } from "@z/utils";
const ZCollpase = withInstall(Collpase);
const ZCollpaseItem = withInstall(collpaseItem);
export { ZCollpase, ZCollpaseItem };
