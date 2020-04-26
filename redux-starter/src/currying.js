function add(a) {
    return function(b) {
        return a + b
    }
}
add(1)(5)
//N arguments and return one argument

const add2 = a => b => a + b;

add2(1)(3)