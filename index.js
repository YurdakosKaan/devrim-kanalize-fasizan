const userDatabase = require('./database/user-database')
const printSubscriptionHistory = require('./lib/print-subscription-history')

async function main() {
    const tolga = await userDatabase.findBy('name', 'Tolga')
    const kaan = await userDatabase.findByName('Kaan')


    tolga.subscribe(kaan)
    userDatabase.update(kaan)
    userDatabase.update(tolga)

    const tolga2 = await userDatabase.findBy('name', 'Tolga')
    const kaan2 = await userDatabase.findByName('Kaan')

    printSubscriptionHistory(kaan2)
    console.log('-------')
    printSubscriptionHistory(tolga2)
}

main()