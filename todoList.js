const addButton = document.getElementById("addButton")
const todoTextInput = document.getElementById("todoTextInput")
const listContainer = document.getElementById("listContainer")

addButton.onclick = () => {

    if(todoTextInput.value !== "") {
        // ถ้าใส่ input เข้ามาแล้วกด ADD ให้สร้าง <li> ก่อนแล้วใส่เข้าไปใน list
        const liElement = document.createElement('li')
        listContainer.appendChild(liElement)
        // แล้วเพิ่ม <div> ที่ใส่ input ลงไป และใส่ไว้ใต้ <li>
        const textContainer = document.createElement('div')
        textContainer.append(todoTextInput.value)
        liElement.appendChild(textContainer)
        // แล้วเพิ่ม <span> ใส่ class และ text ให้มันเพื่อทำเป็น icon และใส่ไว้ใต้ <li> ต่อจาก <div>
        const closeIcon = document.createElement('span')
        closeIcon.classList.add("material-symbols-outlined")
        closeIcon.innerHTML = "cancel"
        liElement.appendChild(closeIcon)
        // ทำทุกอย่างเสร็จแล้ว ให้เคลียร์ค่าใน input เป็นว่างๆ
        todoTextInput.value = ""
    } else {
        // ถ้ากด ADD เป็นค่าว่าง ให้ alert ว่าใส่ content ก่อน
        alert("Please add to do list item!")
    }
}

listContainer.addEventListener("click", (e) => {
    console.log(e.target);

    if(e.target.tagName == "DIV") {
        e.target.classList.toggle("crossOver")
        // กด 1 ครั้งเพิ่ม class นี้ มันจะขีดฆ่า กดอีกทีมันจะเอาขีดฆ่าออก
    }
    if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove()
        // กดที่กากบาท parent ของ <span> จะถูกลบออก
    }
})
