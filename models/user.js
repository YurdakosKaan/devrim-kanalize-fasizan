const Subscription = require('./subscription')
const uuid = require('uuid')

class User {
    constructor(id = uuid.v4(), name, videos = [], subscribedChannels = [], subscribers = [], subscriptions = []) {
        this.id = id

        this.name = name
        this.videos = videos
        this.subscribedChannels = subscribedChannels
        this.subscribers = subscribers
        this.subscriptions = subscriptions
    }

    uploadVideo(video) {
        this.videos.push(video)
    }

    subscribe(subscribedChannel) {
        const subscription = new Subscription(subscribedChannel, this)
        this.subscribedChannels.push(subscribedChannel)
        subscribedChannel.subscribers.push(this)
        this.subscriptions.push(subscription)
        subscribedChannel.subscriptions.push(subscription)

        return subscription
    }

    static create({id, name, videos, subscribedChannels, subscribers, subscriptions}) {
        return new User(id, name, videos, subscribedChannels, subscribers, subscriptions)
    }
}

module.exports = User