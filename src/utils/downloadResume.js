import { profile } from '../data/portfolio'

export function downloadResume(e) {
  if (e && e.preventDefault) {
    e.preventDefault()
  }

  const fileUrl = profile.resumeUrl || '/Aryan-Rathod-Resume.pdf'

  fetch(fileUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch file: ${res.statusText}`)
      }
      return res.blob()
    })
    .then((blob) => {
      // Explicitly set the MIME type to application/pdf to guarantee it opens as a PDF
      const pdfBlob = new Blob([blob], { type: 'application/pdf' })
      const blobUrl = window.URL.createObjectURL(pdfBlob)
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = 'Aryan-Rathod-Resume.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl)
      }, 3000)
    })
    .catch((err) => {
      console.warn('Blob download fallback triggered:', err)
      // Direct window.open fallback
      const a = document.createElement('a')
      a.href = fileUrl
      a.download = 'Aryan-Rathod-Resume.pdf'
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    })
}
