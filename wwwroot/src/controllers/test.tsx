import * as views from "../shared/views";
import * as React from "react";
import { tryFetch } from "../shared/data";
import { awaitView } from "../shared/views";

export function index() {
    return views.section("Files",
        awaitView(tryFetch("/drive/file/test").then(fileView))
    );
}

function fileView(files) {
    return (
        <div className="list-group">
            {
                files.map(f => (
                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{f.name}</h5>
                            <button className="btn cui-cloud-download"></button>
                        </div>
                        <small className="pull-right">{f.url}</small>
                    </div>
                ))
            }
        </div>
    );
}