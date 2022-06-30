
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyD3VwEIdU9KPqWW9nnSOcBrcjepyncW3j8',
  authDomain: 'velerioimeteosystem-af6f1.firebaseapp.com',
  databaseURL: 'https://velerioimeteosystem-af6f1.firebaseio.com',
  projectId: 'velerioimeteosystem-af6f1',
  storageBucket: 'velerioimeteosystem-af6f1.appspot.com',
  messagingSenderId: '287393625235',
  appId: '1:287393625235:web:061e7d86d8b70f2ba04966',
  measurementId: 'G-N36P3J7WTB'
}
firebase.initializeApp(firebaseConfig)
export default ({ Vue }) => {
  Vue.prototype.$auth = firebase.auth()
  Vue.prototype.$db = firebase.firestore()
  Vue.prototype.$storage = firebase.storage()
}
