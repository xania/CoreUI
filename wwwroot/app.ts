import 'npm:@coreui/coreui@2.0.2';
import { Router } from "./src/mvc";
import * as $ from "jquery";
import { logsView } from "./src/diagnostics/logger";

export function run(main: HTMLElement) {
    var router = new Router(
        main,
        logsView()
    );
    $(main).delegate("a",
        "click",
        event => {
            var target = event.target;
            event.preventDefault();
            router.action(target.pathname);
        });
}
