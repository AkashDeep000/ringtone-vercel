import Header from "app/components/Header"
import ItemCardGrid from "app/components/ItemCardGrid";
import Head from "app/components/Head";
import {
  json
} from "utils/json.server.js";
import {
  useLoaderData
} from "@remix-run/react";

export async function loader( {
  params
}) {
  const res = await fetch(`https://api.akashdeep.tk/api/search?term=${params.id}&extra=true`);
  const responce = await res.json()
  return {
    data: responce,
    searchTerm: params.id
  };

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
  const dataAll = useLoaderData();
  const data = dataAll.data;

  console.log(data)
  return (
    <>
    <Header />
    <Head props={ {
      title: `Search Result: ${dataAll.searchTerm}` ,
      description: false
    }} />

    <ItemCardGrid props={data[1].data} /> < />
  );
}