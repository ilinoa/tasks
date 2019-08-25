function asyncFunc(work) {
    return new Promise (function(resolve, reject){
        if (work === "") {
            reject(Error("Nothing"))
            setTimeout(function(){
                resolve(work)
            }, 1000)

                
            })
        }
    })
}