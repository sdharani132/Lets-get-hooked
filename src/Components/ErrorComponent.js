import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
    return (
        <div className="error-info">
            <h1> Status: {err.status} </h1>
            <h1> {err.data} </h1>
        </div>
    )
}

export default ErrorComponent;