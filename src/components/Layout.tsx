import { ReactNode } from "react";

export function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

function Header() {
  return <header> </header>;
}

function Footer() {
  return <footer> </footer>;
}
