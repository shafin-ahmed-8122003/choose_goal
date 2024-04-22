let employeeBtn = document.getElementById("employee");
let freelancerBtn = document.getElementById("freelancer");
let entrepreneurBtn = document.getElementById("entrepreneur");

let timeProgressValue = document.getElementById("time");
let moneyProgressValue = document.getElementById("money");
let freedomProgressValue = document.getElementById("freedom");
let riskProgressValue = document.getElementById("risk");

const progressValues = {
    employee: {
        time: "30%",
        money: "35%",
        freedom: "10%",
        risk: "5%",
    },
    freelancer: {
        time: "50%",
        money: "60%",
        freedom: "55%",
        risk: "60%",
    },
    entrepreneur: {
        time: "10%",
        money: "95%",
        freedom: "90%",
        risk: "90%",
    },
};

employeeBtn?.addEventListener("click", () => {
    timeProgressValue!.style.width = progressValues.employee.time;
    moneyProgressValue!.style.width = progressValues.employee.money;
    freedomProgressValue!.style.width = progressValues.employee.freedom;
    riskProgressValue!.style.width = progressValues.employee.risk;
});
freelancerBtn?.addEventListener("click", () => {
    timeProgressValue!.style.width = progressValues.freelancer.time;
    moneyProgressValue!.style.width = progressValues.freelancer.money;
    freedomProgressValue!.style.width = progressValues.freelancer.freedom;
    riskProgressValue!.style.width = progressValues.freelancer.risk;
});
entrepreneurBtn?.addEventListener("click", () => {
    timeProgressValue!.style.width = progressValues.entrepreneur.time;
    moneyProgressValue!.style.width = progressValues.entrepreneur.money;
    freedomProgressValue!.style.width = progressValues.entrepreneur.freedom;
    riskProgressValue!.style.width = progressValues.entrepreneur.risk;
});

let fullScreenBtn = document.getElementById("full-screen");
let isFullScreen = false;
fullScreenBtn?.addEventListener("click", () => {
    if (isFullScreen) {
        document.exitFullscreen();
        isFullScreen = false;
    } else {
        document.documentElement.requestFullscreen();
        isFullScreen = true;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let darkModeBtn = document.getElementById("dark");
    darkModeBtn?.addEventListener("click", () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    });
});
