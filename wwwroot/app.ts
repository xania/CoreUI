import '@coreui/coreui';
import { Router, ReactViewResult } from "./src/mvc";
// import * as $ from "jquery";
import * as views from "./src/shared/views";
import iziToast from "./src/diagnostics/toast"

export function run(main: HTMLElement) {
    const toast = {
        error(message: string) {
            iziToast.error({ message });
            console.error(message);
        }
    }

    var router = new Router(
        main,
        new ReactViewResult(views.section("Intro", views.intro()))
            .route("test", () => views.section("Test", views.message("test")))
        ,
        toast
    );

    //$(main).delegate("a",
    //    "click",
    //    event => {
    //        var target = event.target;
    //        event.preventDefault();
    //        router.action(target.pathname);
    //    });
}
