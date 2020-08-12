const currentDay = $("#currentDay").text(moment().format('MMMM Do YYYY'))
const currentTime = moment().format('HH')

$("#currentDay").append(currentDay);

$("#btn").on("click", function () {
  if ($("#9am-block").val() !== "") {
    localStorage.setItem("9am", $("#9am-block").val());
    alert("Schedule Saved");
  }
});
$("#btn10").on("click", function () {
  if ($("#10am-block").val() !== "") {
    localStorage.setItem("10am", $("#10am-block").val());
    alert("Schedule Saved");
  }
});

$("#btn11").on("click", function () {
  if ($("#11am-block").val() !== "") {
    localStorage.setItem("11am", $("#11am-block").val());
    alert("Schedule Saved");
  }
});
$("#btn12").on("click", function () {
  if ($("#12pm-block").val() !== "") {
    localStorage.setItem("12pm", $("#12pm-block").val());
    alert("Schedule Saved");
  }
});

$("#btn1").on("click", function () {
  if ($("#1pm-block").val() !== "") {
    localStorage.setItem("1pm", $("#1pm-block").val());
    alert("Schedule Saved");
  }
});

$("#btn2").on("click", function () {
  if ($("#2pm-block").val() !== "") {
    localStorage.setItem("2pm", $("#2pm-block").val());
    alert("Schedule Saved");
  }
});

$("#btn3").on("click", function () {
  if ($("#3pm-block").val() !== "") {
    localStorage.setItem("3pm", $("#3pm-block").val());
    alert("Schedule Saved");
  }
});

$("#btn4").on("click", function () {
  if ($("#4pm-block").val() !== "") {
    localStorage.setItem("4pm", $("#4pm-block").val());
    alert("Schedule Saved");
  }
});

$("#btn5").on("click", function () {
  if ($("#5pm-block").val() !== "") {
    localStorage.setItem("5pm", $("#5pm-block").val());
    alert("Schedule Saved");
  }
});

$("#9am-block").val(localStorage.getItem("9am"));
$("#10am-block").val(localStorage.getItem("10am"));
$("#11am-block").val(localStorage.getItem("11am"));
$("#12pm-block").val(localStorage.getItem("12pm"));
$("#1pm-block").val(localStorage.getItem("1pm"));
$("#2pm-block").val(localStorage.getItem("2pm"));
$("#3pm-block").val(localStorage.getItem("3pm"));
$("#4pm-block").val(localStorage.getItem("4pm"));
$("#5pm-block").val(localStorage.getItem("5pm"));


