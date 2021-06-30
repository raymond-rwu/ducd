 
export function tosub(s)
{
    var result = ''
    var str = s.toString().trim()
    for (var i = 0; i < str.length; i++)
        result += String.fromCharCode(8320 + Number(str.charAt(i)))
    return result
}

export const isPrimitive = item=> typeof item !== 'object' // function, string, number, boolean, undefined, symbol
export const isObject    = item=> typeof item === 'object' && !Array.isArray(item)
export const isArray     = item=> typeof item === 'object' &&  Array.isArray(item)
export const mergeDeep = (target, source)=> {
    console.assert(
        (isObject(target) && isObject(source)) ||
        (isArray(target)  && isArray(source))
    )
    for (const key in source) 
    {
        if (isObject(source[key])) 
        {
            console.debug('merging Object: ', key)
            target[key] = mergeDeep(target[key] || Object.create(Object.getPrototypeOf(source[key])) , source[key])            
        }
        else if (isArray(source[key])) 
        {
            console.debug('merging Array: ', key)
            target[key] = mergeDeep(target[key] || [], source[key])        
        }
        else if (isPrimitive(source[key])) 
        {
            console.debug('merging Primitive: ', key)
            target[key] = source[key]
        }
        else console.assert(false)
    }
    return target 
}

export function clone(o) {
    //return mergeDeep({}, o)
    return JSON.parse(JSON.stringify(o))
}

export function shuffleArray(array, n) {        
    if (array)
    for (let i = array.length - 1; i > 0; i--) {
        let r = (i * i + n.height) % array.length 
        //let r = Math.random()
        let j = Math.floor(r);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function  stringhash(s:string) : number {
    let hash = 0, i, chr;
    if (!s || s.length === 0) return hash;
    for (i = 0; i < s.length; i++) {
        chr   = s.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash)
}

const googlePalette_ = [
    "#3366cc", "#dc3912", "#ff9900", "#109618",
    "#990099", "#0099c6", "#dd4477", "#66aa00", 
    "#b82e2e", "#316395", "#994499", "#22aa99", 
    "#aaaa11", "#6633cc", "#e67300", "#8b0707", 
    "#651067", "#329262", "#5574a6", "#3b3eac"
] 
export function googlePalette(idx) {    
    return googlePalette_[idx % googlePalette_.length]
}