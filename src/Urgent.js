
export function urgent(data) {
    if (Number(data.medical_basic.SBP) >= 140) { return true; }
    if (Number(data.medical_basic.DBP) >= 90) { return true; }
    //if (data.ANC.flow.signs_delivery === 'Yes') { return true; }
    //if (data.ANC.flow.water_not_clear === 'Yes') { return true; }
    //if (data.ANC.flow.water_smells_bad === 'Yes') { return true; }
    //if (data.ANC.flow.water_gush === 'Yes') { return true; }
    //if (data.ANC.flow.baby_not_moving === 'Yes') { return true; }
    //if (Number(data.ANC.flow.temprature) >= 38.0) { return true; }
    //if (data.ANC.flow.persistent_abdominal_pain === 'Yes') { return true; }
    //if (data.ANC.flow.significant_vaginal_bleeding === 'Yes') { return true; }
    //if (data.ANC.flow.baby_move_well === 'No') { return true; }
    //if (data.ANC.flow.persistent_abdominal_pain === 'Yes') { return true; }
    if (data.ANC.flow.pain_burning_while_urinating === 'Yes') { return true; }
    if (data.ANC.flow.frequent_urination === 'Yes') { return true; }
    if (data.ANC.flow.need_urinating === 'Yes') { return true; }
    if (data.ANC.flow.bloody_urine === 'Yes') { return true; }
    if (data.ANC.flow.pressure_cramping_groin === 'Yes') { return true; }
    return false;
}
