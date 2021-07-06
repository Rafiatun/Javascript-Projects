const title=document.querySelector("#title");
const author=document.querySelector("#author");
const year=document.querySelector("#year");
const button=document.querySelector(".btn");
const booklist=document.querySelector("#book_list");


button.addEventListener('click', function(e){
    e.preventDefault();
    if (title.value == '' && author.value == '' && year.value == '')
    {
        alert('Please give information');
    } 
    else {
        const newrow=document.createElement('tr');

        const newtitle = document.createElement('th');
        newtitle.innerHTML = title.value;
        newrow.appendChild(newtitle);

        const newauthor = document.createElement('th');
        newauthor.innerHTML = author.value;
        newrow.appendChild(newauthor);

        const newyear = document.createElement('th');
        newyear.innerHTML = year.value;
        newrow.appendChild(newyear);

        booklist.appendChild(newrow)

    }
});
