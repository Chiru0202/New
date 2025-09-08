// Placeholder API utilities — replace with real HTTP calls or GAS endpoints
export async function submitAdmission(formData){
  console.log('submitAdmission', formData)
  return { ok: true, studentId: 'STU' + Math.floor(Math.random()*10000) }
}

export async function payFees(payload){
  console.log('payFees', payload)
  return { ok: true, receiptNo: 'REC' + Math.floor(Math.random()*100000) }
}

export async function requestHostel(payload){
  console.log('requestHostel', payload)
  return { ok: true, room: 'B-204' }
}

export async function uploadMarks(payload){
  console.log('uploadMarks', payload)
  return { ok: true }
}

export async function generateReport(kind){
  console.log('generateReport', kind)
  return { ok: true, url: '#' }
}