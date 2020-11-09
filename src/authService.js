const authService = {
    isAuthenticated: false,

    authenticate() {
      this.isAuthenticated = true;
    },

    signout() {
      this.isAuthenticated = false;
    },

    getAuth() {
        return this.isAuthenticated;
    },

    checkAuthenticate(login, password) {
        if(login === 'l' && password === 'p') {
            this.isAuthenticated = true;
        } else {
            this.isAuthenticated = false;
        }
    }
  };

  export default authService;