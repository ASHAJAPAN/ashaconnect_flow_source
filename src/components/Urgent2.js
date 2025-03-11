import { decision } from "./Decision.js"
export function urgent2(data) {
    let reasonMessage = '';
    const sbp = Number(data.medical_basic.SBP);
    const dbp = Number(data.medical_basic.DBP);
    if (data.basic.Hypertension === 'Yes' && sbp <= 180 && sbp > 140) { reasonMessage += 'Because your blood pressure (SBP) is high.'; }
    if (data.basic.Hypertension === 'Yes' && dbp <= 120 && dbp > 90) { reasonMessage += 'Because your blood pressure (DBP) is high.'; }
    const today = new Date();
    const ancvisit = new Date(data.ANC.flow.ANC_date);
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 60);
    if (data.basic.ANC === 'Yes' && (data.ANC.flow.visited !== 'Yes' || pastDate > ancvisit)) { reasonMessage += 'Because you didn\'t receive ANC recently.'}
    return decision(model, data, reasonMessage);
}

const model = {
    single_condition: [
        // ******* ANC *******

        // ******* PNC *******

        // ******* Newborn *******
        {
            data: ['Newborn', 'flow', 'seen_by_health_worker'],
            operator: '=Yes',
            reason: ''
        },

        // ******* Asthma *******
        {
            data: ['Asthma', 'flow', 'day_symptoms'],
            operator: '=Yes',
            reason: ''
        },
        {
            data: ['Asthma', 'flow', 'night_symptoms'],
            operator: '=Yes',
            reason: ''
        },
        {
            data: ['Asthma', 'flow', 'affect_life'],
            operator: '=Yes',
            reason: ''
        },
        {
            data: ['Asthma', 'flow', 'exacerbations'],
            operator: '=Yes',
            reason: ''
        },
        // ******* Diabetes *******
        {
            data: ['Diabetes', 'flow', 'increased_thirst'],
            operator: '=Yes',
            reason: ''
        },
        {
            data: ['Diabetes', 'flow', 'drink_water'],
            operator: '=Yes',
            reason: ''
        },
        {
            data: ['Diabetes', 'flow', 'weak_tired'],
            operator: '=Yes',
            reason: ''
        },
        {
            data: ['Diabetes', 'flow', 'lost_weight'],
            operator: '=Yes',
            reason: ''
        },
        {
            data: ['Diabetes', 'flow', 'frequent_urination'],
            operator: '=Yes',
            reason: ''
        },

    ]
}