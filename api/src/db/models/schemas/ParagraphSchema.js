import { Schema } from 'mongoose'

let ParagraphSchema = new Schema(
  {
    title: String,
    number: Number,
    text: {type: String, required: true}
  }
)

export default ParagraphSchema