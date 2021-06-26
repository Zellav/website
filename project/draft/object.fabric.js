

const fabric = {
    data: [],
    createObjUser(name, age, password) {
        let user = {name:name, age:age, password:password, getName:function(){return this.name}}
        this.data.push(user)
        return this.data.length
    },
    createObjStr() {

    }
}




let idTest = fabric.createObjUser("test", 12, 123456) 
let idTest2 = fabric.createObjUser("test2", 67, "qwertyqwerty")
fabric.data[idTest]  //?
