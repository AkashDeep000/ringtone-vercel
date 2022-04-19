import Header from "app/components/Header"
import ItemCardGrid from "app/components/ItemCardGrid";
import Head from "app/components/Head";
import {
  json
} from "@remix-run/vercel";
import {
  useLoaderData
} from "@remix-run/react";
export const loader = async () => {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(res)
  return res;
};



export function headers( {
  loaderHeaders, parentHeaders
}) {
  return {
    "server": "akash",
    "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
  };
}

export default function SearchIndex() {
  const data = useLoaderData();
  console.log(data)
  return (
    <>
    <Header />
    <Head props={data} />
    <ItemCardGrid /> < />
  );
}