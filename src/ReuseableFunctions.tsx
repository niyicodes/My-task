export const validatePassword = (password: string): string | null => {
 const minLength = 8;
 const hasUppercase = /[A-Z]/.test(password);
 const hasNumber = /[0-9]/.test(password);
 const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

 if (password.length < minLength) return 'Password must be at least 8 characters long.';
 if (!hasUppercase) return 'Password must include an uppercase letter.';
 if (!hasNumber) return 'Password must include a number.';
 if (!hasSymbol) return 'Password must include a symbol.';

 return null;
};