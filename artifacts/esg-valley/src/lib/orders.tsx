import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CartItem } from "./cart";

export interface BuyerInfo {
  name: string;
  phone: string;
  address: string;
  note: string;
}

export type OrderStatus = "Đã đặt hàng" | "Đang xử lý" | "Đang vận chuyển" | "Hoàn tất" | "Đã huỷ";

export interface Order {
  code: string;
  items: CartItem[];
  buyer: BuyerInfo;
  status: OrderStatus;
  createdAt: string;
}

interface OrdersContextType {
  orders: Order[];
  createOrder: (items: CartItem[], buyer: BuyerInfo) => Order;
  lookupOrder: (code: string) => Order | null;
}

const STORAGE_KEY = "esgvalley_orders";

const OrdersContext = createContext<OrdersContextType | null>(null);

function generateCode(): string {
  const prefix = "ESG";
  const year = new Date().getFullYear();
  const rand = Math.floor(Math.random() * 900000 + 100000);
  return `${prefix}${year}${rand}`;
}

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const createOrder = (items: CartItem[], buyer: BuyerInfo): Order => {
    const order: Order = {
      code: generateCode(),
      items,
      buyer,
      status: "Đang xử lý",
      createdAt: new Date().toISOString(),
    };
    setOrders(prev => [order, ...prev]);
    return order;
  };

  const lookupOrder = (code: string): Order | null => {
    return orders.find(o => o.code.toLowerCase() === code.toLowerCase()) ?? null;
  };

  return (
    <OrdersContext.Provider value={{ orders, createOrder, lookupOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be inside OrdersProvider");
  return ctx;
}
