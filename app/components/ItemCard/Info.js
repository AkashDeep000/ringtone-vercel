export default function Info( {
  props
}) {

  return (
    <div className="grid grid-cols-[auto_auto] justify-between">
     <h3 className="col-span-2 text-lg text-slate-600 py-2">{props.title}</h3>
     <p className="text-slate-400">
Duration: {props.duration}s
    </p>
     <p className="text-slate-400">
Downloads: 1314
    </p>
    </div>
  )
}