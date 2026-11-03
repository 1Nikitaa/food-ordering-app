
const dummyResList = 'https://indiarestros.com/api/v1/restaurants';
const resPageInfo= 'https://indiarestros.com/api/v1/restaurants'
//https://indiarestros.com/api/docs?utm_source=chatgpt.com API DOC

async function getResList(){
    try {
     let response = await fetch(dummyResList);
        if(!response.ok){
        throw new Error('Error getting data')
        }
        let data = await response.json();
        return data;
     
    }
    catch(error){
        console.error(error)
    }
}
async function getResturantPage(id){
    try{
        console.log('id',id)
        let response = await fetch(`${resPageInfo}/${id}`);
        if(!response.ok){
            throw new Error('error getting res data')
        }
        let data = await response.json();
        return data;
    }
    catch(error){
        console.log(error)
    }

}
export { getResList ,getResturantPage}