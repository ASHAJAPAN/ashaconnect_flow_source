import { veryUrgent } from "./components/VeryUrgent.js";
import { urgent } from "./components/Urgent.js";
import { moderate } from "./components/Moderate.js";
import { moderateLow } from "./components/ModerateLow.js";

export function getCondition(condition_id, data) {
    switch (condition_id) {
        case 'IsAdult':
            return isAdult(data);
        case 'Over36weeks':
            return isOver36weeks(data);
        case 'Over32weeks':
            return isOver32weeks(data);
        case 'Over28weeks':
            return isOver28weeks(data);
        case 'Over24weeks':
            return isOver24weeks(data);
        case 'Over20weeks':
            return isOver20weeks(data);
        case 'Over16weeks':
            return isOver16weeks(data);
        case 'Over12weeks':
            return isOver12weeks(data);
        case 'Over8weeks':
            return isOver8weeks(data);
        case 'NoDisease':
            return isNoDisease(data);
        case 'OneDisease':
            return isOneDisease(data);
        case 'IsAsthma':
            return isAsthma(data);
        case 'IsCOPD':
            return isCOPD(data);
        case 'IsDiabetes':
            return isDiabetes(data);
        case 'IsHypertension':
            return isHypertension(data);
        case 'IsANC':
            return (data.basic.MCH === 'ANC')
        case 'IsPNC':
            return (data.basic.MCH === 'PNC')
        case 'RemeasureBP':
            if (data.medical_basic.SBP >= 140 || data.medical_basic.DBP >= 90)
                return true;
            else
                return false;
        case 15:
            return (settings.anc.gestational_week < 36)
        case 20:
            return settings.anc.blood_urine_exam;
        case 'CheckUrgency':
            return veryUrgent(data);
        case 'CheckResultHigh':
            return urgent(data);
        case 'CheckResultModerate':
            return moderate(data);
        case 'CheckResultModerateLow':
            return moderateLow(data);
    }
}

function isAdult(data) {
    if (data.basic.birthdate != null) {
        const today = new Date();
        const todayMinus18 = today.setFullYear(today.getFullYear() - 18);
        const date = new Date(data.basic.birthdate);
        return (date.getTime() <= todayMinus18)
    }
    else if (data.basic.age != null) {
        return (Number(data.basic.age) >= 18)
    }
    else {
        return true;
    }
}

function isFemale(data) {
    return 
}

function isNoDisease(data) {
    if (data.medical_basic.asthma === 'Yes')
        return false;
    if (data.medical_basic.type2_diabetes === 'Yes')
        return false;
    if (data.medical_basic.copd === 'Yes')
        return false;
    if (data.medical_basic.hypertension === 'Yes')
        return false;
    return true;
}

function isOneDisease(data) {
    var disease_count = 0;
    if (data.medical_basic.asthma === 'Yes')
        disease_count++;
    if (data.medical_basic.type2_diabetes === 'Yes')
        disease_count++;
    if (data.medical_basic.copd === 'Yes')
        disease_count++;
    if (data.medical_basic.hypertension === 'Yes')
        disease_count++;
    return (disease_count === 1);
}

function isAsthma(data) {
    return (data.medical_basic.asthma === 'Yes')
}

function isCOPD(data) {
    return (data.medical_basic.copd === 'Yes')
}

function isDiabetes(data) {
    return (data.medical_basic.type2_diabetes === 'Yes')
}

function isHypertension(data) {
    return (data.medical_basic.hypertension === 'Yes')
}

function isOver36weeks(data) {
    return (gestationalWeek(data) >= 36)
}

function isOver32weeks(data) {
    return (gestationalWeek(data) >= 32)
}

function isOver28weeks(data) {
    return (gestationalWeek(data) >= 28)
}

function isOver24weeks(data) {
    return (gestationalWeek(data) >= 24)
}

function isOver20weeks(data) {
    return (gestationalWeek(data) >= 20)
}

function isOver16weeks(data) {
    return (gestationalWeek(data) >= 16)
}

function isOver12weeks(data) {
    return (gestationalWeek(data) >= 12)
}

function isOver8weeks(data) {
    return (gestationalWeek(data) >= 8)
}

function gestationalWeek(data) {
    const today = new Date();
    if (data.ANC.EDD != null) {
        const date = new Date(data.ANC.EDD);
        const pastday = (date.getTime() - today.getTime()) / 86400000;
        const gw = 40 - pastday / 7;
        return gw;
    }
    else if (data.ANC.LMP != null) {
        const date = new Date(data.ANC.LMP);
        const pastday = today.getTime() - date.getDate();
        return pastday / 7;
    }
}

    
