import PrivateRouter from "./Private/Router";
import PublicRouter from "./Public/Router";

const BaseRouter = () => {
  return (
    <>
      <PublicRouter />
      <PrivateRouter />
    </>
  );
};

export default BaseRouter;
