import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  identifier: string;
  type: "email" | "phone";
}

interface StoredAccount {
  name: string;
  identifier: string;
  type: "email" | "phone";
  password: string;
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
  validateLogin: (identifier: string, password: string) => boolean;
  registerAccount: (name: string, identifier: string, password: string, type: "email" | "phone") => void;
  changePassword: (identifier: string, newPassword: string) => boolean;
  accountExists: (identifier: string) => boolean;
}

const ACCOUNTS_KEY = "esgvalley_accounts";
const ADMIN_ID = import.meta.env.VITE_ADMIN_ID ?? "";

const AuthContext = createContext<AuthContextType | null>(null);

function getAccounts(): StoredAccount[] {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAccounts(accounts: StoredAccount[]) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

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

  const validateLogin = (identifier: string, password: string): boolean => {
    const accounts = getAccounts();
    const found = accounts.find(a => a.identifier.toLowerCase() === identifier.toLowerCase());
    if (!found) return true;
    return found.password === password;
  };

  const registerAccount = (name: string, identifier: string, password: string, type: "email" | "phone") => {
    const accounts = getAccounts();
    const existing = accounts.findIndex(a => a.identifier.toLowerCase() === identifier.toLowerCase());
    const entry: StoredAccount = { name, identifier, password, type };
    if (existing >= 0) {
      accounts[existing] = entry;
    } else {
      accounts.push(entry);
    }
    saveAccounts(accounts);
    login({ name, identifier, type });
  };

  const changePassword = (identifier: string, newPassword: string): boolean => {
    const accounts = getAccounts();
    const idx = accounts.findIndex(a => a.identifier.toLowerCase() === identifier.toLowerCase());
    if (idx >= 0) {
      accounts[idx].password = newPassword;
      saveAccounts(accounts);
      return true;
    }
    accounts.push({ name: identifier, identifier, password: newPassword, type: identifier.includes("@") ? "email" : "phone" });
    saveAccounts(accounts);
    return true;
  };

  const accountExists = (identifier: string): boolean => {
    const accounts = getAccounts();
    return accounts.some(a => a.identifier.toLowerCase() === identifier.toLowerCase());
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
      validateLogin,
      registerAccount,
      changePassword,
      accountExists,
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
