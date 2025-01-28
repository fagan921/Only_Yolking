const Auth = {
    // Save the token to localStorage after login
    login: (token: string) => {
      localStorage.setItem('authToken', token);
    },
  
    // Remove the token from localStorage to log the user out
    logout: () => {
      localStorage.removeItem('authToken');
      window.location.assign('/'); // Redirect to home page after logout
    },
  
    // Check if a user is authenticated by verifying the token exists
    isAuthenticated: (): boolean => {
      const token = localStorage.getItem('authToken');
      return !!token; // Returns true if the token exists
    },
  
    // Get the stored token
    getToken: (): string | null => {
      return localStorage.getItem('authToken');
    },
  };
  
  export default Auth;
  