import { urgent4 } from "./Urgent4.js";
import { urgent3 } from "./Urgent3.js";
import { urgent2 } from "./Urgent2.js";
export function getIf(if_name, data, setting) {
    switch (if_name) {
        case 'normal':
            return (setting.interview_type === 'normal');
        case 'new':
            return (setting.interview_type === 'new');
        case 'follow':
            return (setting.interview_type === 'follow');
        case 'adult':
            return true;
        case 'unknownbirthday':
            return (data.birthdate === undefined || data.birthdate === null);
        case 'other_disease':
            return (setting.medical_basic.other_disease === 'Yes');
        case 'other_treatment':
            return (setting.medical_basic.other_treatment === 'Yes');
        case 'food_allergy':
            return (setting.medical_basic.food_allergy === 'Yes');
        case 'medicine_allergy':
            return (setting.medical_basic.medicine_allergy === 'Yes');
        case 'alcohol':
            return (setting.medical_basic.alcohol === 'Yes');
        case 'tabacco':
            return (setting.medical_basic.tabacco === 'Yes');
        case 'female':
            return (data.basic.gender === 'female');
        case 'menstruation':
            return (data.medical_basic.menstruation === 'Yes');
        case 'Gravidity':
            return (data.medical_basic.Gravidity >= 1);
        case 'notANC':
            return (setting.subcategory.ANC !== 'Yes');
        case 'notPNC':
            return (setting.subcategory.PNC !== 'Yes');
        case 'ANC':
            return (setting.subcategory.ANC === 'Yes');
        case 'PNC':
            return (setting.subcategory.PNC === 'Yes');
        case 'Newborn':
            return (setting.subcategory.Newborn === 'Yes');
        case 'facility_not_decided':
            return (data.ANC.BirthFacilityType === undefined || data.ANC.BirthFacilityType === null);
        case 'facility_decided':
            return (setting.ANC.facility_decided === 'Yes')
        case 'noLMP':
            return (data.ANC.LMP === undefined || data.ANC.LMP === null);
        case 'noEDD':
            return (data.ANC.EDD === undefined || data.ANC.EDD === null);
        case 'toldEDD':
            return (setting.ANC.EDD_told === 'Yes')
        case 'Urgent4':
            return urgent4(data);
        case 'notUrgent4':
            return (urgent4(data) === '');
        case 'Urgent3':
            return urgent3(data);
        case 'notUrgent3':
            return (urgent3(data) === '' && urgent4(data) === '');
        case 'Urgent2':
            return urgent2(data);
        case 'notUrgent2':
            return (urgent2(data) === '' && urgent3(data) === '' && urgent4(data) === '' && setting.interview_type === 'normal');
        //case 'Low':
        //    return (urgent4(data) === '' && urgent3(data) === '' && urgent2(data) === '' && setting.interview_type !== 'follow');
        case 'ANCbefore36':
            const chk = isOver36weeks(data);
            return (isOver36weeks(data) === false);
            Break;
        case 'ANCafter36':
            return isOver36weeks(data);
        case 'ANCbefore20':
            return (isOver20weeks(data) === false);
        case 'ANCafter20':
            return isOver20weeks(data);
        case 'ANC_visited':
            return (setting.ANC.visited == 'Yes')
        case 'water_broken':
            return (data.ANC.flow.water_broken === 'Yes');
        case 'BPcategory2':
            return (BPcategory(data) === 2);
        case 'no_blood_test':
            return (data.ANC.test.blood_test !== 'Yes');
        case 'blood_test':
            return (data.ANC.test.blood_test === 'Yes');
        case 'no_urine_test':
            return (data.ANC.test.urine_test !== 'Yes');
        case 'urine_test':
            return (data.ANC.test.urine_test === 'Yes');
        case 'noMCH':
            return (setting.subcategory.ANC !== 'Yes' && setting.subcategory.PNC !== 'Yes' && setting.subcategory.Newborn !== 'Yes' && setting.subcategory.Abortion !== 'Yes');
        case 'noNCD':
            return (setting.subcategory.asthma !== 'Yes' && setting.subcategory.copd !== 'Yes' && setting.subcategory.diabetes !== 'Yes' && setting.subcategory.hypertension !== 'Yes');
        case 'no_tdvaccine':
            return (data.ANC.test.TDVaccine !== 'Yes');
        case 'no_supplement':
            return (data.ANC.test.supplement !== 'Yes');
        case 'no_ultrasound':
            return (data.ANC.test.ultrasound !== 'Yes');
        case 'DV':
            return (data.PNC.flow.DV === 'Yes');
        case 'too_low_temprature':
            return (data.Newborn.flow.body_temperature < 35.5);
        case 'low_temprature':
            return ((data.Newborn.flow.body_temperature >= 35.5 && data.Newborn.flow.body_temperature < 36.5) || (data.Newborn.flow.body_temperature2 >= 35.5 && data.Newborn.flow.body_temperature2 < 36.5));
        case 'high_temprature':
            return (data.Newborn.flow.body_temperature >= 37.5 || data.Newborn.flow.body_temperature2 >= 37.5);
        case 'high_temprature_again':
            return (data.Newborn.flow.body_temperature3 >= 37.5);
        case 'urinate_6_times':
            return (data.Newborn.flow.urinate_6_times === 'Yes');
        case 'bowel_movement':
            return (data.Newborn.flow.bowel_movement === 'Yes');
        case 'weighted':
            return (setting.Newborn.weighted === 'Yes');
        case 'NCD':
            return (setting.subcategory.Asthma === 'Yes' || setting.subcategory.Diabetes === 'Yes' || setting.subcategory.Hypertension === 'Yes')
        case 'Asthma':
            return (setting.subcategory.Asthma === 'Yes')
        case 'Diabetes':
            return (setting.subcategory.diabetes === 'Yes')
        case 'Hypertension':
            return (setting.subcategory.hypertension === 'Yes')
        case 'no_SpO2':
            return (data.medical_basic.SpO2 === undefined || data.medical_basic.SpO2 === null);
        case 'have_medication':
            return (data.Medication.flow.have_medication === 'Yes')
        case 'missed_medication':
            return (data.Medication.flow.missed_medication === 'Yes')
        case 'cause_feeling_unwell':
            return (data.Medication.flow.cause_feeling_unwell === 'Yes')
        case 'no_medication_intent_not_unwell':
            return (data.Medication.flow.no_medication_intent === 'Yes' && data.Medication.flow.cause_feeling_unwell !== 'Yes')
        case 'cause_other':
            return (setting.Medication.cause_other === 'Yes')
        case 'have_no_medication':
            return (data.Medication.flow.have_medication !== 'Yes')
        case 'medication_complete':
            return (data.Medication.flow.dont_have_medication_cause === 'The medication has been taken completely')
        case 'not_visit_cause_other':
            return (setting.Medication.not_visit_cause_other === 'Yes')
        case 'visit':
            return (setting.Follow.visit === 'Yes')
        case 'no_visit':
            return (setting.Follow.visit !== 'Yes')
        case 'no_agree':
            return (data.Follow.flow.agree !== 'Yes')
        case 'need_follow':
            return (urgent4(data) !== '' || urgent3(data) !== '' || urgent2(data) !== '' || (setting.Follow.visit !== 'Yes' && data.Follow.flow.agree_final !== 'Skip'))
        case 'need_no_follow':
            return ((urgent4(data) === '' && urgent3(data) === '' && urgent2(data) === '') && (setting.Follow.visit === 'Yes' || data.Follow.flow.agree_final === 'Skip'))
        case 'NCD':
            return (data.Basic.Asthma === 'Yes' || data.Basic.diabetes === 'Yes' || data.Basic.hypertension === 'Yes')
        case 'NotAsked_NCD001':
            return (data.NCD_General.condition === undefined || data.NCD_General.condition === null);
        case 'visit_hp':
            return (setting.NCD.visit_hp === 'Yes')
        case 'HT_BP_3':
            return (HTBPcategory(data) === 3)
        case 'HT_BP_2':
            return (HTBPcategory(data) === 2)
        case 'frequent_urination':
            return (data.Diabetes.flow.frequent_urination === 'Yes')
        case 'water_lostweight':
            return (data.Diabetes.flow.frequent_urination !== 'Yes' && (data.Diabetes.flow.drink_water === 'Yes' || data.Diabetes.flow.weak_tired === 'Yes' || data.Diabetes.flow.lost_weight === 'Yes'))
        case 'frequent_urination':
            return (data.Diabetes.flow.increased_thirst === 'Yes' && (data.Diabetes.flow.frequent_urination !== 'Yes' && data.Diabetes.flow.drink_water !== 'Yes' && data.Diabetes.flow.weak_tired !== 'Yes' && data.Diabetes.flow.lost_weight !== 'Yes'))
        // medication
        case 'Not_Good':
            return ((urgent4(data) !== '' || urgent3(data) !== '' || urgent2(data) !== ''))
        case 'have_medication_everyday':
            return (data.Medication.flow.have_medication === 'I had it everyday.')
        case 'dont_have_medication':
            return ((data.Medication.flow.have_medication === 'Sometimes I failed to have it.') || (data.Medication.flow.have_medication === 'I did not have it.'))
        case 'not_directed_have_medication':
            return (data.Medication.flow.have_medication === 'I had not been directed to take a medicine.')
        case 'no_medication_intent':
            return (data.Medication.flow.reason_no_medication === 'Yes. (I intentionally did not take the medicine.)')
        case 'no_medication_forget':
            return (data.Medication.flow.reason_no_medication === 'No. (I simply forgot to take the medicine.)')
        case 'no_medication_over':
            return (data.Medication.flow.reason_no_medication === 'The medication has been taken completely)')
        case 'no_medication_no_forget':
            return ((data.Medication.flow.reason_no_medication === 'Yes. (I intentionally did not take the medicine.)') || (data.Medication.flow.reason_no_medication === 'The medication has been taken completely)'))
        case 'no_medication_no_unwell':
            return (data.Medication.flow.cause_feeling_unwell === 'No')
    }
}

function HTBPcategory(data) {
    let Scategory = 1;
    let Dcategory = 1;
    if (data.medical_basic.SBP !== undefined || data.medical_basic.SBP !== null) {
        if (data.medical_basic.SBP > 180) { return 3; }
        if (data.medical_basic.SBP > 140) { Scategory = 2; }
    }
    if (data.medical_basic.DBP !== undefined || data.medical_basic.DBP !== null) {
        if (data.medical_basic.DBP >= 120) { return 3; }
        if (data.medical_basic.DBP >= 90) { Dcategory = 2; }
    }
    return Math.max(Scategory, Dcategory);
}

function BPcategory(data) {
    let Scategory = 1;
    let Dcategory = 1;
    if (data.medical_basic.SBP !== undefined || data.medical_basic.SBP !== null) {
        if (data.medical_basic.SBP >= 160) { return 3; }
        if (data.medical_basic.SBP >= 140) { Scategory = 2; }
    }
    if (data.medical_basic.DBP !== undefined || data.medical_basic.DBP !== null) {
        if (data.medical_basic.DBP >= 110) { return 3; }
        if (data.medical_basic.DBP >= 90) { Dcategory = 2; }
    }
    return Math.max(Scategory, Dcategory);
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
        const pastmillisec = date.getTime() - today.getTime();
        const pastday = pastmillisec / (24 * 60 * 60 * 1000);
        let rest = pastday / 7;
        return 40 - rest;
    }
    else if (data.ANC.LMP != null) {
        const date = new Date(data.ANC.LMP);
        const pastday = today.getTime() - date.getDate();
        return pastday / 7;
    }
}

    
