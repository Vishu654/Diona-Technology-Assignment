
/* =========================================================================
   DATA (JS JSON)
   This is the exact data used to render the page below. Edit any value
   here manually and reload — the page has no hard-coded values in the HTML.
   ========================================================================= */

const claimData = {
  claimNo: "20042047",
  workerName: "Madeleine Willson",
  workerAppId: "712041",
  submittedAt: "March 28, 2024 20:43",
  pageNum: 1,
  pageTotal: 2,
  org: {
    addressLines: ["333 Broadway", "Winnipeg, MB R3C 4W3", "Phone: (204) 954-4321", "Toll Free: 1-855-954-4321", "wcb.mb.ca"]
  },
  prescriptionDrugs: [
    { drugName: "Naproxen", prescriptionDate: "February 28, 2024", datePurchased: "February 29, 2024", providerName: "Dr. Best", paidAmount: "$20.00" },
    { drugName: "Amoxicillin", prescriptionDate: "January 5, 2025", datePurchased: "January 6, 2025", providerName: "Dr. Smith", paidAmount: "$15.50" },
    { drugName: "Ibuprofen", prescriptionDate: "January 12, 2025", datePurchased: "January 13, 2025", providerName: "Dr. Johnson", paidAmount: "$12.00" },
    { drugName: "Metformin", prescriptionDate: "February 3, 2025", datePurchased: "February 4, 2025", providerName: "Dr. Patel", paidAmount: "$22.75" },

    
  ],
  otcDrugs: [
    { drugName: "Advil", datePurchased: "March 28, 2024", paidAmount: "$8.00", sellerName: "Shoppers Drug Mart", reason: "Pain" },
    { drugName: "Tylenol", datePurchased: "April 2, 2024", paidAmount: "$9.50", sellerName: "CVS Pharmacy", reason: "Headache" },
    { drugName: "Aleve", datePurchased: "April 15, 2024", paidAmount: "$11.25", sellerName: "Walgreens", reason: "Back Pain" },
    { drugName: "Claritin", datePurchased: "April 24, 2024", paidAmount: "$14.75", sellerName: "Rexall Pharmacy", reason: "Allergy" },
    { drugName: "Benadryl", datePurchased: "May 3, 2024", paidAmount: "$10.00", sellerName: "Shoppers Drug Mart", reason: "Allergy" },
    { drugName: "Pepto-Bismol", datePurchased: "May 12, 2024", paidAmount: "$7.85", sellerName: "Walmart Pharmacy", reason: "Stomach Upset" },
    { drugName: "Reactine", datePurchased: "May 21, 2024", paidAmount: "$16.40", sellerName: "London Drugs", reason: "Seasonal Allergy" },

    
  ],
  supplies: [
    { itemPurchased: "Tensor", datePurchased: "February 28, 2024", wasPrescribed: "Yes", providerName: "Dr. Best", paidAmount: "$10.00", sellerName: "Shoppers DrugMart" }
  ],
  parking: [
    { address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "March 28, 2024", paidAmount: "$10.00", meterUsed: "yes", meterNumber: "12245" }
  ],
  mileage: [
    { appointmentDate: "March 28, 2024", providerAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "20 km" }
  ],
  busTaxi: [
    { appointmentDate: "March 28, 2024", startAddress: "", providerAddress: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", type: "Bus", fare: "$3.00" },
    { appointmentDate: "March 27, 2024", startAddress: "25 Furby St, Winnipeg MB R3C2A2, Canada", providerAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", type: "Taxi", fare: "$15.00" }
  ]
};

/* =========================================================================
   OTHER TEST JSON DATA SETS (for manual testing only)
   Not wired to the page automatically. To try one, copy its contents over
   claimData above (or set: const claimData = testDataMinimal;) and reload.
   ========================================================================= */

// Test case 1: minimal claim — exactly ONE row in every table
const testDataMinimal = {
  claimNo: "20044100",
  workerName: "Ravi Chandran",
  workerAppId: "718820",
  submittedAt: "June 4, 2024 09:12",
  pageNum: 1,
  pageTotal: 1,
  org: {
    addressLines: ["333 Broadway", "Winnipeg, MB R3C 4W3", "Phone: (204) 954-4321", "Toll Free: 1-855-954-4321", "wcb.mb.ca"]
  },
  prescriptionDrugs: [
    { drugName: "Ibuprofen", prescriptionDate: "May 30, 2024", datePurchased: "May 31, 2024", providerName: "Dr. Osei", paidAmount: "$14.50" }
  ],
  otcDrugs: [
    { drugName: "Tylenol", datePurchased: "June 1, 2024", paidAmount: "$9.25", sellerName: "Walmart Pharmacy", reason: "Headache" }
  ],
  supplies: [
    { itemPurchased: "Wrist Brace", datePurchased: "June 1, 2024", wasPrescribed: "No", providerName: "—", paidAmount: "$22.00", sellerName: "London Drugs" }
  ],
  parking: [
    { address: "409 Tache Ave, Winnipeg MB R2H 2A6, Canada", date: "June 3, 2024", paidAmount: "$6.00", meterUsed: "no", meterNumber: "—" }
  ],
  mileage: [
    { appointmentDate: "June 3, 2024", providerAddress: "St. Boniface Hospital, 409 Tache Ave, Winnipeg MB R2H 2A6, Canada", workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "14 km" }
  ],
  busTaxi: [
    { appointmentDate: "June 3, 2024", startAddress: "12 Alexander Ave, Winnipeg MB, Canada", providerAddress: "St. Boniface Hospital, 409 Tache Ave, Winnipeg MB R2H 2A6, Canada", type: "Bus", fare: "$2.75" }
  ]
};

// Test case 2: extensive claim — MANY rows, and some sections empty
const testDataExtensive = {
  claimNo: "20051873",
  workerName: "Priya Nakamura",
  workerAppId: "731055",
  submittedAt: "August 19, 2024 15:47",
  pageNum: 1,
  pageTotal: 3,
  org: {
    addressLines: ["333 Broadway", "Winnipeg, MB R3C 4W3", "Phone: (204) 954-4321", "Toll Free: 1-855-954-4321", "wcb.mb.ca"]
  },
  prescriptionDrugs: [
    { drugName: "Naproxen", prescriptionDate: "July 2, 2024", datePurchased: "July 3, 2024", providerName: "Dr. Best", paidAmount: "$20.00" },
    { drugName: "Gabapentin", prescriptionDate: "July 10, 2024", datePurchased: "July 11, 2024", providerName: "Dr. Best", paidAmount: "$45.00" },
    { drugName: "Cyclobenzaprine", prescriptionDate: "July 22, 2024", datePurchased: "July 23, 2024", providerName: "Dr. Okafor", paidAmount: "$18.75" },
    { drugName: "Diclofenac Gel", prescriptionDate: "August 1, 2024", datePurchased: "August 2, 2024", providerName: "Dr. Best", paidAmount: "$27.40" }
  ],
  otcDrugs: [
    { drugName: "Advil", datePurchased: "July 5, 2024", paidAmount: "$8.00", sellerName: "Shoppers Drug Mart", reason: "Pain" },
    { drugName: "Tylenol Extra Strength", datePurchased: "July 15, 2024", paidAmount: "$11.50", sellerName: "Rexall", reason: "Pain" },
    { drugName: "Robaxacet", datePurchased: "August 5, 2024", paidAmount: "$13.20", sellerName: "Shoppers Drug Mart", reason: "Muscle spasm" }
  ],
  supplies: [], // empty section on purpose
  parking: [
    { address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "July 3, 2024", paidAmount: "$10.00", meterUsed: "yes", meterNumber: "12245" },
    { address: "820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", date: "July 11, 2024", paidAmount: "$8.50", meterUsed: "yes", meterNumber: "40892" },
    { address: "115 Lyon St, Winnipeg MB, Canada", date: "July 23, 2024", paidAmount: "$0.00", meterUsed: "no", meterNumber: "—" },
    { address: "409 Tache Ave, Winnipeg MB R2H 2A6, Canada", date: "August 2, 2024", paidAmount: "$12.00", meterUsed: "yes", meterNumber: "77213" }
  ],
  mileage: [
    { appointmentDate: "July 3, 2024", providerAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", workplaceAddress: "425 Elgin Ave, Winnipeg MB, Canada", km: "20 km" },
    { appointmentDate: "July 11, 2024", providerAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplaceAddress: "425 Elgin Ave, Winnipeg MB, Canada", km: "18 km" },
    { appointmentDate: "August 2, 2024", providerAddress: "St. Boniface Hospital, 409 Tache Ave, Winnipeg MB R2H 2A6, Canada", workplaceAddress: "425 Elgin Ave, Winnipeg MB, Canada", km: "16 km" }
  ],
  busTaxi: [] // empty section on purpose
};

// Test case 3: zero rows in every section (edge case)
const testDataEmpty = {
  claimNo: "20099999",
  workerName: "Sample Worker",
  workerAppId: "700000",
  submittedAt: "January 1, 2024 00:00",
  pageNum: 1,
  pageTotal: 1,
  org: {
    addressLines: ["333 Broadway", "Winnipeg, MB R3C 4W3", "Phone: (204) 954-4321", "Toll Free: 1-855-954-4321", "wcb.mb.ca"]
  },
  prescriptionDrugs: [],
  otcDrugs: [],
  supplies: [],
  parking: [],
  mileage: [],
  busTaxi: []
};

/* =========================================================================
   RENDER
   Fills every element on the page from claimData. Tables with zero rows
   render a single "No records" placeholder row instead of an empty <tbody>.
   ========================================================================= */

function el(tag, className, text){
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderRows(tbodyId, rows, colCount, rowBuilder){
  const tbody = document.querySelector(`#${tbodyId} tbody`);
  tbody.innerHTML = "";
  if (!rows || rows.length === 0){
    const tr = document.createElement("tr");
    const td = el("td", "empty-row", "No records submitted for this section");
    td.colSpan = colCount;
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }
  rows.forEach(row => tbody.appendChild(rowBuilder(row)));
}

function makeRow(values){
  const tr = document.createElement("tr");
  values.forEach(v => {
    const td = el("td", "cell-link", v);
    tr.appendChild(td);
  });
  return tr;
}

function renderDocument(data){
  document.getElementById("claimNo").textContent = data.claimNo;
  document.getElementById("workerName").textContent = data.workerName;
  document.getElementById("workerAppId").textContent = data.workerAppId;
  document.getElementById("submittedAt").textContent = data.submittedAt;
  document.getElementById("pageTotal").textContent = data.pageTotal;

  document.getElementById("workerAppId2").textContent = data.workerAppId;
  document.getElementById("submittedAt2").textContent = data.submittedAt;
  document.getElementById("pageTotal2").textContent = data.pageTotal;

  const addr = document.getElementById("orgAddress");
  addr.innerHTML = "";
  data.org.addressLines.forEach(line => addr.appendChild(el("div", null, line)));

  renderRows("tbl-prescription", data.prescriptionDrugs, 5, r =>
    makeRow([r.drugName, r.prescriptionDate, r.datePurchased, r.providerName, r.paidAmount]));

  renderRows("tbl-otc", data.otcDrugs, 5, r =>
    makeRow([r.drugName, r.datePurchased, r.paidAmount, r.sellerName, r.reason]));

  renderRows("tbl-supplies", data.supplies, 6, r =>
    makeRow([r.itemPurchased, r.datePurchased, r.wasPrescribed, r.providerName, r.paidAmount, r.sellerName]));

  renderRows("tbl-parking", data.parking, 5, r =>
    makeRow([r.address, r.date, r.paidAmount, r.meterUsed, r.meterNumber]));

  renderRows("tbl-mileage", data.mileage, 4, r =>
    makeRow([r.appointmentDate, r.providerAddress, r.workplaceAddress, r.km]));

  renderRows("tbl-fare", data.busTaxi, 5, r =>
    makeRow([r.appointmentDate, r.startAddress, r.providerAddress, r.type, r.fare]));
}

// Manual render call — swap claimData for testDataMinimal / testDataExtensive / testDataEmpty to test
renderDocument(claimData);