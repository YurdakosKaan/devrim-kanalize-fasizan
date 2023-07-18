const BaseDatabase = require('./base-database')
const Video = require('../models/video')

class VideoDatabase extends BaseDatabase {
    
}

module.exports = new VideoDatabase(Video)