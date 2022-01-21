import {} from 'firebase/app';
import firebaseConfig from "./config/firebaseConfig";
import {getAuth} from "firebase/auth";

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth, db};
