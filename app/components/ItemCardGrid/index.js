import ItemCard from "app/components/ItemCard";

export default function ItemCardGrid( {
  props
}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-3 gap-3">
    {
      props.map(data => {
        return <ItemCard props={data} />
      })}
    </div>
  )
}