function getMyIpHttp() {
    
    var request = new XMLHttpRequest()


    request.open('GET', 'https://api.ipify.org?format=json', true)
    request.onload = function (resp) {
        console.log(resp)
        console.log(resp.target.response)
    }


    request.send()

}