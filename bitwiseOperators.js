const a = 0xF0FA
const b = 0xAFAF
const c = 0x0505

console.log(`O valor em hexadecimal da variavel "a" representa o numero decimal ${a}`)
console.log(`O valor em hexadecimal da variavel "b" representa o numero decimal ${b}`)
console.log(`O valor em hexadecimal da variavel "c" representa o numero decimal ${c}\n`)

let e = a & b
console.log("e = a & b; E = ", e.toString(16))

e = a | b
console.log("e = a | b; E = ", e.toString(16))

e = c << 8
console.log("e = c << 8; E = ", e.toString(16))

e = b & 0x5A5A
console.log("e = b & 0x5A5A; E = ", e.toString(16))

e = c << 16 ? b : a
console.log("e = c << 16 ? b : a; E = ", e.toString(16))