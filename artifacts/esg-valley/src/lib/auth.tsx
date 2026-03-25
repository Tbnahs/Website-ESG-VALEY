import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  identifier: string;
  type: "email" | "phone";
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
  showAuthModal: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const ADMIN_ID = import.meta.env.VITE_ADMIN_ID ?? "";

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("esgvalley_user");
    if (saved) {
      try { setUser(JSON.parse(saved)); } catch {}
    }
  }, []);

  const login = (u: User) => {
    setUser(u);
    localStorage.setItem("esgvalley_user", JSON.stringify(u));
    setShowAuthModal(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("esgvalley_user");
  };

  const isAdmin = !!user && !!ADMIN_ID && user.identifier.trim().toLowerCase() === ADMIN_ID.trim().toLowerCase();

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isLoggedIn: !!user,
      isAdmin,
      showAuthModal,
      openAuthModal: () => setShowAuthModal(true),
      closeAuthModal: () => setShowAuthModal(false),
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
