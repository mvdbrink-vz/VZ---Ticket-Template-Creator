const issueTemplates = {
    "MultiWifi - Hinder": [
        { label: "Access ID:", type: "input" },
        { label: "MultiWifi ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "SSID:", type: "input" },
        { label: "Access Points Macs & Models:", type: "input" },
        { label: "Access Points Ruckus status:", type: "input" },
        { label: "Mac address of an impacted device:", type: "input" },
        { label: "LED status modem:", type: "input" },
        { label: "LED status Access Points:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Example timestamp of when the issue occurred:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "MultiWifi - No Connection": [
        { label: "Access ID:", type: "input" },
        { label: "MultiWifi ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "LED status modem:", type: "input" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Telefonie - Feature Issues": [
        { label: "SIPEU:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Telefonie - No in- or outgoing calls": [
        { label: "SIPEU:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "Phonenumber:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "LED status modem:", type: "input" },
        { label: "LED status phone:", type: "input" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Telefonie - One way audio": [
        { label: "SIPEU:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "Phonenumber:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Telefonie - Quality issues": [
        { label: "SIPEU:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Subnetmasker:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Phonenumber:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Frequency:", type: "input" },
        { label: "The quality issues occur with:", type: "textarea" },
        { label: "Who experiences the quality issues:", type: "textarea" },
        { label: "3 Call examples no older than 48 hours:", type: "textarea" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - No Connection": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Subnetmasker:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "LED status modem:", type: "input" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - Packetloss": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Subnetmasker:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Packetloss description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - Performance Issue": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Performance issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - Speed Issues": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Subnetmasker:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Measured speed:", type: "input" },
        { label: "Expected speed:", type: "input" },
        { label: "Business Impact:", type: "textarea" },
        { label: "LED status modem:", type: "input" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - Reachability IP": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "IP address impacted:", type: "input" },
        { label: "Reachability issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ]
};

document.getElementById("issue-type").addEventListener("change", function () {
    const issueType = this.value;
    dynamicFieldsDiv.innerHTML = ""; // Clear previous fields

    if (issueTemplates[issueType]) {
        issueTemplates[issueType].forEach(field => {
            const div = document.createElement("div");
            div.classList.add("form-group");

            const label = document.createElement("label");
            label.textContent = field.label;

            let input;
            if (field.type === "textarea") {
                input = document.createElement("textarea");
                input.rows = 4; // Default height
                input.style.resize = "both"; // Allow resizing
                input.style.minHeight = "80px"; // Minimum height
            } else {
                input = document.createElement("input");
                input.type = "text";
            }

            input.setAttribute("label", field.label);
            input.placeholder = `Enter ${field.label.toLowerCase()}`;

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
    const inputs = dynamicFieldsDiv.querySelectorAll("input, textarea");

    if (!priority || !issueType) {
        alert("Please fill out all required fields.");
        return;
    }

    let generatedTemplate = `Priority: ${priority}\nIssue Type: ${issueType}\n\n`;

    generatedTemplate += `=== Customer Details ===\n`;
    inputs.forEach(input => {
        const label = input.previousElementSibling.textContent;
        const value = input.value;

        // Sort fields into categories based on their labels
        if (["Company name:", "Access ID:", "Customer ID:", "Street Housenumber:", "ZIP code:"].includes(label)) {
            generatedTemplate += `${label} ${value}\n`;
        }
    });

    generatedTemplate += `\n=== Technical Details ===\n`;
    inputs.forEach(input => {
        const label = input.previousElementSibling.textContent;
        const value = input.value;

        if (["Technical contact name:", "Technical contact phonenumber:", "Technical contact E-mail:", "CM MAC:", "VTP / KTA:"].includes(label)) {
            generatedTemplate += `${label} ${value}\n`;
        }
    });

    generatedTemplate += `\n=== Issue Details ===\n`;
    inputs.forEach(input => {
        const label = input.previousElementSibling.textContent;
        const value = input.value;

        if (["Issue description:", "Business Impact:", "Frequency:", "Occurring since:", "Example timestamp of when the issue occurred:"].includes(label)) {
            generatedTemplate += `${label} ${value}\n`;
        }
    });

    generatedTemplate += `\n=== Additional Comments ===\n`;
    inputs.forEach(input => {
        const label = input.previousElementSibling.textContent;
        const value = input.value;

        if (label === "Additional comments & taken actions:") {
            generatedTemplate += `${label} ${value}\n`;
        }
    });

    templateOutput.textContent = generatedTemplate;
});
