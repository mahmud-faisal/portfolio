const mongoose= require('mongoose');

const projectSchema = new mongoose.Schema({
    title:{type:String,required:true},
    short_description:{type:String,required:true},
    detailed_description:{type:String,required:true},
    category:{type:String,required:true},
    role:{type:String},
    features:[{type:String}],
    technologies:[{type:mongoose.Schema.Types.ObjectId,ref:"Technology"}],
    links:{
        github:{type:String},
        live_demo:{type:String},
        video_demo:{type:String},
    },
    media:{
        cover_image:{type:String},
        screenshots:[{type:String}]
    },

    date_started:{type:Date},
    date_completed:{type:Date},
    status:{type:String,enum:["Completed","Ongoing"],default:"Completed"},
        // createdAt:{type:Date},
        // updatedAt:Date
    
    
})

const porjectModel =mongoose.models.Project|| mongoose.model("Project",projectSchema);

module.exports = porjectModel; 