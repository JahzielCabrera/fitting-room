const {Schema, model} = require('mongoose');

const prendaSchema = new Schema({
    code:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    bodyPart:{
        type: String,
        required: true
    },
    colors:{
        color1:{
            CF:{
                type: String,
                required: true
            },
            SF:{
                type: String,
                required: true
            }
        },
        color2:{
            CF:{
                type: String,
                required: true
            },
            SF:{
                type: String,
                required: true
            }
        },
        color3:{
            CF:{
                type: String,
                required: true
            },
            SF:{
                type: String,
                required: true
            }
        }
    }
});


module.exports = model('Prenda', prendaSchema);