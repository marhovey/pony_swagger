module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    userName: String,
    password: String,
    create_at: {
      type: Date,
      default: Date.now
    }
  })

  userSchema.index({userName: 1}, {unique: true})

  return mongoose.model("accounts", userSchema)
}