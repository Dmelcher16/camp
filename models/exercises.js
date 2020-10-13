const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainingSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Type of excercise is required"
        },
        name: {
            type: String,
            trim: true,
            required: "Name of excercise is required"
        },
        duration: {
            type: Number,
            required: "Duration is required"
        },
        pullDuration: {
            type: Number,
            required: "Time spent pulling required"
        },
        sitDuration: {
            type: Number,
            required: "How long were they able to sit or stay?"
        },
        commands: {
            type: Number,
            required: "How many commands were completed in 2 min?"
        },
        chewing: {
            type: Number,
            required: "Number of items chewed up today"
        },
        accidents: {
            type: Number,
            required: "Number of accidents today"
        }
       
      },
    ],
}, 
);

const Exercise = mongoose.model("Exercise", DogSchema);

module.exports = Exercise;

