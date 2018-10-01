import * as views from "../shared/views";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { tryFetch } from "../shared/data";
import { awaitView } from "../shared/views";

export function index({ router }) {
    console.log(router);
    return views.section("Files",
        awaitView(tryFetch("/drive/file/test").then(fileView))
    );
}

function fileView(files) {
    return (
        <div className="list-group">
            {
                files.map(f => (
                    <Draggable>
                        <div key={f.resourceId} className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{f.name}</h5>
                                <a href="#" className="btn cui-cloud-download"></a>
                            </div>
                            <small className="pull-right">{f.url}</small>
                        </div>
                    </Draggable>
                ))
            }
        </div>
    );
}

class Draggable extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        if (dom) {
            if (dom instanceof Element) {
                dom.addEventListener("touchstart", touchStart);
            }
        }

        function touchStart(evt: TouchEvent) {
            let startX = evt.touches[0].clientX;
            let startY = evt.touches[0].clientY;
            let move = touchMove(dom, startX, startY);
            let end = touchEnd(dom, move);

            document.addEventListener("touchend", end);
            document.addEventListener("touchmove", move);
        }

        function touchMove(target, startX: number, startY: number) {
            return evt => {
                let { clientX, clientY } = evt.touches[0];
                const deltaY = (clientY - startY);

                if (Math.abs(deltaY) > 30) {
                    return;
                }

                const deltaX = (clientX - startX);

                if (deltaX > 0) {
                    requestAnimationFrame(() => {
                        target.style.transform = `translateX(${deltaX}px)`;
                    });
                }
            }
        }

        function touchEnd(dom, touchMove) {
            return function f(evt) {
                document.removeEventListener("touchend", f);
                document.removeEventListener("touchmove", touchMove);

                // const bcr = dom.getBoundingClientRect();

                console.log(dom.style.transform);
                const match = /(\-?(\d+\.)?\d+)px/.exec(dom.style.transform);
                if (match && match[1]) {
                    animateRevert(parseInt(match[1]), 0.1);
                }
                function animateRevert(translateX, threshold) {
                    translateX *= .8;
                    if (Math.abs(translateX) > threshold) {
                        requestAnimationFrame(() => animateRevert(translateX, threshold));
                        dom.style.transform = `translateX(${translateX}px)` ;
                    } else {
                        // dom.style.transform = "translateX(0px)";
                    }
                }
            }
        }
    }

    render() {
        return this.props.children;
    }
}

