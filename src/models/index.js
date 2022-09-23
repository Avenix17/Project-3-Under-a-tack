const { Schema, model, Types } = require('mongoose');

const moment = require('moment')

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)


const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createAtVal => moment(createdAtVal).format("MM DD, YYYY [at] hh:mm a"),
        },
        reactions: [reactionSchema],
    },
    {
        toJson: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)



thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;