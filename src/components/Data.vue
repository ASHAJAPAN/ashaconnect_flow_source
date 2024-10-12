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
            SBP: null,
            DBP: null,
            heart_rate: '',
            menstruation: null,
            Gravidity: null,
            Parity: null,
            SpO2: null,
        },
        ANC: {
            LMP: null,
            EDD: null,
            BirthFacilityType: null,
            BirthFacilityName: null,
            weight_before_pregnancy: null,
            waist_before_pregnancy: null,
            flow: {
                // before 20
                signs_delivery: null,
                nausea: null,
                lower_abdominal_pain_vaginal_bleeding_clots: null,
                need_urinating: null,
                bloody_urine: null,
                pressure_cramping_groin: null,
                pain_arms_legs_back_chest: null,
                difficulty_breathing: null,
                //before 36
                lower_abdominal_pain_with_uterine_contractions: null, //b2
                vaginal_bleeding_feeling_water_breaking: null, //b3
                //General
                temperature: null,
                pain_burning_while_urinating: null, // a11, d19
                //after 36
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
                severe_fatigue: null,
                severe_edema: null,
                vomiting: null,
                severe_stomachache: null,
                severe_headache: null,
                frequent_urination: null
            },
            test: {
                blood_test: null,
                HIV: null,
                hemoglobin: null,
                anemia: null,
                urine_test: null,
                urine_protein: null,
                urine_glucose: null,
                TDVaccine: null,
                supplement: null,
                ultrasound: null,
            }
        },
        PNC: {
            flow: {
                headache: null, //e2
                nausea_vomit: null,
                change_vision: null,
                upper_abdominal_pain: null,
                vaginal_bleeding: null, //e7
                fatigue_weakness: null, //e9
                irregular_heartbeats: null, //e10
                shortness_breaths: null, //e11
                dizziness_lightheadedness: null, //e12
                chest_pain: null, //e13
                difficult_breathing: null, // e14
                redness_swelling: null, //e15
                calf_pain: null, //e16

                abdominal_pain: null, // e8
                swollen_breast: null, // e17
                red_breast: null, // e18
                sore_cracked_nipples: null, // e19
                problems_urinating: null, // e20
                perineum_pain: null, // e21
                puslike_discharge: null, // e22
                sad_despair: null, // e23
                anxious: null, // e24
                detouched: null, // e25
                hurting_you: null, // e26
                DV: null, // e27
            }
        },
        Newborn: {
            flow: {
                moving: null, // f5
                breathe: null, // f6
                reapiratory_rate: null, // f7
                retraction: null, // f8
                grunting: null, // f9
                body_temperature: null,
                body_temperature2: null,
                body_temperature3: null,
                different: null, // f14
                difficult_feed: null, // f15
                red_cord: null, // f16
                pustules: null, // f17
                family_infectious_disease: null, // f18
                bleeding: null, //f23
                cord_draining_pus: null,
                vomit: null, // f20
                dark_stool: null, // f21
                yellow_face: null,
                seizure: null, // f25
                pustules_eczema: null, // f26
                urinate_6_times: null,
                bowel_movement: null,
                seen_by_health_worker: null,
                when_weighted: null,
                weight: null,
            }
        },
        Asthma: {
            flow: {
                alter_consciousness: null,
                cyanosis: null,
                effort_breathing: null,
                day_symptoms: null,
                night_symptoms: null,
                affect_life: null,
                exacerbations: null,
                respiratory_rate: null,
                difficult_sentence_in_one_breath: null,
            }
        },
        COPD: {
            flow: {
                exacerbations: null,
                breath_shortness_daily: null,
                breath_shortness_rest: null,
            }
        },
        Hypertension: {
            flow: {
                chest_pain: null,
                severe_headache: null,
                nausea: null,
                anxiety: null,
                seizures: null,
                unresponsiveness: null,
                numbness: null,
                current_medicine: null,
                past_medicine: null,
            }
        },
        Diabetes: {
            flow: {
                blood_glucose: null,
                respiratory_rate: null,
                lost_consciousness: null,
                increased_thirst: null,
                drink_water: null,
                weak_tired: null,
                lost_weight: null,
                frequent_urination: null,

            }
        },
        Lifestyle: {
            flow: {
                increase_weight_wc: null,
                lots_of_rice: null,
                kaja: null,
                no_walk: null,
            }
        },
        Medication: {
            flow: {
                have_medication: null,
                missed_medication: null,
                no_medication_intent: null,
                cause_feeling_unwell: null,
                tell_medical: null,
                cause_improved_symptoms: null,
                cause_ineffective: null,
                cause_not_understand: null,
                cause_not_trust: null,
                cause_no_money_given: null,
                cause_no_money_not_given: null,
                cause_distance: null,
                cause_transportation_fee: null,
                dont_have_medication_cause: null,
                not_visit_cause_other: null,
            }
        },
        Follow: {
            flow: {
                when: null,
                where: null,
                agree: null,
                agree_final: null,
            }
        }
    };
</script>
