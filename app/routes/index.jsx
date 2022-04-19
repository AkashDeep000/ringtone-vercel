import Header from "app/components/Header"
import ItemCardGrid from "app/components/ItemCardGrid";
import Head from "app/components/Head";

import {
  json
} from "utils/json.server.js";
import {
  useLoaderData
} from "@remix-run/react";


export async function loader() {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  return await res.json();
  //console.log(await res.json())
  /*
  return new Response(await JSON.stringify(await res.json()), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
*/
}


export function headers( {
  loaderHeaders,
  parentHeaders
}) {
  return {
    "server": "akash",
    "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
  };
}

export default function Index() {
  const data = useLoaderData();
  console.log(data)
  return (
    <>
    <Header />
    <Head props={data} />
    <ItemCardGrid /> < />
  );
}