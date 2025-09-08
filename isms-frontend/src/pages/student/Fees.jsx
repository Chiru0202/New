import { useState } from 'react'
import { payFees } from '../../utils/api.js'

export default function Fees(){
  const [amount, setAmount] = useState('5000')
  const [receipt, setReceipt] = useState(null)

  const submit = async (e)=>{
    e.preventDefault()
    const res = await payFees({ amount: Number(amount) })
    setReceipt(res.receiptNo)
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Fee Payment</h1>
        <form onSubmit={submit} className="flex gap-2 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium">Amount</label>
            <input className="border rounded-xl p-2 w-full" value={amount} onChange={e=>setAmount(e.target.value)} type="number" />
          </div>
          <button className="btn">Pay Now</button>
        </form>
        {receipt && <p className="mt-4">Payment successful. Receipt No: <b>{receipt}</b></p>}
      </div>
    </div>
  )
}