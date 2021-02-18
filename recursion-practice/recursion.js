function sheep(number) {
    if (number <= 0 ) {
        console.log("all sheep jumped over")
        return ''
    }

    console.log("another sheep has jumped over")
    sheep(number - 1)
}

// sheep(5)

function powerCalc(number, power) {
    if (power < 0) {
        console.log("exponent should be greater than 0")
        return ""
    }
    if (number <= 0) {
        return ""
    }
    console.log(number ** power)
    powerCalc(number - 1, power)
}

// powerCalc(10, 4)

function reverseString(str) {
    if (str.length === 0) {
        return ""
    }
    const char = str.charAt([0])
    return reverseString(str.slice(1)) + char
}

// console.log(reverseString('reverse'))

function calcTriangularNumber(number) {
    if (number <= 0) {
        return 
    }
    const triangularNumber = (number * (number + 1)) / 2
    const star = "*"
    if (triangularNumber.toString().length < 2) {
        console.log(triangularNumber, "", star.repeat(number))
    } else {
        console.log(triangularNumber, star.repeat(number))
    }
    
    calcTriangularNumber(number - 1)
}

// console.log(calcTriangularNumber(10))

function stringSplitter(string, separator, array = [], newString = "") {
    if (string.length === 0) {
        array = [newString, ...array]
        console.log(array)
        return array
    }
    if (string.charAt([0]) === separator) {
        array = [newString, ...array]
        newString = ""
    } else {
        newString += string.charAt([0])
    }
    stringSplitter(string.slice(1), separator, array = array, newString = newString)
}

// stringSplitter("20/2jn0/20", "/")

function fibonacci(num, first = 0, second = 0, last = 1, array = [1, 1]) {
    if (num === 0) {
        return console.log(array)
    }
    if (second === 0) {
        first = last
    second = first
    }
    
    last = first + second
    array = [...array, last]
    fibonacci(num - 1, first = array[array.length - 2], second = array[array.length - 1], last = array[array.length], array)
}

// console.log(fibonacci(10))

function factorial(num, result = 0) {
    if (num <= 2) {
        return console.log(result)
    }
    if (result === 0) {
        result = num * (num - 1)
    }
    result = result * (num - 2)
    factorial(num - 1, result)
}

// factorial(10)


