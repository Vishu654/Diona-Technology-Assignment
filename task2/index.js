let worker = {
    name: "Madeleine Willson",
    appId: "712041",
    submitted: "March 19, 2024 19:21",
    claimNo: "20042047"
};

let report = {
    returnDate: "March 15, 2024",
    returnStatus: "Terrible. Testing Testing",
    expectedDate: "",
    concerns: "",
    employerContact: "",
    contactDate: "",
    pain: 5,
    providerType: "",
    lastDate: "",
    lastProvider: "",
    nextDate: "",
    nextProvider: "",
    frequency: "",
    medication: "",
    exercises: "",
    otherInfo: "No info Testing Testing",
    recoveryComments: ""
};

document.getElementById("workerName").innerText = worker.name;
document.getElementById("claimNo").innerText = worker.claimNo;
document.getElementById("appId").innerText = worker.appId;
document.getElementById("appId2").innerText = worker.appId;
document.getElementById("appId3").innerText = worker.appId;
document.getElementById("submitted").innerText = worker.submitted;
document.getElementById("submitted2").innerText = worker.submitted;
document.getElementById("submitted3").innerText = worker.submitted;

document.getElementById("returnDate").innerText = report.returnDate;
document.getElementById("returnStatus").innerText = report.returnStatus;
document.getElementById("expectedDate").innerText = report.expectedDate;
document.getElementById("concerns").innerText = report.concerns;
document.getElementById("employerContact").innerText = report.employerContact;
document.getElementById("contactDate").innerText = report.contactDate;

let painText = "";

for (let i = 1; i <= 10; i++) {

    if (i === report.pain) {
        painText += `<input type="checkbox" checked> ${i}`;
    } else {
        painText += `<input type="checkbox"> ${i}`;
    }

    if (i === 5) {
        painText += "<br>";
    } else {
        painText += "&nbsp;&nbsp;";
    }
}
document.getElementById("painScale").innerHTML = painText;

document.getElementById("providerType").innerText = report.providerType;
document.getElementById("lastDate").innerText = report.lastDate;
document.getElementById("lastProvider").innerText = report.lastProvider;
document.getElementById("nextDate").innerText = report.nextDate;
document.getElementById("nextProvider").innerText = report.nextProvider;
document.getElementById("frequency").innerText = report.frequency;
document.getElementById("medication").innerText = report.medication;
document.getElementById("exerciseText").innerText = report.exercises;
document.getElementById("otherInfo").innerText = report.otherInfo;
document.getElementById("recoveryComments").innerText = report.recoveryComments;