<script>
    export default{
        basic: {
            name: { first: '', middle: '', family: '' },
            gender: null,
            phone_number: null,
            birthdate: null,
            age: null,
            ward: null,
            healthconnect_id: null,
            MCH: null,
        },
        medical_basic: {
            height: null,
            blood_type: '',
            rh_factor: '',
            medical_history: {
                //asthma: null,
                //epilepsy: null,
                //heart_disease: null,
                //type1_diabetes: null,
                //type2_diabetes: null,
                //systemic_autoimmune_disease: null,
                //haemoglobinopathies: null,

                //other: null
            },
            treatment_history: {

                //other: null
            },
            infectious_diseases: {
                //HIV: null,
                //HCV: null,
                //HBV: null,
                //TB: null,
                //Syphilis: null
            },
            allergy_food: null,
            allergy_medicine: null,
            alcohol: null,
            tabacco_count: null,
            tabacco_year: null,
            chewing_tabacco: null,
            dust_in_living: null,
            dust_in_working: null,
            SBP: 0,
            DBP: 0,
            heart_rate: ''
        },
        ANC: {
            LMP: '',
            EDD: '',
            BirthFacilityType: '',
            BirthFacilityName: '',
            weight_before_pregnancy: '',
            waist_before_pregnancy: '',
            flow: {
                signs_delivery: null,
                nausea: null,
                lower_abdominal_pain_vaginal_bleeding_clots: null,
                lower_abdominal_pain_with_uterine_contractions: null,
                vaginal_bleeding_feeling_water_breaking: null,
                pain_burning_while_urinating: null,
                need_urinating: null,
                bloody_urine: null,
                pressure_cramping_groin: null,
                pain_arms_legs_back_chest: null,
                difficulty_breathing: null,
                temprature: null,
                high_risk_pregnancy: null,
                labor_pain: null,
                water_broken: null,
                water_not_clear: null,
                water_smells_bad: null,
                water_gush: null,
                baby_not_moving: null,
                water_breaking_early18hour: null,
                persistent_abdominal_pain: null,
                significant_vaginal_bleeding: null,
                baby_move_well: null,
            }
        },
        PNC: {},
        newborn: {}
    };
</script>
