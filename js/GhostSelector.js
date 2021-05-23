let Evidences = new Array()


const ghostInfos = [
    {
        name: "Spirit",
        evidences: [2, 3, 5],
        active: true
    },
    {
        name: "Wraith",
        evidences: [2, 3, 6],
        active: true
    },
    {
        name: "Phantom",
        evidences: [1, 4, 6],
        active: true
    },
    {
        name: "Poltergeist",
        evidences: [2, 3, 4],
        active: true
    },
    {
        name: "Banshee",
        evidences: [1, 3, 6],
        active: true
    },
    {
        name: "Jinn",
        evidences: [1, 2, 4],
        active: true
    },
    {
        name: "Mare",
        evidences: [2, 4, 6],
        active: true
    },
    {
        name: "Revenant",
        evidences: [1, 3, 5],
        active: true
    },
    {
        name: "Shade",
        evidences: [1, 4, 5],
        active: true
    },
    {
        name: "Demon",
        evidences: [2, 5, 6],
        active: true
    },
    {
        name: "Yurei",
        evidences: [4, 5, 6],
        active: true
    },
    {
        name: "Oni",
        evidences: [1, 2, 5],
        active: true
    },
    {
        name: "Yokai",
        evidences: [2, 4, 5],
        active: true
    },
    {
        name: "Hantu",
        evidences: [3, 4, 5],
        active: true
    },
];

function toggleEvidence(EvidenceNumber) {
    if (Evidences.indexOf(EvidenceNumber) === -1) {
        Evidences.push(EvidenceNumber)
    } else if (Evidences.indexOf(EvidenceNumber) >= 0) {
        Evidences.splice(Evidences.indexOf(EvidenceNumber), 1)
    }
    checkEvidence();
    updateGhosts();
    checkForMissing();
    checkIfButtonNeeded();
}


function checkEvidence() {
    ghostInfos.forEach(function (Ghost) {
        Ghost.active = true;
        Evidences.forEach(function (clickedEvidences) {
            if (Ghost.evidences.indexOf(clickedEvidences) === -1) {
                Ghost.active = false;
            }
        });
    });
}

function updateGhosts() {
    ghostInfos.forEach(function (Ghost) {
        if (Ghost.active === false) {
            document.getElementById(Ghost.name).style.display = "none";
        } else {
            document.getElementById(Ghost.name).style.display = "block";
        }
    });
}

function checkForMissing() {
    resetRed();
    if (Evidences.length > 0) {
        ghostInfos.forEach(function (Ghost) {
            if (Ghost.active === true) {
                Ghost.evidences.forEach(function (Evidence) {
                    if (Evidences.indexOf(Evidence) === -1) {
                        let allEvidenceClass = document.getElementsByClassName(getEvidenceNameByID(Evidence));
                        for (let i = 0; i < allEvidenceClass.length; i++) {
                            allEvidenceClass[i].style.color = 'RED';
                        }
                    }
                });
            }
        });
    }
}

function resetRed() {
    for (let i = 1; i <= 6; i++) {
        let allEvidenceClass = document.getElementsByClassName(getEvidenceNameByID(i));
        for (let i = 0; i < allEvidenceClass.length; i++) {
            allEvidenceClass[i].style.color = 'BLACK';
        }
    }
}

function checkIfButtonNeeded() {
    resetButtons();
    let buttonNeeded = [false, false, false, false, false, false]
    if (Evidences.length > 0) {
        for (let i = 1; i <= 6; i++) {
            ghostInfos.forEach(function (Ghost) {
                if (Ghost.active === true) {
                    if (Ghost.evidences.indexOf(i) >= 0) {
                        buttonNeeded[i - 1] = true
                    }
                }
            });
        }
        setButtons(buttonNeeded);
    }
}

function resetButtons() {
    for (let i = 1; i <= 6; i++) {
        let EvidenceName = getEvidenceNameByID(i);
        document.getElementById("label" + EvidenceName).style.textDecorationLine = "none";
        document.getElementById(EvidenceName).disabled = false;
    }
}

function setButtons(buttonNeeded) {
    buttonNeeded.forEach(function (needed, i) {
        if (needed === false) {
            let EvidenceName = getEvidenceNameByID(i + 1);
            document.getElementById("label" + EvidenceName).style.textDecorationLine = "line-through";
            document.getElementById(EvidenceName).disabled = true;
        }
    });
}

function getEvidenceNameByID(id) {
    switch (id) {
        case 1:
            return "EMF5";
            break;
        case 2:
            return "SpiritBox";
            break;
        case 3:
            return "Fingerprints";
            break;
        case 4:
            return "GhostOrb";
            break;
        case 5:
            return "GhostWriting";
            break;
        case 6:
            return "FreezingTemperatures";
            break;
    }
}