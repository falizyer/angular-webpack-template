import {module} from "angular";
import {HelloWorld} from "./hello-world.component";

export default module("tplApp.component.hello-world", [])
    .component(HelloWorld.$name, HelloWorld.$component)
    .name;
