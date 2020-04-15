const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok')}, 2000);
}); 

const executaPromise = async ()=> {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();