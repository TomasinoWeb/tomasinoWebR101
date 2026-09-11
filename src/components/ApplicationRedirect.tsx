import React, { useEffect, useState } from "react";
import Loading from "./Loading";

export const applicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfrw5Z8r2ERyq9TR8aDlH9_Uy-A4HqMahIFsSk_GHFLSJ6gwQ/viewform?usp=preview";

interface ApplicationRedirectProps {
  className?: string;
  children: React.ReactNode;
}

export const ApplicationRedirect: React.FC<ApplicationRedirectProps> = ({ className, children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    const timeoutId = window.setTimeout(() => {
      window.location.assign(applicationUrl);
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [isLoading]);

  return (
    <>
      <a
        href={applicationUrl}
        className={className}
        onClick={(event) => {
          event.preventDefault();
          setIsLoading(true);
        }}
      >
        {children}
      </a>
      {isLoading && (
        <div className="loading-container">
          <Loading variant="application" />
        </div>
      )}
    </>
  );
};