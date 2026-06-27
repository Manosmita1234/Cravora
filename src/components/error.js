import { useRouteError } from "react-router";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
            <h4>{err.error.message}</h4>
        </div>
    )
}

export default Error;