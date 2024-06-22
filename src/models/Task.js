const mongoose = require('mongoose')

const Task = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description  : {
        type : String,
        required : false,
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Task',Task);