import 'npm:@coreui/coreui@2.0.2';
import { Router, ReactViewResult } from "./src/mvc";
import * as $ from "jquery";
import { logsView } from "./src/diagnostics/logger";
import * as views from "./src/shared/views";

export function run(main: HTMLElement) {
    var router = new Router(
        main,
        new ReactViewResult(views.section("Intro", views.intro()))
            .route("test", () => views.section("Test", views.message("test")))
    );
    $(main).delegate("a",
        "click",
        event => {
            var target = event.target;
            event.preventDefault();
            router.action(target.pathname);
        });
}
