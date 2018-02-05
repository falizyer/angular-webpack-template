import {element} from "angular";

describe("HelloWorld component unit test: ", function () {

    let scope, controller, tplElement;

    beforeEach(angular.mock.module("tplApp.component.hello-world"));
    beforeEach(inject(function ($rootScope, $controller, $compile) {
        scope = $rootScope.$new();
        controller = $controller;
        tplElement = element("<tpl-hello-world></<tpl-hello-world>");
        tplElement = $compile(tplElement)(scope);
    }));

    it("Should contain Hello World", function () {
        expect(tplElement.find("div").text()).toBe("Hello World");
    });
});
