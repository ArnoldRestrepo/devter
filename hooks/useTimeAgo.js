const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const getDateDiffs = timestamp => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsUnit || unit === 'second') {
      const value = Math.floor(elapsed / secondsUnit)
      return { value, unit }
    }
  }
}

export default function useTimeAgo(timestamp) {
  const { value, unit } = getDateDiffs(timestamp)
  const relativeTimeFormat = new Intl.RelativeTimeFormat(navigator.language, {
    style: 'short'
  })
  return relativeTimeFormat.format(value, unit)
}
