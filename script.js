let datas = [];
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    datas = data;
    getDaily();
  })
  .catch((error) => {
    console.error("Error fetching the JSON data:", error);
  });

const hrs = document.querySelectorAll("#hr");
const lastUsed = document.querySelectorAll("#lastused");
const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");

function getDaily() {
  dailyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
  weeklyBtn.classList.remove("active");
  hrs.forEach((hr, i) => {
    hr.innerHTML = datas[i].timeframes.daily.current;
  });
  lastUsed.forEach((previous, i) => {
    previous.innerHTML = `Last Day - ${datas[i].timeframes.daily.previous}hrs`;
  });
}

function getWeekly() {
  weeklyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
  dailyBtn.classList.remove("active");
  hrs.forEach((hr, i) => {
    hr.innerHTML = datas[i].timeframes.weekly.current;
  });
  lastUsed.forEach((previous, i) => {
    previous.innerHTML = `Last Week - ${datas[i].timeframes.weekly.previous}hrs`;
  });
}

function getMonthly() {
  monthlyBtn.classList.add("active");
  dailyBtn.classList.remove("active");
  weeklyBtn.classList.remove("active");
  hrs.forEach((hr, i) => {
    hr.innerHTML = datas[i].timeframes.monthly.current;
  });
  lastUsed.forEach((previous, i) => {
    previous.innerHTML = `Last Month - ${datas[i].timeframes.monthly.previous}hrs`;
  });
}
