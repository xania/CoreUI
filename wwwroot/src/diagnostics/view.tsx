import * as React from "react"
import DataGrid, { IDataColumn } from "../shared/datagrid"

export function create(data: any[]) {
    var columns: IDataColumn<any>[] = [
        { caption: "Date", field: "date" },
        { caption: "Message", field: "message" },
        { caption: "Location", field: "url" }
    ];
    return <DataGrid columns={columns} data={data} />;
}


export interface IClientError {
    message: string;
    lineNumber: number;
    colNumber: number;
    url: string;
    date: Date;
}

