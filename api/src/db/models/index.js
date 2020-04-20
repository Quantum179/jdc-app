import mongoose from 'mongoose'

import ArticleSchema from './schemas/ArticleSchema'
import ParagraphSchema from './schemas/ParagraphSchema'

let Article, Paragraph

export const loadModels = () => {
  Article = mongoose.model('Article', ArticleSchema)
  Paragraph = mongoose.model('Paragraph', ParagraphSchema)
}