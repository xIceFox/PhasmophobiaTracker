let Evidences = new Array()

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
    GHOST_INFOS.forEach(function (Ghost) {
        Ghost.active = true;
        Evidences.forEach(function (clickedEvidences) {
            if (Ghost.evidences.indexOf(clickedEvidences) === -1) {
                Ghost.active = false;
            }
        });
    });
}

function updateGhosts() {
    GHOST_INFOS.forEach(function (Ghost) {
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
        GHOST_INFOS.forEach(function (Ghost) {
            if (Ghost.active === true) {
                Ghost.evidences.forEach(function (Evidence) {
                    if (Evidences.indexOf(Evidence) === -1) {
                        let allEvidenceClass = document.getElementsByClassName(getEvidenceNameByID(Evidence));
                        for (let i = 0; i < allEvidenceClass.length; i++) {
                            allEvidenceClass[i].classList.remove("white");
                            allEvidenceClass[i].classList.add("red");
                            //allEvidenceClass[i].style.color = 'RED';
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
            allEvidenceClass[i].classList.remove("red");
            allEvidenceClass[i].classList.add("white");
            //allEvidenceClass[i].style.color = 'BLACK';
        }
    }
}

function checkIfButtonNeeded() {
    resetButtons();
    let buttonNeeded = [false, false, false, false, false, false]
    if (Evidences.length > 0) {
        for (let i = 1; i <= 6; i++) {
            GHOST_INFOS.forEach(function (Ghost) {
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
        document.getElementById("label" + EvidenceName).style.color = "#FFFFFF";
        document.getElementById(EvidenceName).disabled = false;
    }
}

function setButtons(buttonNeeded) {
    buttonNeeded.forEach(function (needed, i) {
        if (needed === false) {
            let EvidenceName = getEvidenceNameByID(i + 1);
            document.getElementById("label" + EvidenceName).style.textDecorationLine = "line-through";
            document.getElementById("label" + EvidenceName).style.color = "#808080";
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

// TEMPORARY SOLUTION
// let liElements = document.querySelectorAll("li").forEach(initGreenEvidences)
// function initGreenEvidences(_element) {
//     _element.classList.add("green")
// }