import "./index.style.less";

import {bootstrap, element, module} from "angular";
import componentModule from "./component/index.module";

export default module("tplApp", [
    componentModule
]).name;

element(document)
    .ready(() => {
        bootstrap(document, ["tplApp"]);
    });
