

export const APIENDPOINT = "https://calm-basin-73408.herokuapp.com/api";

export const getHeader = function () {
    const tokenData = JSON.parse(window.localStorage.getItem('lbUser'))
    const headers = {
        'Accept':'application/json',
        'Authorization':'Bearer' + tokenData.access_token 
       }
       return headers
}