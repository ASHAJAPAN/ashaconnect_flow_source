
export function urgent(data) {
    if (Number(data.medical_basic.SBP) >= 140) { return true; }
    if (Number(data.medical_basic.DBP) >= 90) { return true; }
    if (data.ANC.flow.pain_burning_while_urinating === 'Yes') { return true; }
    if (data.ANC.flow.frequent_urination === 'Yes') { return true; }
    if (data.ANC.flow.need_urinating === 'Yes') { return true; }
    if (data.ANC.flow.bloody_urine === 'Yes') { return true; }
    if (data.ANC.flow.pressure_cramping_groin === 'Yes') { return true; }
    if (data.ANC.flow.difficulty_breathing === 'Yes') { return true; } 
    return false;
}
