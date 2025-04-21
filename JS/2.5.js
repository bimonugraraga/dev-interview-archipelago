async function fetchData(url){
    let result = await new Promise((resolve) => {
    setTimeout(() => {
        try {
            if (url) {
                resolve(`Data from ${url}`);
            } else {
                throw "URL is required";
            }
            } catch (error) {
                resolve(error);
            }
        }, 1000);
    });
    
    
    return result
}
    
    
async function processData(data) {
    let result = await new Promise((resolve) => {
    setTimeout(() => {
        try {
            if (data) {
                resolve(data.toUpperCase());
            } else {
                throw "Data is required";
            }
            } catch (error) {
                resolve(error);
            }
        }, 1000);
    });
    
    
    return result
}

let temp1 = await fetchData("http://WOKE")
console.log(temp1)
let temp2 = await processData()
console.log(temp2)

    