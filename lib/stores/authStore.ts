import { create } from 'zustand';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  getDocs 
} from 'firebase/firestore';
import { auth, db, firebaseConfig } from '@/lib/firebase';
import { TestResultClass } from '@/lib/models/TestResult';
import toast from 'react-hot-toast';

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  saveTestResult: (result: TestResultClass) => Promise<void>;
  getUserTestResults: () => Promise<TestResultClass[]>;
  updateUserProfile: (data: { displayName?: string; email?: string }) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,

  signIn: async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      set({ user: userCredential.user });
      toast.success('Successfully signed in!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
      throw error;
    }
  },

  signUp: async (email: string, password: string, displayName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save user profile to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        displayName,
        email: user.email,
        createdAt: new Date(),
        projectId: firebaseConfig.projectId
      });
      
      set({ user });
      toast.success('Account created successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account');
      throw error;
    }
  },

  signInWithGoogle: async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      
      // Check if user document exists, create if not
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName,
          email: user.email,
          createdAt: new Date(),
          projectId: firebaseConfig.projectId
        });
      }
      
      set({ user });
      toast.success('Successfully signed in with Google!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in with Google');
      throw error;
    }
  },

  signOut: async () => {
    try {
      await signOut(auth);
      set({ user: null });
      toast.success('Successfully signed out!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign out');
      throw error;
    }
  },

  saveTestResult: async (result: TestResultClass) => {
    const { user } = get();
    if (!user) {
      throw new Error('User must be authenticated to save test results');
    }

    try {
      const testResultData = {
        ...result.toJson(),
        userId: user.uid,
        userEmail: user.email,
        createdAt: new Date(),
        projectId: firebaseConfig.projectId
      };

      await addDoc(collection(db, 'testResults'), testResultData);
      toast.success('Test result saved successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to save test result');
      throw error;
    }
  },

  getUserTestResults: async () => {
    const { user } = get();
    if (!user) {
      throw new Error('User must be authenticated to get test results');
    }

    try {
      const q = query(
        collection(db, 'testResults'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const results: TestResultClass[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const result = new TestResultClass({
          score: data.totalScore || data.score,
          level: data.severity || data.level,
          date: data.completedAt ? new Date(data.completedAt) : new Date(data.createdAt),
          answers: data.responses || data.answers || {}
        });
        results.push(result);
      });
      
      return results;
    } catch (error: any) {
      toast.error(error.message || 'Failed to fetch test results');
      throw error;
    }
  },

  updateUserProfile: async (data: { displayName?: string; email?: string }) => {
    const { user } = get();
    if (!user) {
      throw new Error('User must be authenticated to update profile');
    }

    try {
      await updateDoc(doc(db, 'users', user.uid), {
        ...data,
        updatedAt: new Date(),
        projectId: firebaseConfig.projectId
      });
      
      toast.success('Profile updated successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile');
      throw error;
    }
  },
}));

// Set up auth state listener
onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({ user, loading: false });
});
