function formatDate(date) {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Istanbul'
  }

  return new Date(date).toLocaleString('tr-TR', options)
}

module.exports = {
  formatDate
}