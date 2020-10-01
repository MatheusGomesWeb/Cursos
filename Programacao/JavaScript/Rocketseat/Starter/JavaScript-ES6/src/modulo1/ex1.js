class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;

        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
    
};

class Admin extends Usuario{
    constructor() {
        super();

       this.admin = true;
    }
};

const User1 = new Usuario("matheusgomes1203@hotmail.com", "123456");
const Adm1 = new Admin("matheusgomes1203@hotmail.com", "123456");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());