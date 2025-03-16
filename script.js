// script.js

// عرض رسالة عند النقر على الزر
document.getElementById("showMessageBtn").addEventListener("click", function() {
    document.getElementById("output").textContent = "هذا موقعي الأول.";
});

// إضافة عنصر جديد إلى القائمة
document.getElementById("addItemBtn").addEventListener("click", function() {
    const list = document.getElementById("myList");
    const newItem = document.createElement("li");
    newItem.textContent = "عنصر جديد";
    list.appendChild(newItem);
});