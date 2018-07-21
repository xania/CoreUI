import * as React from "react";



interface ISearchInputProps {
    allowEmpty?: boolean;
    isLoading: boolean;
    output: { next(value?: string): any };
}

export function SearchInput(props: ISearchInputProps) {

    const handleOnChange = (value: string) => {
        if (!!value || props.allowEmpty) {
            props.output.next(value);
        }
    }

    return (
        <input key="searchInput" autoFocus={true} type="text" onChange={e => handleOnChange(e.target.value)} className={`form-control ${props.isLoading && "isLoading"}`} placeholder="Zoeken..." />
    );
}

interface IInputButtonProps {
    prefix?: string;
    value?: string;
    maxLength?: number;
}

interface IInputButtonState {
    isInEditMode: boolean;
    value?: string;
    userInput: string;
}

export class InputButton extends React.Component<IInputButtonProps, IInputButtonState> {

    constructor(props: IInputButtonProps) {
        super(props);

        this.state = { isInEditMode: false, value: this.props.value, userInput: "" };
    }

    beginEditMode = () => {
        this.setState({ isInEditMode: true });
    }

    commitValueAndExitEditMode = () => {
        this.setState({ value: this.state.userInput });
        this.exitEditMode();
    }

    exitEditMode = () => {
        this.setState({ isInEditMode: false, userInput: "" });
    }

    render() {
        const attributes = {};
        if (this.props.maxLength !== null) {
            attributes["maxLength"] = this.props.maxLength;
        }

        if (this.state.isInEditMode) {
            return (
                <div className="input-group" style={{ width: "200px", float: "left" }} >
                    <div className="input-group-prepend">
                        <button className="btn btn-pill btn-outline-info disabled">{`${this.props.prefix || ""}`
                        }</button>
                    </div>
                    <input type="text" autoFocus={true} className="form-control" {...attributes} onChange={e =>
                        this.handleTextChange(e.target.value)} onBlur={this.handleLostFocus} placeholder={
                            this.state.value} value={this.state.userInput} />
                    <div className="input-group-append">
                        <button onClick={this.commitValueAndExitEditMode} className="btn btn-pill btn-outline-info">
                            <span className="cui-check" />
                        </button>
                    </div>
                </div>
            );
        }
        return (
            <button onClick={this.beginEditMode} className="btn btn-pill btn-outline-info float-left">{`${this.getPrefix()}${
                this.state.value || ""}`}</button>
        );
    }

    handleTextChange = (value: string) => {
        this.setState({ userInput: value });
    }

    getPrefix = (): string => {
        if (typeof this.props.prefix === "undefined")
            return "";

        return `${this.props.prefix} `;
    }

    handleLostFocus = () => {
        setTimeout(() => {
            if (this.state.isInEditMode) {
                this.exitEditMode();
            }
        }, 200);
    }

}