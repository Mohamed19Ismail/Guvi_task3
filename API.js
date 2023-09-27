let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all' ,true)

xhr.send()

xhr.onload = function(){
    var data = JSON.parse(this.response)
    console.log("data",data)
    for(var i in data){
        console.log(" ")
        console.log("Country Name:",data[i].name.common)
        console.log("Flags:",data[i].flags)
        console.log("Region :",data[i].region)
        console.log("SubRegion:",data[i].subregion)
        console.log("population:",data[i].population) 
    }  
}

