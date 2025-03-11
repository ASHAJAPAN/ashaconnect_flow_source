import { decision } from "./Decision.js"
export function urgent4(data) {
    let reasonMessage = '';

    if (data.basic.ANC === 'Yes' && Number(data.medical_basic.SBP) >= 160) { reasonMessage += 'Because your blood pressure (SBP) is very high.'; }
    if (data.basic.PNC === 'Yes' && Number(data.medical_basic.SBP) >= 160) { reasonMessage += 'Because your blood pressure (SBP) is very high.'; }
    if (data.basic.ANC === 'Yes' && Number(data.medical_basic.DBP) >= 110) { reasonMessage += 'Because your blood pressure (DBP) is very high.'; }
    if (data.basic.PNC === 'Yes' && Number(data.medical_basic.DBP) >= 110) { reasonMessage += 'Because your blood pressure (DBP) is very high.'; }
    if (data.basic.Hypertension === 'Yes' && Number(data.medical_basic.SBP) >= 180) { reasonMessage += 'Because your blood pressure (SBP) is very high.'; }
    if (data.basic.Hypertension === 'Yes' && Number(data.medical_basic.DBP) >= 120) { reasonMessage += 'Because your blood pressure (DBP) is very high.'; }

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

    if (data.Asthma.breath_shortness_rest === 'Yes') { return true; }

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

    return decision(model, data, reasonMessage);
}

const model = {
    single_condition: [
    // ******* ANC *******
        {
            data: ['ANC', 'flow', 'signs_delivery'],
            operator: '=Yes',
            reason: 'Because you have signs of delivery.'
        },
        {
            data: ['ANC', 'flow', 'lower_abdominal_pain_with_uterine_contractions'],
            operator: '=Yes',
            reason: 'Because you have lower abdominal pain with uterine contractions'
        },
        {
            data: ['ANC', 'flow', 'vaginal_bleeding_feeling_water_breaking'],
            operator: '=Yes',
            reason: 'Because you have vaginal bleeding feeling water breaking'
        },
        {
            data: ['ANC', 'flow', 'water_broken'],
            operator: '=Yes',
            reason: 'Your water is broken.'
        },
        {
            data: ['ANC', 'flow', 'labor_pain'],
            operator: '=Yes',
            reason: 'Because you have labor pain.'
        },
        {
            data: ['ANC', 'flow', 'persistent_abdominal_pain'],
            operator: '=Yes',
            reason: 'Because you have persistent abdominal pain.'
        },
        {
            data: ['ANC', 'flow', 'significant_vaginal_bleeding'],
            operator: '=Yes',
            reason: 'Because you have significant vaginal bleeding.'
        },
        {
            data: ['ANC', 'flow', 'significant_vaginal_bleeding'],
            operator: '=Yes',
            reason: 'Because your baby is not moving well.'
        },
        {
            data: ['ANC', 'flow', 'severe_fatigue'],
            operator: '=Yes',
            reason: 'Because you feel severe fatigue.'
        },
        {
            data: ['ANC', 'flow', 'severe_edema'],
            operator: '=Yes',
            reason: 'Because you have severe edema.'
        },
        {
            data: ['ANC', 'flow', 'nausea'],
            operator: '=Yes',
            reason: 'Because you have nausea.'
        },
        {
            data: ['ANC', 'flow', 'vomiting'],
            operator: '=Yes',
            reason: 'Because you are vomiting.'
        },
        {
            data: ['ANC', 'flow', 'severe_stomachache'],
            operator: '=Yes',
            reason: 'Because you have severe stomachache.'
        },
        {
            data: ['ANC', 'flow', 'severe_headache'],
            operator: '=Yes',
            reason: 'Because you have severe headache.'
        },
        // ******* PNC *******
        // e2
        {
            data: ['PNC', 'flow', 'headache'],
            operator: '=Yes',
            reason: 'Because you have headache.'
        },
        // e3
        {
            data: ['PNC', 'flow', 'nausea_vomit'],
            operator: '=Yes',
            reason: 'Because you have nausea with vomitting.'
        },
        // e4
        {
            data: ['PNC', 'flow', 'change_vision'],
            operator: '=Yes',
            reason: 'Because you have change of vision.'
        },
        // e5
        {
            data: ['PNC', 'flow', 'upper_abdominal_pain'],
            operator: '=Yes',
            reason: 'Because you have upper abdominal pain.'
        },
        // e7
        {
            data: ['PNC', 'flow', 'vaginal bleeding'],
            operator: '=Yes',
            reason: 'Because you have vaginal_bleeding'
        },
        // e9
        {
            data: ['PNC', 'flow', 'fatigue_weakness'],
            operator: '=Yes',
            reason: 'Because you feel fatigue or weakness.'
        },
        // e10
        {
            data: ['PNC', 'flow', 'irregular_heartbeats'],
            operator: '=Yes',
            reason: 'Because you have irregular heartbeats.'
        },
        // e11
        {
            data: ['PNC', 'flow', 'shortness_breaths'],
            operator: '=Yes',
            reason: ''
        },
        // e12
        {
            data: ['PNC', 'flow', 'dizziness_lightheadedness'],
            operator: '=Yes',
            reason: 'Because you have shortness if breaths.'
        },
        // e13
        {
            data: ['PNC', 'flow', 'chest_pain'],
            operator: '=Yes',
            reason: 'Because you have chest pain.'
        },
        // e14
        {
            data: ['PNC', 'flow', 'difficult_breathing'],
            operator: '=Yes',
            reason: 'Because you have difficulty of breathing'
        },
        // e15
        {
            data: ['PNC', 'flow', 'redness_swelling'],
            operator: '=Yes',
            reason: 'Because you have redness or swelling'
        },
        // e16
        {
            data: ['PNC', 'flow', 'calf_pain'],
            operator: '=Yes',
            reason: 'Because you have calf pain'
        },
        // ******* Newborn *******
        // f5
        {
            data: ['Newborn', 'flow', 'moving'],
            operator: '=No',
            reason: 'Because your baby is not moving.'
        },
        // f6
        {
            data: ['Newborn', 'flow', 'breathe'],
            operator: '=No',
            reason: 'Because your baby is not breathing.'
        },
        // f7
        {
            data: ['Newborn', 'flow', 'reapiratory_rate'],
            operator: '>',
            value: 60,
            reason: 'Because the respiratory rate is very high.'
        },
        // f8
        {
            data: ['Newborn', 'flow', 'retraction'],
            operator: '=Yes',
            reason: 'Because your baby has retraction.'
        },
        // f9
        {
            data: ['Newborn', 'flow', 'grunting'],
            operator: '=Yes',
            reason: 'Because your baby is grunting'
        },
        {
            // f11
            data: ['Newborn', 'flow', 'body_temperature2'],
            operator: '<',
            value: 35.5,
            reason: 'Because your baby\'s body temperature is low.'
        },
        {
            // f12
            data: ['Newborn', 'flow', 'body_temperature3'],
            operator: '<',
            value: 36.5,
            reason: 'Because your baby\'s body temperature is very low.'
        },
        // f14
        {
            data: ['Newborn', 'flow', 'different'],
            operator: '=Yes',
            reason: 'Because your baby is different than usual.'
        },
        // f15
        {
            data: ['Newborn', 'flow', 'difficult_feed'],
            operator: '=Yes',
            reason: 'Because it is difficult to feed your baby.'
        },
        // f16
        {
            data: ['Newborn', 'flow', 'red_cord'],
            operator: '=Yes',
            reason: 'Because your baby has red cord'
        },
        // f17
        {
            data: ['Newborn', 'flow', 'pustules'],
            operator: '=Yes',
            reason: 'Because your baby has pustules'
        },
        // f18
        {
            data: ['Newborn', 'flow', 'family_infectious_disease'],
            operator: '=Yes',
            reason: 'Because someone in your family has infectious disease.'
        },
        // f19
        {
            data: ['Newborn', 'flow', 'body_temperature3'],
            operator: '>',
            value: 38.0,
            reason: 'Because your baby\'s body temperature is high.'
        },
        // f23
        {
            data: ['Newborn', 'flow', 'bleeding'],
            operator: '=Yes',
            reason: 'Because your baby is bleeding.'
        },
        // f23
        {
            data: ['Newborn', 'flow', 'cord_draining_pus'],
            operator: '=Yes',
            reason: 'Because your baby has cord draining pus or bleeding or smelling bad or redness around the navel.'
        },

        {
            // a1
            data: ['medical_basic', 'SBP'],
            operator: '<',
            value: 90,
            reason: ''
        },

        {
            // a1
            data: ['medical_basic', 'DBP'],
            operator: '<',
            value: 60,
            reason: ''
        },

        // ******* Asthma *******
        // a2
        {
            data: ['Asthma', 'flow', 'alter_consciousness'],
            operator: '=Yes',
            reason: ''
        },
        // a3
        {
            data: ['Asthma', 'flow', 'cyanosis'],
            operator: '=Yes',
            reason: ''
        },
        // a4
        {
            data: ['Asthma', 'flow', 'effort_breathing'],
            operator: '=Yes',
            reason: ''
        },

        {
            // d1
            data: ['Diabetes', 'flow', 'blood_glucose'],
            operator: '>',
            value: 240,
            reason: ''
        }
    ]
};
