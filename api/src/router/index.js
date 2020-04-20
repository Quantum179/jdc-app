import express from 'express'
import { getArticles, getArticle } from './handlers'

let router = express.Router()
 

router.get('/articles', getArticles)
router.get('/articles/:id', getArticle)

export default router