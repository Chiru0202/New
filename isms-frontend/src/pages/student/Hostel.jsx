import { useState } from 'react'
import { requestHostel } from '../../utils/api.js'

export default function Hostel(){
  const [pref, setPref] = useState('Boys Hostel')
  const [status, setStatus] = useState(null)

  const submit = async (e)=>{
    e.preventDefault()
    const res = await requestHostel({ hostel: pref })
    setStatus(res)
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Hostel Request</h1>
        <form onSubmit={submit} className="flex gap-2 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium">Hostel Preference</label>
            <select className="border rounded-xl p-2 w-full" value={pref} onChange={e=>setPref(e.target.value)}>
              <option>Boys Hostel</option>
              <option>Girls Hostel</option>
              <option>PG/External</option>
            </select>
          </div>
          <button className="btn">Submit</button>
        </form>
        {status && <p className="mt-4">Allocated Room: <b>{status.room}</b></p>}
      </div>
    </div>
  )
}