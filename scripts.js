const issueTemplates = {
    "MultiWifi - Hinder": [
        "Access ID:",
        "MultiWifi ID:",
        "Company name:",
        "Customer ID:",
        "Street Housenumber:",
        "ZIP code:",
        "Technical contact name:",
        "Technical contact phonenumber:",
        "Technical contact E-mail:",
        "CM MAC:",
        "VTP / KTA:",
        "SSID:",
        "Access Points Macs & Models:",
        "Access Points Ruckus status:",
        "Mac address of an impacted device:",
        "LED status modem:",
        "LED status Access Points:",
        "Issue description:",
        "Business Impact:",
        "Frequency:",
        "Occurring since:",
        "Example timestamp of when the issue occurred:",
        "Additional comments & taken actions:"
    ],
        "MultiWifi - No Connection": [
            "Access ID:",
            "MultiWifi ID:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "CM MAC:",
            "VTP / KTA:",
            "Issue description:",
            "Business Impact:",
            "LED status modem:",
            "Frequency:",
            "Occurring since:",
            "Additional comments & taken actions:"
        ],
        "Telefonie - Feature Issues": [
            "SIPEU:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "Issue description:",
            "Business Impact:",
            "Additional comments & taken actions:"
        ],
        "Telefonie - No in- or outgoing calls": [
            "SIPEU:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "Phonenumber:",
            "Issue description:",
            "Business Impact:",
            "LED status modem:",
            "LED status phone:",
            "Frequency:",
            "Occurring since:",
            "Additional comments & taken actions:"
        ],
        "Telefonie - One way audio": [
            "SIPEU:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "Phonenumber:",
            "Issue description:",
            "Business Impact:",
            "Frequency:",
            "Occurring since:",
            "Additional comments & taken actions:"
        ],
        "Telefonie - Quality issues": [
            "SIPEU:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "CM MAC:",
            "Gateway:",
            "IP Address:",
            "Subnetmasker:",
            "VTP / KTA:",
            "Phonenumber:",
            "Occurring since:",
            "Issue description:",
            "Frequency:",
            "The quality issues occur with:",
            "Who experiences the quality issues:",
            "3 Call examples no older than 48 hours:",
            "Additional comments & taken actions:"
        ],
        "Data - No Connection": [
            "Access ID:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "CM MAC:",
            "Gateway:",
            "IP Address:",
            "Subnetmasker:",
            "VTP / KTA:",
            "Issue description:",
            "Business Impact:",
            "LED status modem:",
            "Frequency:",
            "Occurring since:",
            "Additional comments & taken actions:"
        ],
        "Data - Packetloss": [
            "Access ID:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "CM MAC:",
            "Gateway:",
            "IP Address:",
            "Subnetmasker:",
            "VTP / KTA:",
            "Packetloss description:",
            "Business Impact:",
            "Occurring since:",
            "Additional comments & taken actions:"
        ],
        "Data - Performance Issue": [
            "Access ID:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "CM MAC:",
            "Gateway:",
            "IP Address:",
            "Performance issue description:",
            "Business Impact:",
            "Occurring since:",
            "Additional comments & taken actions:"
        ],
        "Data - Speed Issues": [
            "Access ID:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "CM MAC:",
            "Gateway:",
            "IP Address:",
            "Subnetmasker:",
            "VTP / KTA:",
            "Measured speed:",
            "Expected speed:",
            "Business Impact:",
            "LED status modem:",
            "Frequency:",
            "Occurring since:",
            "Additional comments & taken actions:"
        ],
        "Data - Reachability IP": [
            "Access ID:",
            "Company name:",
            "Customer ID:",
            "Street Housenumber:",
            "ZIP code:",
            "Technical contact name:",
            "Technical contact phonenumber:",
            "Technical contact E-mail:",
            "IP address impacted:",
            "Reachability issue description:",
            "Business Impact:",
            "Occurring since:",
            "Additional comments & taken actions:"
        ]
};

const form = document.getElementById("template-form");
const dynamicFieldsDiv = document.getElementById("dynamic-fields");
const templateOutput = document.getElementById("template-output");
const summaryOutput = document.getElementById("summary-output");
const summaryBar = document.getElementById("summary-bar");

document.getElementById("issue-type").addEventListener("change", updateSummary);
document.getElementById("priority").addEventListener("change", updateSummary);

function updateSummary() {
    const priority = document.getElementById("priority").value;
    const issueType = document.getElementById("issue-type").value;
    const customer = dynamicFieldsDiv.querySelector("input[label='Company name:']")?.value || "Customer";
    let accessID = dynamicFieldsDiv.querySelector("input[label='Access ID:']")?.value;

    if (!accessID && (issueType.startsWith("Telefonie"))) {
        accessID = dynamicFieldsDiv.querySelector("input[label='SIPEU:']")?.value || "SIPEU";
    }

    summaryBar.value = `${priority || "Priority"} || ${customer} || ${accessID || "Access ID"} || ${issueType || "Issue Type"}`;
    summaryOutput.textContent = `${priority || "Priority"} || ${customer} || ${accessID || "Access ID"} || ${issueType || "Issue Type"}`;
}

document.getElementById("issue-type").addEventListener("change", function () {
    const issueType = this.value;
    dynamicFieldsDiv.innerHTML = "";

    if (issueTemplates[issueType]) {
        issueTemplates[issueType].forEach(field => {
            const div = document.createElement("div");
            div.classList.add("form-group");

            const label = document.createElement("label");
            label.textContent = field;

            const input = document.createElement("input");
            input.type = "text";
            input.setAttribute("label", field);

            div.appendChild(label);
            div.appendChild(input);
            dynamicFieldsDiv.appendChild(div);
        });
    }
    updateSummary();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const priority = document.getElementById("priority").value;
    const issueType = document.getElementById("issue-type").value;
    const inputs = dynamicFieldsDiv.querySelectorAll("input");

    if (!priority || !issueType) {
        alert("Please fill out all fields.");
        return;
    }

    let generatedTemplate = `Priority: ${priority}\n\n`;

    inputs.forEach(input => {
        const label = input.previousElementSibling.textContent;
        const value = input.value;
        generatedTemplate += `${label} ${value}\n`;
    });

    templateOutput.textContent = generatedTemplate;

    updateSummary();
});

