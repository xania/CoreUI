import * as React from "react";

export interface IDataColumn<T> {
    caption: string;
    field: keyof T;
    visible?: boolean;
}

interface IDataGridProps<T> {
    data: Array<T>;
    columns: Array<IDataColumn<T>>;
}

class DataGrid<T> extends React.Component<IDataGridProps<T>> {

    render() {
        return (
            <table className="table table-hover">
                <thead className="thead-light">
                    {this.getHeader()}
                </thead>
                <tbody>
                    {this.renderRows(this.props.data)}
                </tbody>
            </table>);
    }

    renderRows(data: Array<T>) {
        const arr = data as Array<T>;
        if (arr.map) {
            if (arr.length > 0) {
                return arr.map(model => {
                    var modelKey = DataGrid.getKey(model);
                    return (
                        <tr key={modelKey} >
                            {this.props.columns
                                .filter(column => column.visible !== false)
                                .map(column => {
                                    return <td key={`${modelKey}_${column.field}`}>{model[column.field]}</td>;
                                })
                            }
                        </tr>
                    );
                });
            }
        }
        return <tr><td>geen resultaten</td></tr>;
    }

    getHeader() {
        return (
            <tr>
                {this.props.columns
                    .filter(column => column.visible !== false)
                    .map(column => {
                        return <th key={`hdr${column.field}`} scope="col">{column.caption}</th>;
                    })
                }
            </tr>
        );
    }

    static getKey(model) {
        return model['id'] || new Date().getTime();
    }

}

export default DataGrid;

//export function dataGridBuilder<T>(...gridColumns: Array<IDataColumn>) {
//    return (data: Array<T>) => (<DataGrid columns={gridColumns} data={data} />);
//}

export function gridColumns<T>(...gridColumns: Array<IDataColumn<T>>) {
    return gridColumns;
}