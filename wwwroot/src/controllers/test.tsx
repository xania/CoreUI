import * as views from "../shared/views";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Rx from "rxjs";
import * as Ro from "rxjs/operators";
import { tryFetch } from "../shared/data";
import { awaitView } from "../shared/views";

export function index({ router }) {
    console.log(router);
    return views.section("Files",
        awaitView(tryFetch("/drive/file/test").then(filesView))
    );
}

function filesView(files): JSX.Element {
    return (
        <div className="list-group">
            {files.map(fileView)}
        </div>
    )
}

function fileView(file): JSX.Element {
    let drag$ = new Rx.Subject<number>();

    function dragChange(size: number) {
        if (size < 0)
            return false;

        drag$.next(size);
        return true;
    }

    return awaitView(drag$.pipe(
        Ro.startWith(0),
        Ro.map(deltaX => (
            <div className="swipeout-control">
                <div className="swipeout-control-menu" style={{ width: deltaX }} >
                    <img src="/images/trash.png" />
                </div>
                <Draggable change={dragChange} >
                    <div key={file.resourceId} className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{file.name}</h5>
                            <a href="#" className="btn cui-cloud-download"></a>
                        </div>
                        <small className="pull-right">{file.url}</small>
                    </div>
                </Draggable>
            </div>
        ))
    ));
}


type DraggableProps = {
    change: (size: number) => boolean;
}
type DraggableState = {}

class Draggable extends React.Component<DraggableProps, DraggableState> {
    componentDidMount() {
        const component = this;
        const dom = ReactDOM.findDOMNode(component);
        if (dom) {
            if (dom instanceof Element) {
                dom.addEventListener("touchstart", touchStart);
            }
        }

        function touchStart(evt: TouchEvent) {
            let startX = evt.touches[0].clientX;
            let startY = evt.touches[0].clientY;
            let move = touchMove(dom, startX, startY);
            let end = touchEnd(component.props, dom, move);

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

                if (component.props.change(deltaX) !== false && deltaX !== 0) {
                    requestAnimationFrame(() => {
                        target.style.transform = `translateX(${deltaX}px)`;
                    });
                } else {
                    requestAnimationFrame(() => {
                        target.style.transform = `translateX(0px)`;
                    });
                }
            }
        }

        function touchEnd(props: DraggableProps, dom, touchMoveCb) {
            return function touchEndCb(evt) {
                document.removeEventListener("touchend", touchEndCb);
                document.removeEventListener("touchmove", touchMoveCb);

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
                        props.change(translateX);
                        dom.style.transform = `translateX(${translateX}px)`;
                    } else {
                        props.change(0);
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

