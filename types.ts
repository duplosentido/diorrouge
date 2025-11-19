
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  image: string;
  shades: Shade[];
}

export interface Shade {
  id: string;
  name: string;
  hex: string;
  finish: 'Velvet' | 'Satin' | 'Matte';
  image?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface CustomerFormData {
  fullName: string;
  phone: string;
  address: string;
  note: string;
}
