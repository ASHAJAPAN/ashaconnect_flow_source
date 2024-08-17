
export function veryUrgent(data) {
    if (Number(data.medical_basic.SBP) >= 160) { return true; }
    if (Number(data.medical_basic.DBP) >= 110) { return true; }
    if (data.ANC.flow.signs_delivery === 'Yes') { return true; }
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
    return false;
}
