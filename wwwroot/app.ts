import '@coreui/coreui';
import { Router, ReactViewResult } from "./src/mvc";
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
            .route("test", () => views.section("Test", views.message("test 2")))
        ,
        toast
    );

    router.start();

    main.addEventListener("click", function (event) {
        if (event.target && event.target['pathname']) {
            event.preventDefault();
            router.action(event.target['pathname']);
        }
    });
}
