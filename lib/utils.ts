import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
<<<<<<< HEAD

=======
 
>>>>>>> origin/main
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
