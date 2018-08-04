var body = document.body
var homesection = document.getElementById('homesection')

function weddingplanner(){
    var bulan = document.getElementById('countdown').value

    var item = document.getElementById('inputlist').value
    // console.log(item)
    var text = document.createTextNode(item)
    var newItem = document.createElement('li')
    newItem.appendChild(text)

    if(item === ''){
     message('tidak boleh kosong')   
    }
    else{
        document.getElementById(bulan).appendChild(newItem)
        document.getElementById('weddingform').reset()
    }
}


    

    