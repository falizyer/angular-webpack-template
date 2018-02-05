import "./hello-world.style.less";

export class HelloWorld {

    static get $name() {
        return "tplHelloWorld";
    }

    static get $component() {
        return {
            template: require("./hello-world.tpl.html"),
            controller: HelloWorld,
            bindings: {}
        }
    }

    static get $inject() {
        return ["$element"];
    }

    constructor($element) {
        console.log($element);
    }
}
