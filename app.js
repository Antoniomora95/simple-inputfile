'use-strict'
const getB64 = file => {
    if(!file) {
        return
    }
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const getFile = async event => {
    if(event && event.target && event.target.files){
        let file = event.target.files[0];
        try {
            const strB64 = await getB64(file);
            const fileBackend = {
                strB64,
                date: new Date(),
                type: file.type
            };
           console.log(fileBackend);
            document.getElementById('img-change').src = strB64;
        } catch (error) {
            console.log(error);
        }
    }
}

