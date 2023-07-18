const User = require('./models/user')
const Video = require('./models/video')
const userDatabase = require('./database/user-database')
const videoDatabase = require('./database/video-database')

const printSubscriptionHistory = require('./lib/print-subscription-history')
const printUserVideos = require('./lib/print-user-videos')

const kegri = User.create({name: 'Kegri'})
const kaan = User.create({name: 'Kaan'})
const deniz = User.create({name: 'Deniz'})

const video1 = Video.create({name : 'Video 1'})
const video2 = Video.create({name : 'Video 2'})

kegri.subscribe(kaan)
deniz.subscribe(kaan)
kaan.subscribe(deniz)

kaan.uploadVideo(video1)
kaan.uploadVideo(video2)
deniz.uploadVideo(video2)


async function main() {
    try {
        await userDatabase.save([kaan, kegri, deniz])
        await videoDatabase.save([video1, video2])

        const tolga = User.create({name: 'Tolga'})

        await userDatabase.insert(tolga)

        const users = await userDatabase.load()

        users.forEach(printSubscriptionHistory)
        users.forEach(printUserVideos)
    } catch (e) {
        return console.log(e)
    }
}

main()