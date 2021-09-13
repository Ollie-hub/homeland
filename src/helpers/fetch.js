//Standard fetch function, if there's no other method set. It sets it to GET. 
const myFetch = async (url, options = null) => {

    if (!options) {
        options = {
            method: 'GET'
        }
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;

    }
    catch (error) {
        console.error(error);
    }
}

export { myFetch };