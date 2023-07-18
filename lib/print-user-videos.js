const colors = require('colors')

function printVideo(video) {
    console.log(`${colors.magenta(video.name)}`)
}

function printUserVideos(user) {
    if (user.videos.length == 0)
        return console.log(`${colors.bgRed.white(user.name)} has no video yet.`)

    console.log(`${colors.bgRed.white(user.name)}'s videos:\n`)
    user.videos.forEach(printVideo)
}

module.exports = printUserVideos