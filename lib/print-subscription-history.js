const colors = require('colors')

function printSubscription(subscription) {
    console.log(`${colors.bgRed.white(subscription.user.name)} subscribed to ${colors.bgRed.white(subscription.subscribedChannel.name)}`)
}

function printSubscriptionHistory(user) {
    if (user.subscriptions.length == 0)
        return console.log(`${colors.bgRed.white(user.name)} has no subscription yet.`)

    user.subscriptions.forEach(printSubscription)
}

module.exports = printSubscriptionHistory