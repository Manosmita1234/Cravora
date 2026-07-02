import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Oops!</h1>

      <p>Status: {err?.status}</p>
      <p>{err?.statusText}</p>

      {err?.message && <p>{err.message}</p>}
      {err?.error?.message && <p>{err.error.message}</p>}
    </div>
  );
};

export default Error;