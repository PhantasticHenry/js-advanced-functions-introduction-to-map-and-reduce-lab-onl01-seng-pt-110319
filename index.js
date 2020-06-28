const mapToNegativize = (src) => {
    const newArr = []
    for ( let i = 0; i < src.length; i++ ){
        newArr.push(-1 * src[i])
    }
    return newArr
}

const mapToNoChange = (src) => {
    const newArr = [];
    for ( let i = 0; i < src.length; i++ ){
        newArr.push(src[i])
    }
    return newArr
}

const mapToDouble = (src) => {
    const newArr = []
    for ( let i = 0; i < src.length; i++ ){
        newArr.push(2 * src[i])
    } 
    return newArr
}

const mapToSquare = (src) => {
    const newArr = []
    for ( let i = 0; i < src.length; i++ ){
        newArr.push(src[i] * src[i])
    }
    return newArr
}

const reduceToTotal = (src, startingPoint = 0) => {
    let total = startingPoint
    src.forEach(e => {
        total += e
    })
    return total
}

const reduceToAllTrue = (src) => {
    for ( let i = 0; i < src.length; i++ ){
        if (!src[i]) return false
    }
    return true
}

const reduceToAnyTrue = (src) => {
    for ( let i = 0; i < src.length; i++ ){
        if (src[i]) return true
    }
    return false
}

