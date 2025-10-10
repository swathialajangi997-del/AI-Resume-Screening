export const fakeAuth = {
async login({ email, password }){
// demo: accept any non-empty values
await new Promise(r => setTimeout(r, 300))
return email && password
},
async signup(){
await new Promise(r => setTimeout(r, 300))
return true
}
}