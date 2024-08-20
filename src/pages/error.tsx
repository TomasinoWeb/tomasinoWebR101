import { PublicLayoutFrontend } from "../layouts/public/frontend";
import "../components/ErrorPage.module.scss";

const ErrorPage = PublicLayoutFrontend.use(() => {
  return {
    children: (
      <div className="error-page-container">
        <div className="error-graphics">
          4<div className="error-img"></div>4
        </div>
        <div className="error-text">Looks like you are lost. The page you are for is not available.</div>
      </div>
    ),
  };
});

export default ErrorPage;
