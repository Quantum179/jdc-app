import mongoose from 'mongoose'
import ParagraphSchema from './ParagraphSchema'
var Schema = mongoose.Schema

var options = { discriminatorKey: 'type', timestamps: true }

var ArticleSchema = new Schema(
  {
    uuid: String,
    title: String,
    preface: String,
    paragraphes: [ParagraphSchema],
    likes : Number,
    shares: Number,
    comments : [CommentSchema],
    keywords: [String]
  },
  options
)

export default ArticleSchema