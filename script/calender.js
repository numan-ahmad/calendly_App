
          var dt = new Date();
          function renderDate() {
              dt.setDate(1);
              var day = dt.getDay();
              var today = new Date();
              var endDate = new Date(
                  dt.getFullYear(),
                  dt.getMonth() + 1,
                  0
              ).getDate();
  
              var prevDate = new Date(
                  dt.getFullYear(),
                  dt.getMonth(),
                  0
              ).getDate();
              var months = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"
              ]
              let a= months[dt.getMonth()];
              a+= " " + dt.getFullYear();
              document.getElementById("date_str").innerHTML=a;
              var cells = "";
              for (x = day; x > 0; x--) {
                  cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
              }
              for (i = 1; i <= endDate; i++) {
                  if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
                  else
                      cells += "<div id='div_btn' onclick='hello("+i+","+dt.getMonth()+")'>" + i + "</div>";
              }
              document.getElementsByClassName("days")[0].innerHTML = cells;
          
}
  
          function moveDate(para) {
              if(para == "prev") {
                  dt.setMonth(dt.getMonth() - 1);
              } else if(para == 'next') {
                  dt.setMonth(dt.getMonth() + 1);
              }
              renderDate();
          
            }


           function hello(date,month){
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
               let a= months[month];
              
               cells="<div id='append_div'><h2 id='date_str'>"+date +" "+ a+"<br><br></h2><button onclick='click_fun(1)' id='select_time_btn'>9:00 Am</button><button onclick='click_fun(2)' id='select_time_btn'>10:00 AM</button><button onclick='click_fun(3)' id='select_time_btn'>11:00 AM</button><button onclick='click_fun(4)' id='select_time_btn'>12:00 AM</button><button onclick='click_fun(5)' id='select_time_btn'>3:00 PM</button></div>"
               document.getElementById("schedule-div").innerHTML+=cells;
               console.log(date)
           }

          
           function click_fun(schdul_time){
            var set_time=[
                "9:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 AM",
                "3:00 PM"
            ]
               console.log(set_time[schdul_time])
               location.href = 'register.html';

           }









          