export interface Channels {
    get: string,
    hit: string,
    id: string,
    iframeSrc: string,
    name: string,
    type: string
}

export interface Subscription {
  _id: string;
  userId: string;
  plan: "monthly" | "yearly";
  status: "active" | "expired" | "cancelled";
  amount: number;
  currency: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  _id: string;
  clerkUserId: string;
  name?: string;
  email: string;
  country?: string;
  phone?: string;
  role: "user" | "admin";
  isRestricted: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastSignInAt?: Date;
}

