// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}