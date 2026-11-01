import { profile } from '../data/portfolio'

export async function downloadResume(e) {
  if (e && e.preventDefault) {
    e.preventDefault()
  }

  const candidateUrls = [
    profile.resumeUrl,
    '/aryan-rathod-resume.pdf',
    '/Aryan-Rathod-Resume.pdf',
    '/Aryan_Rathod.pdf',
  ].filter(Boolean)

  for (const url of candidateUrls) {
    try {
      const response = await fetch(url)
      const contentType = response.headers.get('content-type') || ''

      // If server returned an HTML error/fallback page, don't download it as a PDF!
      if (!response.ok || contentType.includes('text/html')) {
        continue
      }

      const blob = await response.blob()

      // Verify the first 4 bytes match '%PDF'
      const headerText = await blob.slice(0, 5).text()
      if (!headerText.startsWith('%PDF')) {
        console.warn(`File at ${url} does not have valid %PDF magic header`)
        continue
      }

      // Valid PDF confirmed
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
      return
    } catch (err) {
      console.warn(`Download attempt failed for ${url}:`, err)
    }
  }

  // Final fallback: direct anchor click
  const a = document.createElement('a')
  a.href = profile.resumeUrl || '/aryan-rathod-resume.pdf'
  a.download = 'Aryan-Rathod-Resume.pdf'
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
