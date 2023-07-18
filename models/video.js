const uuid = require('uuid')

class Video {
    constructor(id = uuid.v4(), name) {
        this.id = id

        this.name = name
    }

    static create({id, name}) {
        return new Video(id, name)
    }
}

module.exports = Video