import { useState } from 'react'
import { generateReport } from '../../utils/api.js'

export default function Reports(){
  const [downloading, setDownloading] = useState(false)
  const [url, setUrl] = useState(null)

  const create = async (kind) => {
    setDownloading(true)
    const res = await generateReport(kind)
    setUrl(res.url)
    setDownloading(false)
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Reports</h1>
        <div className="flex gap-2">
          <button className="btn" onClick={()=>create('admissions')} disabled={downloading}>Admissions Report</button>
          <button className="btn" onClick={()=>create('fees')} disabled={downloading}>Fees Report</button>
          <button className="btn" onClick={()=>create('hostel')} disabled={downloading}>Hostel Report</button>
        </div>
        {url && <p className="mt-4">Report ready: <a className="link" href={url}>Download</a></p>}
      </div>
    </div>
  )
}