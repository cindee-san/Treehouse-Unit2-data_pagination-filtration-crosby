
//This function will create and insert/append the elements needed to display a "page" of nine students
function showPage(list, page){
   const startIndex = (page * 9) - 9 ;
   const endIndex = page * 9 ;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
  // This for loop will loop through the list of students and insert the student information on the page, 9 students at a time
 for (i = 0; i < list.length; i++) {
   if(i>= startIndex && i < endIndex){
      var studentItem = 
         `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src= ${list[i].picture.large} alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
         </li>`;
       studentList.insertAdjacentHTML('beforeend', studentItem);
   }
  }
}

showPage(data, 1);

//This function will create and append the elements needed for the pagination buttons
function addPagination(list) {
   const numOfPages = Math.ceil(list.length / 9)
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   //this loop will start the button from page 1, and then insert as many buttons as there are pages
   //based on 9 students per page, and append to the bottom of the page
   for(let i= 1; i <= numOfPages; i++){
      const button = `<li> <button type="button">${i}</button></li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }
   let firstButton = document.querySelector('button');
   firstButton.className = 'active';
   // In this event listener, When a different pagination button is clicked than the active one,
   // the active class will move to the clicked button and disappear from the previously active button.
   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON') {
         let currentActiveBtn = document.querySelector('.active');
         currentActiveBtn.className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   }); 
 }

addPagination(data);

//add search bar maybe next time!

// function addSearchBar(page){
//   const searchLabel = document.querySelector('.header');
//    const searchForm = document.createElement('form');
//    searchLabel.append(searchForm);
//    searchForm.innerHTML = `<label for="search" class="student-search">
//    <span>Search by name</span>
//    <input id="search" placeholder="Search by name...">
//    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
//  </label>`;
// }

//function to perform search, maybe next time.

// const searchName = document.getElementById('search');
// const submit = document.querySelector(searchName);

// console.log(searchName);
// console.log(submit);

// function goSearch(searchName, studentNames){
//    console.log(searchName);
//    console.log(names);
   
//    for(let i=0; i< studentList.length; i++){
//      studentList[i].classList.remove('match');
     
//      if(searchInput.value.length !== 0 &&    studentList[i].textContent.toLowerCase().includes(searchName.value.toLowerCase())){
//      student.List[i].classList.add('match');
//      }
//    }
 
//  }
addSearchBar(1);