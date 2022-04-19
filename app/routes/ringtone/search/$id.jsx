import Header from "app/components/Header"
import ItemCardGrid from "app/components/ItemCardGrid";
import Head from "app/components/Head";
import {
  json
} from "@remix-run/vercel";
import {
  useLoaderData
} from "@remix-run/react";


export async function loader( {
  params
}) {
  const res = await fetch(`https://api.akashdeep.tk/api/search?term=${params.id}&extra=true`);
  console.log(res)
  const data = {
    id: params.id,
    data: res,
  }
  return json(data.json());

}



export function headers( {
  loaderHeaders, parentHeaders
}) {
  return {
    "server": "akash",
    "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
  };
}

export default function SearchResult() {
  const data = useLoaderData();
  return (
    <>
    <Header />
    <p className="">
Search Result: {data.id}
    </p>
    <ItemCardGrid /> < />
  );
}