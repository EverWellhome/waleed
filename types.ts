export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  isTyping?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string; // We will map string names to Lucide icons
}

export interface Testimonial {
  id: number;
  name: string;
  relation: string;
  text: string;
  image: string;
}
