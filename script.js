var employeeBtn = document.getElementById("employee");
var freelancerBtn = document.getElementById("freelancer");
var entrepreneurBtn = document.getElementById("entrepreneur");
var timeProgressValue = document.getElementById("time");
var moneyProgressValue = document.getElementById("money");
var freedomProgressValue = document.getElementById("freedom");
var riskProgressValue = document.getElementById("risk");
var progressValues = {
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
employeeBtn === null || employeeBtn === void 0 ? void 0 : employeeBtn.addEventListener("click", function () {
    timeProgressValue.style.width = progressValues.employee.time;
    moneyProgressValue.style.width = progressValues.employee.money;
    freedomProgressValue.style.width = progressValues.employee.freedom;
    riskProgressValue.style.width = progressValues.employee.risk;
});
freelancerBtn === null || freelancerBtn === void 0 ? void 0 : freelancerBtn.addEventListener("click", function () {
    timeProgressValue.style.width = progressValues.freelancer.time;
    moneyProgressValue.style.width = progressValues.freelancer.money;
    freedomProgressValue.style.width = progressValues.freelancer.freedom;
    riskProgressValue.style.width = progressValues.freelancer.risk;
});
entrepreneurBtn === null || entrepreneurBtn === void 0 ? void 0 : entrepreneurBtn.addEventListener("click", function () {
    timeProgressValue.style.width = progressValues.entrepreneur.time;
    moneyProgressValue.style.width = progressValues.entrepreneur.money;
    freedomProgressValue.style.width = progressValues.entrepreneur.freedom;
    riskProgressValue.style.width = progressValues.entrepreneur.risk;
});
var fullScreenBtn = document.getElementById("full-screen");
var isFullScreen = false;
fullScreenBtn === null || fullScreenBtn === void 0 ? void 0 : fullScreenBtn.addEventListener("click", function () {
    if (isFullScreen) {
        document.exitFullscreen();
        isFullScreen = false;
    }
    else {
        document.documentElement.requestFullscreen();
        isFullScreen = true;
    }
});
