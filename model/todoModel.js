
import mongoose from "mongoose";

const todoSchema =new  mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, Default: false },
},{
    timestamps:true
}
);
const Todo= mongoose.model("Todo",todoSchema)
export default Todo;