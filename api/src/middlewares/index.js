  
import sanitizer from 'sanitizer'
import {isMongoData, toPlainObject} from '../db'


// ========== Export variables ==========

export default {
    requestFormatter: function(req, res, next) {
        let data = {}
        data.options = {}

        if(req.query.hasOwnProperty('queryParams')) {
          data.params = req.query.queryParams
        }
        if(req.query.hasOwnProperty('fields')) {
          data.options.fields = req.query.fields
        }
        if(req.query.hasOwnProperty('populate')) {
          data.options.populate = req.query.populate
        }
        if(req.query.hasOwnProperty('sort')) {
          data.options.sort = req.query.sort
        }
        if(req.query.hasOwnProperty('limit')) {
          data.options.limit = req.query.limit
        }
        
        req.data = data
        next()
    },
    responseFormatter: function(req, res, next) {
      //We assume the status is already set in the endpoint handler
      let data = {}
      let payload = res.locals //TODO : make sure res.locals only contains requested informations.

      if(payload == {} || payload == null) {
        return res.end()
      } else {
        for(let key in payload) {
          if(Object.prototype.hasOwnProperty.call(res.locals, key)) { //TODO: make global wrapper
              let item = payload[key]
              if(isMongoData(item)) {
                  data[key] = toPlainObject(item)
              } else {
                  data[key] = item
              }
          }
        }
      
        return res.json(data)      
      }
    }
}