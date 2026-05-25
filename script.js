let listArray = document.getElementsByTagName('ol')
let list = listArray[0]
let butt = document.getElementById("butt")
let counter = 0
function func(){
    let buttUsun = document.createElement('button')
    buttUsun.textContent = "Usun"
    buttUsun.onclick = function(){funcUsun(counter)}
    let el = document.createElement('li')
    el.textContent = counter + " "
    el.appendChild(buttUsun)
    list.appendChild(el)
    counter++
    console.log(el)

}
function funcUsun(elNum){
    console.log(elNum)
    let elementsOfList = list.getElementsByTagName('li')
    for(let i = 0; i<elementsOfList.length; i++){
        if(elNum == i){
            let elToRemove = elementsOfList[i]
            console.log(elToRemove)
            list.removeChild(elToRemove)
        }
    }
}
