import "./app.style.less";

import {bootstrap, element, module} from "angular";

module("template", [])
    .component("tplApp", {

    });

element(document)
    .ready(() => {
        bootstrap(document, ["template"]);
    });
