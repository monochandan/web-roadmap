import mongoose, {Schema} from "mongoose";
import bcrypt  from "bcrypt";
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLength: 1,
            maxLength:30
        },

        password:{
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50,

        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        }
    },

    {
        timestamps: true
    }
)

// user bcrypt , hash the password before saving
// userSchema.pre("save", async function (next) {
userSchema.pre("save", async function (){
    // if not modified, not going to hash again.
    if(!this.isModified("password")) return; // next();
    // else hash the password
    this.password = await bcrypt.hash(this.password, 10);

    // next();
});

// compare password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}
export const User = mongoose.model("User", userSchema);