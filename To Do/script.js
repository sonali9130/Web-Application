let input=document.querySelector("#input-1");
input.addEventListener("keypress",function(e){
    if(e.code=="Enter"){
        let ul=document.querySelector("#ul-1");
        let li=document.createElement("li");
        li.innerText=e.currentTarget.value;
        ul.append(li);
        li.addEventListener("dblclick",function(e){
            e.currentTarget.remove();
        });
        e.currentTarget.value="";
    }
});
