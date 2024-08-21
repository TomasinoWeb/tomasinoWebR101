import { PublicLayoutFrontend } from "../layouts/public/frontend";
import AppProcessHeader from "../components/applicationProcessComponents/AppProcessHeader";

const ApplicationProcessPage = PublicLayoutFrontend.use(() => {
  return {
    children: (
      <div>
        <AppProcessHeader />
      </div>
    ),
  };
});

export default ApplicationProcessPage;
