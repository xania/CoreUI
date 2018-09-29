import '@coreui/coreui';
import { BrowserRouter, ReactViewResult, ControllerAction } from "./src/mvc/index";
import * as views from "./src/shared/views";
import iziToast from "./src/diagnostics/toast"

export function run(main: HTMLElement) {
    const toast = {
        error(message: string) {
            iziToast.error({ message });
            console.error(message);
        }
    }

    let root = new ReactViewResult(views.section("Intro", views.intro()))
        .route("test", new ControllerAction("/src/controllers/test", "index")); // () => 

    let router = new BrowserRouter();
    router.start(root)
        .subscribe((routeResult) => {
            routeResult.render({ container: main, router, toast });
        });

    main.addEventListener("click", function (event) {
        if (event.target && event.target['pathname']) {
            event.preventDefault();
            router.action(event.target['pathname']);
        }
    });
}
