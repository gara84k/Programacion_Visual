// OBJETOS COMO PARTE DE UNA FUNCION

function imprimirDatos(
    data: {
        userName: string,
        email: string,
    }): void 
    {
        console.log(`Tu nombre de usuario es: ${data.userName}, y el Email registrado es: ${data.email}`);
    }
    imprimirDatos({userName:"Enrique Ortiz", email:"Enrique Ortiz"})

// OBJETOS COMO TIPOS

type userData = {
    nombre: string,
    edad: number,
    email: string,
    telefono: string
};

let userList : userData[] = [];

userList.push({
    nombre: "lalo",
    edad: 19,
    email: "kikeortiz925@gmail.com",
    telefono: "0999999999"
});

userList.push({
    nombre: "alguien",
    edad: 12,
    email: "alguien@yavirac.edu.ec",
    telefono: "0999999999"
});

console.log(userList[1]);
