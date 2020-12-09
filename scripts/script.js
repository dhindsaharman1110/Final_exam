label_item=document.querySelector("#label_01")
input_item=document.querySelector("#effect")
button_item=document.querySelector("#formButton")






label_item.style.visibility="hidden"
input_item.style.visibility="hidden"
button_item.style.visibility="hidden"




function add_images_in_HTML(){


    for (let i=1; i<=5; i++){
        let parent_item=document.querySelector("#thumb-bar")
        let new_img=document.createElement("img")
        let source=document.createAttribute("src")
        source.value="images/pic"+i+".jpg"
        let atr=document.createAttribute("alt")
        atr.value="image-description"
        let img_id=document.createAttribute("id")
        img_id.value="img"+i
        new_img.setAttributeNode(img_id)
        new_img.setAttributeNode(atr)
        new_img.setAttributeNode(source)
        parent_item.appendChild(new_img)

    }
}

add_images_in_HTML()

let thumblain_area=document.querySelector("#thumblain_area")
thumblain_area.addEventListener("mouseover",show_image);

function show_image(event){
    label_item.style.visibility="visible"
    input_item.style.visibility="visible"
    button_item.style.visibility="visible"

    let img_element=document.querySelector(".displayed-img")
    let add_img=document.createAttribute("src")
    let img_id=document.createAttribute("id")
    if (event.target.id== "img1"){
        add_img.value="images/pic1.jpg"
        img_id.value="img1"
    }
    if (event.target.id== "img2"){
        add_img.value="images/pic2.jpg"
        img_id.value="img2"
    }
    if (event.target.id== "img3"){
        add_img.value="images/pic3.jpg"
        img_id.value="img3"
    }
    if (event.target.id== "img4"){
        add_img.value="images/pic4.jpg"
        img_id.value="img4"
    }
    if (event.target.id== "img5"){
        add_img.value="images/pic5.jpg"
        img_id.value="img5"
    }
    img_element.setAttributeNode(add_img)
    img_element.setAttributeNode(img_id)
}


button_item.addEventListener("click", add_image)

function add_image(){
    if (input_item.value==="blur"){
        let img_chng=document.querySelector(".displayed-img")
        let img_ID=img_chng.getAttribute("id")
        let img_element=document.querySelector(".displayed-img")
        let add_img=document.createAttribute("src")
        if (img_ID=="img1"){
            add_img.value="images/pic1B.jpg"
        }
        if (img_ID=="img2"){
            add_img.value="images/pic2B.jpg"
        }
        if (img_ID=="img3"){
            add_img.value="images/pic3B.jpg"
        }
        if (img_ID=="img4"){
            add_img.value="images/pic4B.jpg"
        }
        if (img_ID=="img5"){
            add_img.value="images/pic5B.jpg"
        }
        img_element.setAttributeNode(add_img)
    }

    else{
        alert("Ypu have given the wrong input")
    }

    input_item.value=""

}

