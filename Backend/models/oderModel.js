import mongoos from "mongoose";

const oderSchema = new mongoos.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    data:{type: Date, default: Date.now},
    address:{type:Boolean,required:false},
})

const oderModel = mongoos.models.order || mongoos.model("order",oderSchema)


export default oderModel;