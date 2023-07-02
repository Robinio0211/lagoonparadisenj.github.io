
let slideIndex = 1;
populateSlides();
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
}

function populateSlides() 
{
  let pop = document.getElementById("cont");

  for (let i = 2; i < 43; i++)
  {
    let temp_div = document.createElement('div');
    temp_div.id = "pic"+i;
    temp_div.className = "mySlides fade";

    let temp_inner_div = document.createElement('div');
    temp_inner_div.className = "numbertext";
    temp_inner_div.innerHTML = i + ' / 42';

    let temp_pic = document.createElement('img');
    temp_pic.src = "pics/img"+i+".webp";
    temp_pic.style = "width:100%";
    // temp_pic.style = "height:100%";

    
    temp_div.appendChild(temp_inner_div);
    temp_div.appendChild(temp_pic);

    pop.appendChild(temp_div);

    
  }
  add_prev_next(pop);
  // console.log(pop.innerHTML);
}

function add_prev_next(pop)
{
  // <!-- Next and previous buttons -->
  let prev = document.createElement('a');
  prev.className = "prev";
  prev.setAttribute("onclick", "plusSlides(-1)");
  // prev.onclick = plusSlides(-1);
  prev.innerHTML = "&#10094;" ;
  pop.appendChild(prev);

  let next = document.createElement('a');
  next.className = "next";
  next.setAttribute("onclick", "plusSlides(1)");
  // next.onclick = plusSlides(1);
  next.innerHTML = "&#10095;" ;
  pop.appendChild(next);

}

// function getDates(){
//   const fs = require('fs')
//   var url = "public/Lagoon Pradise NJ/Availability.txt";
//   var text = fs.readFileSync(url).toString();
//   var textByLine = text.split("\n")
//   console.log(textByLine)
//   return textByLine
// }
//let busy = new Array(getDates());

// import {readFileSync, promises as fsPromises} from 'fs';
//const {promises: fsPromises} = require('fs');

// ✅ read file ASYNCHRONOUSLY
// async function asyncReadFile(filename) {
//   try {
//     const contents = await fsPromises.readFile(filename, 'utf-8');//
//     const arr = contents.split(/\r?\n/);
//     return arr;
//   } catch (err) {
//     console.log(err);
//   }
// }
// let busy = ["7/3", "7/4"]; //= asyncReadFile('"public/Lagoon Pradise NJ/Availability.txt"');
// function createCal ()
// {
//   const daysTag = document.querySelector(".days"),
//   currentDate = document.querySelector(".current-date"),
//   prevNextIcon = document.querySelectorAll(".icons span");
//   // getting new date, current year and month
//   let date = new Date(),
//   currYear = date.getFullYear(),
//   currMonth = date.getMonth();
//   // storing full name of all months in array
//   const months = ["January", "February", "March", "April", "May", "June", "July",
//                 "August", "September", "October", "November", "December"];
//   const renderCalendar = (month) => {
//       let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
//       lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
//       lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
//       lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
//       let liTag = "";
//       for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
//           liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//       }
//       for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
//           // adding active class to li if the current day, month, and year matched
//           let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
//                       && currYear === new Date().getFullYear() ? "active" : "";
          
//           let checked = "";
//           for (let j =0; j < busy.length; i++)
//           {
//             if (j == busy[j].split("/")[0] && month == busy[j].split("/")[1])
//               checked = "busy";
//           }
          
          
//           liTag += `<li class="${isToday}${checked}">${i}</li>`;

          
//       }
//       for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
//           liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
//       }
//       currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
//       daysTag.innerHTML = liTag;
//   }
//   renderCalendar(currmonth);
//   prevNextIcon.forEach(icon => { // getting prev and next icons
//       icon.addEventListener("click", () => { // adding click event on both icons
//           // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
//           currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
//           if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
//               // creating a new date of current year & month and pass it as date value
//               date = new Date(currYear, currMonth, new Date().getDate());
//               currYear = date.getFullYear(); // updating current year with new date year
//               currMonth = date.getMonth(); // updating current month with new date month
//           } else {
//               date = new Date(); // pass the current date as date value
//           }
//           renderCalendar(currmonth); // calling renderCalendar function
//       });
//   });

// }
// createCal();



function createCal0()
{
  const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");
  // getting new date, current year and month
  let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
  // storing full name of all months in array
  const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
  const renderCalendar = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
      lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
      let liTag = "";
      for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
          liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }
      for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
          // adding active class to li if the current day, month, and year matched
          let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                      && currYear === new Date().getFullYear() ? "active" : "";

          liTag += `<li class="${isToday}">${i}</li>`;

          
      }
      for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
          liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
      }
      currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
      daysTag.innerHTML = liTag;
  }
  renderCalendar();
  prevNextIcon.forEach(icon => { // getting prev and next icons
      icon.addEventListener("click", () => { // adding click event on both icons
          // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
          currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
          if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
              // creating a new date of current year & month and pass it as date value
              date = new Date(currYear, currMonth, new Date().getDate());
              currYear = date.getFullYear(); // updating current year with new date year
              currMonth = date.getMonth(); // updating current month with new date month
          } else {
              date = new Date(); // pass the current date as date value
          }
          renderCalendar(); // calling renderCalendar function
      });
  });

}
createCal0();

//Menu event handler
document.getElementById("main_btn").addEventListener("click", function (e) {
    document.getElementById("main_page").style.display = "none";
    document.getElementById("amenities").style.display = "none";
    document.getElementById("bayville").style.display = "none";
    document.getElementById("bookings_policies").style.display = "none";
    
    document.getElementById("main_page").style.display = "";
});

document.getElementById("amenities_btn").addEventListener("click", function (e) {
    document.getElementById("main_page").style.display = "none";
    document.getElementById("amenities").style.display = "none";
    document.getElementById("bayville").style.display = "none";
    document.getElementById("bookings_policies").style.display = "none";
    
    document.getElementById("amenities").style.display = "";
});

document.getElementById("bayville_btn").addEventListener("click", function (e) {
    document.getElementById("main_page").style.display = "none";
    document.getElementById("amenities").style.display = "none";
    document.getElementById("bayville").style.display = "none";
    document.getElementById("bookings_policies").style.display = "none";
    
    document.getElementById("bayville").style.display = "";
});

document.getElementById("bookings_policies_btn").addEventListener("click", function (e) {
    document.getElementById("main_page").style.display = "none";
    document.getElementById("amenities").style.display = "none";
    document.getElementById("bayville").style.display = "none";
    document.getElementById("bookings_policies").style.display = "none";
    
    document.getElementById("bookings_policies").style.display = "";
});
