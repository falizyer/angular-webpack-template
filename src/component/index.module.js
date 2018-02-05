import {module} from "angular";
import helloWorldModule from "./hello-world/index.module";

export default module("tplApp.component", [
    helloWorldModule
]).name;