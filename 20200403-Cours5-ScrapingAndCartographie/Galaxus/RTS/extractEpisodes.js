//Ce scripte va extraire les épisodes par rapport données qu'on a extraite avec le scripte "scrape"
const readline = require('readline')
const R = require('ramda')
const dayjs = require('dayjs')

//Cette partie du code permet de lire ligne par ligne tout texte venant de la console
const reader = readline.createInterface({
  input: process.stdin,
})

//fonction qui prends un nombre et retourne la date d'il y a autant de jours.
const dateOfDaysAgo = days => dayjs().subtract(days, 'day').format('YYYY-MM-DD')

//fonction qui récupère la date quand elle est en toutes lettres.
const fixDate = date => {
    if (date.includes('Hier')) { return dateOfDaysAgo(1) }
    if (date.includes('samedi')) { return dateOfDaysAgo(2) }
    if (date.includes('vendredi')) { return dateOfDaysAgo(3) }
    if (date.includes('jeudi')) { return dateOfDaysAgo(4) }
    if (date.includes('mercredi')) { return dateOfDaysAgo(5) }
    if (date.includes('mardi')) { return dateOfDaysAgo(6) }
}

//fonction qui convertit la date au format YYYY-MM-DD.
const getDate = ({ date }) => {
    const [day] = date.split(',')
    const [ d, m, y ] = day.split('.')
    if (!d || !m || !y) { return fixDate(date) }
    return `${y}-${m}-${d}`
}

//Pour convertir la durée total en seconde
const durationInSeconds = duration => {
    const [m, s] = duration.split(':')
    return Number(m) * 60 + Number(s)
}

//Fonction qui prends un épisode et retourne ce qui nous intéresse pour chaque segment
const getSegments = ({ segments }) =>
  segments.map(segment => ({
    segment_id: segment.id,
    title: segment.title,
    duration: getDurationInSeconds(segment),
}))

//Selection des éléments qu'on veux prendre dans chaque épisode
const parseEpisode = episode => ({
    episode_id: episode.id,
    date: getDate(episode),
    duration: durationInSeconds(episode.duration),
    segments: episode.segments.map(parseSegment),
    views: episode.views,
  })

//La constante reader est un lecteur ligne par ligne qui prends tout texte venant de la console ({ input: process.stdin }).
reader.on('line', line => {
    const json = JSON.parse(line)
    json.episodes.map(R.pipe(
      parseEpisode,
      JSON.stringify,
      console.log
    ))
  })
  