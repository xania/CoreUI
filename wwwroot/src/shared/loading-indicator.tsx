import * as React from "react";

interface ILoadingIndicatorProps {
    loading: boolean;
    message?: string;
}

export class LoadingIndicator extends React.Component<ILoadingIndicatorProps> {

    render() {

        if (this.props.loading) {
            return (
                <React.Fragment>
                    <div className="loading-container">
                        <div className="loading-container-body">
                            <img src="/images/infinity.svg"/><br/>
                            <span>{this.props.message}</span>
                        </div>
                    </div>
                    {this.props.children}
                </React.Fragment>);
        }

        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}