import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen text-white">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="bg-cyan-600 font-semibold py-2 px-4 rounded hover:bg-cyan-700">
        Go Home
      </Link>
    </div>
  );
}