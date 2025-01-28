import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-9xl font-bold"><b>404</b></h1>
            <h1 className="text-3xl font-bold"><b>Wadohh..!</b></h1>
            <p className="my-5 text-2xl">Sorry, Akun6 Gaono..</p>
            <p className="font-bold text-2xl">{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;