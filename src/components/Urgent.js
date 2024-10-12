import { decision } from "./Decision.js"
export function urgent(data) {
    if (Number(data.medical_basic.SBP) >= 140) { return true; }
    if (Number(data.medical_basic.DBP) >= 90) { return true; }
    return false;
    return decision(model, data);
}

const model = {
    single_condition: [
        // ******* ANC *******
        // a9
        {
            data: ['ANC', 'flow', 'nausea'],
            operator: '=Yes'
        },
        // a10
        {
            data: ['ANC', 'flow', 'lower_abdominal_pain_vaginal_bleeding_clots'],
            operator: '=Yes'
        },
        // a11, d19
        {
            data: ['ANC', 'flow', 'pain_burning_while_urinating'],
            operator: '=Yes'
        },
        // d20
        {
            data: ['ANC', 'flow', 'frequent_urination'],
            operator: '=Yes'
        },
        // a12, d21
        {
            data: ['ANC', 'flow', 'need_urinating'],
            operator: '=Yes'
        },
        // a13, d22
        {
            data: ['ANC', 'flow', 'bloody_urine'],
            operator: '=Yes'
        },
        // a14, d23
        {
            data: ['ANC', 'flow', 'pressure_cramping_groin'],
            operator: '=Yes'
        },
        // a15, d24
        {
            data: ['ANC', 'flow', 'pain_arms_legs_back_chest'],
            operator: '=Yes'
        },
        // a16, d25
        {
            data: ['ANC', 'flow', 'difficulty_breathing'],
            operator: '=Yes'
        },
        // ******* PNC *******
        // e8
        {
            data: ['PNC', 'flow', 'abdominal_pain'],
            operator: '=Yes'
        },
        // e17
        {
            data: ['PNC', 'flow', 'swollen_breast'],
            operator: '=Yes'
        },
        // e18
        {
            data: ['PNC', 'flow', 'red_breast'],
            operator: '=Yes'
        },
        // e19
        {
            data: ['PNC', 'flow', 'sore_cracked_nipples'],
            operator: '=Yes'
        },
        // e20
        {
            data: ['PNC', 'flow', 'problems_urinating'],
            operator: '=Yes'
        },
        // e21
        {
            data: ['PNC', 'flow', 'perineum_pain'],
            operator: '=Yes'
        },
        // e22
        {
            data: ['PNC', 'flow', 'puslike_discharge'],
            operator: '=Yes'
        },
        // e23
        {
            data: ['PNC', 'flow', 'sad_despair'],
            operator: '=Yes'
        },
        // e24
        {
            data: ['PNC', 'flow', 'anxious'],
            operator: '=Yes'
        },
        // e25
        {
            data: ['PNC', 'flow', 'detouched'],
            operator: '=Yes'
        },
        // e26
        {
            data: ['PNC', 'flow', 'hurting_you'],
            operator: '=Yes'
        },
        // e27
        {
            data: ['PNC', 'flow', 'DV'],
            operator: '=Yes'
        },
        // ******* Newborn *******
        // f20
        {
            data: ['Newborn', 'flow', 'vomit'],
            operator: '=Yes'
        },
        // f21
        {
            data: ['Newborn', 'flow', 'dark_stool'],
            operator: '=Yes'
        },
        // f22
        {
            data: ['Newborn', 'flow', 'yellow_face'],
            operator: '=Yes'
        },
        // f26
        {
            data: ['Newborn', 'flow', 'pustules_eczema'],
            operator: '=Yes'
        },
    ]
}