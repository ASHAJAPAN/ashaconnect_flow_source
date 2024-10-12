import { decision } from "./Decision.js"
export function veryUrgent(data) {
    // General
    if (Number(data.medical_basic.SBP) >= 160) { return true; }
    if (Number(data.medical_basic.DBP) >= 110) { return true; }
    if (data.ANC.flow.water_not_clear === 'Yes') { return true; }
    if (data.ANC.flow.water_smells_bad === 'Yes') { return true; }
    if (data.ANC.flow.water_gush === 'Yes') { return true; }
    if (data.ANC.flow.baby_not_moving === 'Yes') { return true; }
    if (Number(data.ANC.flow.temprature) >= 38.0) { return true; }
    if (data.ANC.flow.persistent_abdominal_pain === 'Yes') { return true; }
    if (data.ANC.flow.significant_vaginal_bleeding === 'Yes') { return true; }
    if (data.ANC.flow.baby_move_well === 'No') { return true; }
    if (data.ANC.flow.severe_fatigue === 'Yes') { return true; }
    if (data.ANC.flow.severe_edema === 'Yes') { return true; }
    if (data.ANC.flow.vomiting === 'Yes') { return true; }
    if (data.ANC.flow.severe_stomachache === 'Yes') { return true; }
    if (data.ANC.flow.severe_edema === 'Yes') { return true; }
    if (data.ANC.flow.severe_headache === 'Yes') { return true; }
    // before 36


    if (data.PNC.flow.headache === 'Yes') { return true; } // e2
    if (data.PNC.flow.nausea_vomit === 'Yes') { return true; } // e3
    if (data.PNC.flow.change_vision === 'Yes') { return true; } // e4
    if (data.PNC.flow.upper_abdominal_pain === 'Yes') { return true; } // e5
    if (data.PNC.flow.vaginal_bleeding === 'Yes') { return true; } // e7
    if (data.PNC.flow.abdominal_pain === 'Yes') { return true; } // e8
    if (data.PNC.flow.difficult_breathing === 'Yes') { return true; } // e14
    if (data.PNC.flow.redness_swelling === 'Yes') { return true; } // e15
    if (data.PNC.flow.difficult_breathing === 'Yes') { return true; } // e16


    if (data.Newborn.flow.moving === 'No') { return true; } // f5
    if (data.Newborn.flow.breathe === 'No') { return true; } // f6
    if (data.Newborn.flow.reapiratory_rate > 60) { return true; } // f7
    if (data.Newborn.flow.retraction === 'Yes') { return true; } // f8
    if (data.Newborn.flow.grunting === 'Yes') { return true; } // f9
    //if (data.Newborn.flow.body_temperature2 !== null && data.Newborn.flow.body_temperature2 < 35.5) { return true; } // f11
    //if (data.Newborn.flow.body_temperature3 < 36.5) { return true; } // f12
    if (data.Newborn.flow.different === 'Yes') { return true; } // f14
    if (data.Newborn.flow.difficult_feed === 'Yes') { return true; } // f15
    if (data.Newborn.flow.red_cord === 'Yes') { return true; } // f16
    if (data.Newborn.flow.pustules === 'Yes') { return true; } // f17
    if (data.Newborn.flow.family_infectious_disease === 'Yes') { return true; } // f18
    if (data.Newborn.flow.bleeding === 'Yes') { return true; } // f23
    if (data.Newborn.flow.cord_draining_pus === 'Yes') { return true; } // f24

    if (data.Asthma.flow.alter_consciousness === 'Yes') { return true; } // a2
    if (data.Asthma.flow.cyanosis === 'Yes') { return true; } // a3
    if (data.Asthma.flow.effort_breathing === 'Yes') { return true; } // a4
    //if (data.medical_basic.SpO2 < 92.0) { return true; } // a1
    //if (data.medical_basic.SBP < 90) { return true; }
    //if (data.medical_basic.DBP < 60) { return true; }

    if (data.COPD.breath_shortness_rest === 'Yes') { return true; }

    if (data.Hypertension.chest_pain === 'Yes') { return true; } // c1
    if (data.Hypertension.severe_headache === 'Yes') { return true; } // c2
    if (data.Hypertension.nausea === 'Yes') { return true; } // c3
    if (data.Hypertension.anxiety === 'Yes') { return true; } // c4
    if (data.Hypertension.seizures === 'Yes') { return true; } // c5
    if (data.Hypertension.unresponsiveness === 'Yes') { return true; } // c1
    if (data.Hypertension.numbness === 'Yes') { return true; } // c1
    if (data.Hypertension.chest_pain === 'Yes') { return true; } // c1

    // if (data.Diabetes.flow.blood_glucose > 240) { return true; } // d1
    if (data.Diabetes.flow.respiratory_rate === 'Yes') { return true; } // d2
    if (data.Diabetes.flow.lost_consciousness === 'Yes') { return true; } // d3

    return decision(model, data);
}

const model = {
    single_condition: [
    // ******* ANC *******
        // a8
        {
            data: ['ANC', 'flow', 'signs_delivery'],
            operator: '=Yes'
        },
        // b2
        {
            data: ['ANC', 'flow', 'lower_abdominal_pain_with_uterine_contractions'],
            operator: '=Yes'
        },
        // b3
        {
            data: ['ANC', 'flow', 'vaginal_bleeding_feeling_water_breaking'],
            operator: '=Yes'
        },
        // ******* PNC *******
        // e2
        {
            data: ['PNC', 'flow', 'headache'],
            operator: '=Yes'
        },
        // e3
        {
            data: ['PNC', 'flow', 'nausea_vomit'],
            operator: '=Yes'
        },
        // e4
        {
            data: ['PNC', 'flow', 'change_vision'],
            operator: '=Yes'
        },
        // e5
        {
            data: ['PNC', 'flow', 'upper_abdominal_pain'],
            operator: '=Yes'
        },
        // e7
        {
            data: ['PNC', 'flow', 'vaginal_bleeding'],
            operator: '=Yes'
        },
        // e9
        {
            data: ['PNC', 'flow', 'fatigue_weakness'],
            operator: '=Yes'
        },
        // e10
        {
            data: ['PNC', 'flow', 'irregular_heartbeats'],
            operator: '=Yes'
        },
        // e11
        {
            data: ['PNC', 'flow', 'shortness_breaths'],
            operator: '=Yes'
        },
        // e12
        {
            data: ['PNC', 'flow', 'dizziness_lightheadedness'],
            operator: '=Yes'
        },
        // e13
        {
            data: ['PNC', 'flow', 'chest_pain'],
            operator: '=Yes'
        },
        // e14
        {
            data: ['PNC', 'flow', 'difficult_breathing'],
            operator: '=Yes'
        },
        // e15
        {
            data: ['PNC', 'flow', 'redness_swelling'],
            operator: '=Yes'
        },
        // e16
        {
            data: ['PNC', 'flow', 'calf_pain'],
            operator: '=Yes'
        },
        // ******* Newborn *******
        // f5
        {
            data: ['Newborn', 'flow', 'moving'],
            operator: '=No'
        },
        // f6
        {
            data: ['Newborn', 'flow', 'breathe'],
            operator: '=No'
        },
        // f7
        {
            data: ['Newborn', 'flow', 'reapiratory_rate'],
            operator: '>',
            value: 60
        },
        // f8
        {
            data: ['Newborn', 'flow', 'retraction'],
            operator: '=Yes'
        },
        // f9
        {
            data: ['Newborn', 'flow', 'grunting'],
            operator: '=Yes'
        },
        {
            // f11
            data: ['Newborn', 'flow', 'body_temperature2'],
            operator: '<',
            value: 35.5
        },
        {
            // f12
            data: ['Newborn', 'flow', 'body_temperature3'],
            operator: '<',
            value: 36.5
        },
        // f14
        {
            data: ['Newborn', 'flow', 'different'],
            operator: '=Yes'
        },
        // f15
        {
            data: ['Newborn', 'flow', 'difficult_feed'],
            operator: '=Yes'
        },
        // f16
        {
            data: ['Newborn', 'flow', 'red_cord'],
            operator: '=Yes'
        },
        // f17
        {
            data: ['Newborn', 'flow', 'pustules'],
            operator: '=Yes'
        },
        // f18
        {
            data: ['Newborn', 'flow', 'family_infectious_disease'],
            operator: '=Yes'
        },
        // f19
        {
            data: ['Newborn', 'flow', 'body_temperature3'],
            operator: '>',
            value: 38.0
        },
        // f23
        {
            data: ['Newborn', 'flow', 'bleeding'],
            operator: '=Yes'
        },
        // f23
        {
            data: ['Newborn', 'flow', 'cord_draining_pus'],
            operator: '=Yes'
        },

        {
            // a1
            data: ['medical_basic', 'SpO2'],
            operator: '<',
            value: 92.0
        },

        {
            // a1
            data: ['medical_basic', 'SBP'],
            operator: '<',
            value: 90
        },

        {
            // a1
            data: ['medical_basic', 'DBP'],
            operator: '<',
            value: 60
        },

        // ******* Asthma *******
        // a2
        {
            data: ['Asthma', 'flow', 'alter_consciousness'],
            operator: '=Yes'
        },
        // a3
        {
            data: ['Asthma', 'flow', 'cyanosis'],
            operator: '=Yes'
        },
        // a4
        {
            data: ['Asthma', 'flow', 'effort_breathing'],
            operator: '=Yes'
        },

        {
            // d1
            data: ['Diabetes', 'flow', 'blood_glucose'],
            operator: '>',
            value: 240
        }
    ]
};
