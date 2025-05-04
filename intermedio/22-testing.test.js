const sum = require('./21-testing');
test("Suma de 3 + 5 tiene que ser 8",()=>{
    expect(sum(3,5)).toBe(8)
})

test("Suma de 4 + 7 tiene que ser 11",()=>{
    expect(sum(45,7)).toBe(11)
})