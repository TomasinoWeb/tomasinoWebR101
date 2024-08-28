import { useEffect } from "react";
import Loading from "../components/Loading";
import { useRouter } from "next/router";

export default function LoadingUI() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/home"), 5000);
  }, []);

  return <Loading />;
}
