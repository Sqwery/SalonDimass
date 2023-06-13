



const user = {
    name: "Dima",
    surname: "Savolevskiy",
    age: 13,
    dateOfBirth: "2009-10-02",
    passport: {
        serries: "AC",
        number: 2393838292,
        date: "2025-02-04",
        date_exp: "2035-01-09",
        visas: ["Russia", "America", "Korea"]
    },
wives: ["Angelina"],
isMarried: true,
hasCar:true
}



const car = {
    model: "Lamborghini SC18 Alston",
    marka: "chevrolet",
    year: 1984,
    engine: 3.5,
    color: "black or rad",
    wheels: 3,
    fuel: "dizel",
    state: "god",
    price:  3000000,
}




Object.assign(user, {car} )

console.log(user);


let key = {
    user:"Shoxa",
    surname:"Farkhodov",
    phone: 998978980007,
    age: 13,
    year: 2009,


}

console.log(Object.keys(key));
