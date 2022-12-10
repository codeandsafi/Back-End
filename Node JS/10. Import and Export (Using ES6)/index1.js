// Import and export module using common JS

const name =  'Sarnali';

const add = (n1, n2) => {
    console.log(n1 + n2);
}

// export default name;
export {name, add};