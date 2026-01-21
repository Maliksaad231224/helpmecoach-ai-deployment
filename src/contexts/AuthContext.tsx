import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider } from '../lib/firebase'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  sendEmailVerification
} from 'firebase/auth'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<any>
  signUp: (email: string, password: string) => Promise<any>
  signInWithGoogle: () => Promise<any>
  signOut: () => Promise<any>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  async function signIn(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return { data: result, error: null }
    } catch (error: any) {
      return { data: null, error: { message: error.message } }
    }
  }

  async function signUp(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      if (result.user) {
        await sendEmailVerification(result.user)
      }
      return { data: result, error: null }
    } catch (error: any) {
      return { data: null, error: { message: error.message } }
    }
  }

  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      return { data: result, error: null }
    } catch (error: any) {
      return { data: null, error: { message: error.message } }
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut(auth)
      return { error: null }
    } catch (error: any) {
      return { error: { message: error.message } }
    }
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
