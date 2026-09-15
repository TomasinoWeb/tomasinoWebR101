import { useEffect } from "react";
import Loading from "../components/Loading";
import { applicationUrl } from "../components/ApplicationRedirect";

export default function ApplyPage() {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.location.assign(applicationUrl);
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="loading-container">
      <Loading variant="application" />
    </div>
  );
}