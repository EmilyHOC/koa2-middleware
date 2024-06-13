import requireIndex from 'es6-requireindex'
import middleswares from '../middlewares';
const controller = require('../controllers');
const modulesFiles = requireIndex(__dirname).modules;
export default (router) => {
  Object.keys(modulesFiles).forEach((item) => {
    modulesFiles[item](router, middleswares, controller)
  })
}