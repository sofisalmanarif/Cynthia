var arr=[
    {
        dp:"https://images.unsplash.com/photo-1703024708870-c3d1201aec2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1703008948807-354be77fa6a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },  
    {
        dp:"https://images.unsplash.com/photo-1703008948807-354be77fa6a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp:"https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1703024708870-c3d1201aec2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
let data=""
arr.forEach(function(elem,idx){
    // console.log(elem)
    data +=`<div class="story">
    <img id="${idx}"src="${elem.dp}">
</div>`
    console.log(data)
})


document.querySelector(".section").innerHTML=data;
let section=document.querySelector(".section");
section.addEventListener("click",function(dets){
    console.log(arr[dets.target.id].story)
    
let view = document.querySelector(".view")
view.style.display="block"
view.style.backgroundImage=`url(${arr[dets.target.id].story})`

setTimeout(function(){
    view.style.display="none"
},2000)
})