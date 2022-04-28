// CLEAN CODE

const lists = document.querySelectorAll(".list");

function activeLink()
{
    lists.forEach((item, index, arr)=>
    {
        item.classList.remove("active");
        this.classList.add("active");
    });
};

lists.forEach((item)=> item.addEventListener("click", activeLink));


// ROUGH CODE

// const list = document.querySelectorAll(".list");

// list[0].addEventListener("click", function()
// {
//     list[0].classList.add("active");
//     // REMOVE ALL .active classes
//     list[1].classList.remove("active");
//     list[2].classList.remove("active");
//     list[3].classList.remove("active");
//     list[4].classList.remove("active");
// });

// list[1].addEventListener("click", function()
// {
//     list[1].classList.add("active");
//     // REMOVE ALL .active classes
//     list[0].classList.remove("active");
//     list[2].classList.remove("active");
//     list[3].classList.remove("active");
//     list[4].classList.remove("active");
// });

// list[2].addEventListener("click", function()
// {
//     list[2].classList.add("active");
//     // REMOVE ALL .active classes
//     list[0].classList.remove("active");
//     list[1].classList.remove("active");
//     list[3].classList.remove("active");
//     list[4].classList.remove("active");
// });

// list[3].addEventListener("click", function()
// {
//     list[3].classList.add("active");
//     // REMOVE ALL .active classes
//     list[0].classList.remove("active");
//     list[1].classList.remove("active");
//     list[2].classList.remove("active");
//     list[4].classList.remove("active");
// });

// list[4].addEventListener("click", function()
// {
//     list[4].classList.add("active");
//     // REMOVE ALL .active classes
//     list[0].classList.remove("active");
//     list[1].classList.remove("active");
//     list[2].classList.remove("active");
//     list[3].classList.remove("active");
// });