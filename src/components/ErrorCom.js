import { useRouteError } from "react-router-dom";
const ErrorCom = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <h1>Something went wrong</h1>
      {error.status} : {error.statusText}
    </div>
  );
};
export default ErrorCom;
