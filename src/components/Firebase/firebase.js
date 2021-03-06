import firebaseConfig from "./config";

class Firebase {
  constructor(app) {
    if (!firebaseInstance) {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
      this.db = app.firestore();
      this.functions = app.functions();
      this.storage = app.storage();
    }
  }

  async getUserProfile({ userId }) {
    return this.db.collection('publicProfile').where('userId', '==', userId).get();
  }

  async register({ email, password, userName, fone }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    return this.db.collection('publicProfile').doc(userName).set({
      userId: newUser.user.uid,
      fone: fone
    })
  }

  async postComment({ text, cutId }) {
    const postCommentCallable = this.functions.httpsCallable(this.postComment);
    return postCommentCallable({
      text, cutId
    })
  }

  subscribeToCutComment({ cutId, onSnapshot }) {
    const cutRef = this.db.collection('cuts').doc(cutId);
    return this.db.collection('comments').where('cut', '==', cutRef).onSnapshot(onSnapshot);
  }

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }
}

let firebaseInstance;

function getFirebaseInstance(app) {
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app);
    return firebaseInstance;
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null;
  }
}

export default getFirebaseInstance;
