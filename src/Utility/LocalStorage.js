const getStoredDataFromLocalStorage=()=>{
const storedData=localStorage.getItem('Donation');
if(storedData){
    return JSON.parse(storedData);
}
else{
    return [];
}
}


const saveDataInLocalStorage=id=>{
const storedData=getStoredDataFromLocalStorage();
const isExists=storedData.find(data=>data===id);
if(!isExists){
    storedData.push(id)
    localStorage.setItem('Donation' ,JSON.stringify(storedData))
}
}


export  {saveDataInLocalStorage,getStoredDataFromLocalStorage }