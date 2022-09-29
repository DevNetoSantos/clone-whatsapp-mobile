import { legacy_createStore as createStore} from 'redux'
import Reducers from '../reducers/index'

const store = createStore(Reducers)

export default store;