import { decision } from "./Decision.js"
export function urgent3(data) {
    let reasonMessage = '';
    if (Number(data.medical_basic.SBP) >= 140) { reasonMessage += 'Because your blood pressure (SBP) is very high.'; }
    if (Number(data.medical_basic.DBP) >= 90) { reasonMessage += 'Because your blood pressure (DBP) is very high.'; }
    if (Number(data.ANC.flow.temperature) >= 38) { reasonMessage += 'Because your body temperature is high.'; }
    return decision(model, data, reasonMessage);
}

const model = {
    single_condition: [
        // ******* ANC *******
        {
            data: ['ANC', 'flow', 'nausea'],
            operator: '=Yes',
            reason: 'Because you have nausea./r/n'
        },
        {
            data: ['ANC', 'flow', 'lower_abdominal_pain_vaginal_bleeding_clots'],
            operator: '=Yes',
            reason: 'Because you have lower abdominal pain or vaginal bleeding clots.'
        },
        {
            data: ['ANC', 'flow', 'pain_burning_while_urinating'],
            operator: '=Yes',
            reason: 'Because you feel pain while urinating.'
        },
        {
            data: ['ANC', 'flow', 'frequent_urination'],
            operator: '=Yes',
            reason: 'Bacause you have frequent urination.'
        },
        {
            data: ['ANC', 'flow', 'need_urinating'],
            operator: '=Yes',
            reason: 'Because you feel need of urinating.'
        },
        {
            data: ['ANC', 'flow', 'bloody_urine'],
            operator: '=Yes',
            reason: 'Because you have bloody urine.'
        },
        {
            data: ['ANC', 'flow', 'pressure_cramping_groin'],
            operator: '=Yes',
            reason: 'Because you feel pressure or cramping in the groin or lower abdomen'
        },
        {
            data: ['ANC', 'flow', 'pain_arms_legs_back_chest'],
            operator: '=Yes',
            reason: 'Because you have pain  in the arms, legs, back, chest or stomach.'
        },
        {
            data: ['ANC', 'flow', 'difficulty_breathing'],
            operator: '=Yes',
            reason: 'Because you feel difficulty of breathing.'
        },
        // ******* PNC *******
        // e8
        {
            data: ['PNC', 'flow', 'abdominal_pain'],
            operator: '=Yes',
            reason: 'Bacause you have abdominal pain.'
        },
        // e17
        {
            data: ['PNC', 'flow', 'swollen_breast'],
            operator: '=Yes',
            reason: 'Because you have swollen breast.'
        },
        // e18
        {
            data: ['PNC', 'flow', 'red_breast'],
            operator: '=Yes',
            reason: 'Because you have red breast.'
        },
        // e19
        {
            data: ['PNC', 'flow', 'sore_cracked_nipples'],
            operator: '=Yes',
            reason: 'Because you have sore or cracked nipples'
        },
        // e20
        {
            data: ['PNC', 'flow', 'problems_urinating'],
            operator: '=Yes',
            reason: 'Because you have problems of urinating.'
        },
        // e21
        {
            data: ['PNC', 'flow', 'perineum_pain'],
            operator: '=Yes',
            reason: 'Because you feel increased pain in perineum.'
        },
        // e22
        {
            data: ['PNC', 'flow', 'puslike_discharge'],
            operator: '=Yes',
            reason: 'Because you have puslike discharge.'
        },
        // e23
        {
            data: ['PNC', 'flow', 'sad_despair'],
            operator: '=Yes',
            reason: 'Because you feel sadness of dispairation.'
        },
        // e24
        {
            data: ['PNC', 'flow', 'anxious'],
            operator: '=Yes',
            reason: 'Because you feel anxiousness.'
        },
        // e25
        {
            data: ['PNC', 'flow', 'detouched'],
            operator: '=Yes',
            reason: 'Because you feel to be detouched.'
        },
        // e26
        {
            data: ['PNC', 'flow', 'hurting_you'],
            operator: '=Yes',
            reason: 'Because you have a thought of hurting.'
        },
        // e27
        {
            data: ['PNC', 'flow', 'DV'],
            operator: '=Yes',
            reason: 'Because of the suspition of DV.'
        },
        // ******* Newborn *******

        {
            data: ['Newborn', 'flow', 'vomit'],
            operator: '=Yes',
            reason: 'Because yout baby is vomitting.'
        },
        {
            data: ['Newborn', 'flow', 'dark_stool'],
            operator: '=Yes',
            reason: 'Because your baby has dark stool.'
        },
        {
            data: ['Newborn', 'flow', 'yellow_face'],
            operator: '=Yes',
            reason: 'Because your baby has yellow face.'
        },
        {
            data: ['Newborn', 'flow', 'seizure'],
            operator: '=Yes',
            reason: 'Because your baby has seizure.'
        },
        {
            data: ['Newborn', 'flow', 'pustules_eczema'],
            operator: '=Yes',
            reason: 'Because your baby has pustules or eczema'
        }, 
    ]
}