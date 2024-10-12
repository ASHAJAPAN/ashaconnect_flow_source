<script>
    export default
        [
            {
                id: 'Start',
                type: "Selection",
                msg: 'Select the flow you want to test. ',
                explanation: '',
                //nexts: [ 'B1', 'Set1', 'F1'],
                caps: [
                    //'New patient',
                    'Normal interview',
                    'Follow-up interview'
                ],
                setname: ['interview_type'],
                setvalue: [/*'new',*/ 'normal', 'follow']
            },

            {
                id: 'Set1',
                type: "Selection",
                msg: 'Select the patient to test. ',
                explanation: '',
                caps: [
                    'ANC (5 months)',
                    'ANC (9 months)',
                    'PNC',
                    'Asthma',
                    'COPD',
                    'Hypertension',
                    'Diabetes'
                ],
                ifs: ['normal'],
                    //}, {
                    //    id: '',
                    //    cap: 
                    //}, {
                    //    id: '',
                    //    cap: 'COPD patient'
                    //}, {
                    //    id: '',
                    //    cap: 'Hypertension & Diabetes patient'
                    //}, {
                    //    id: 'Previous test',
                    //    cap: 'Previous test'
                    //}, {
                    //    id: 'From file',
                //    cap: 'From file'
                test: true
            },

            // ******* Basic *******

            // name
            {
                id: 'B1',
                type: "MultiInput",
                msg: 'Tell me your name',
                explanation: '',
                inputs: [
                    {
                        cap: 'First name',
                        dataname: ['basic', 'name', 'first']
                    }, {
                        cap: 'Middle name',
                        dataname: ['basic', 'name', 'middle']
                    }, {
                        cap: 'Family name',
                        dataname: ['basic', 'name', 'family']
                    }
                ],
                ifs: ['new'],
            },

            // gender
            {
                id: 'B2',
                type: "Selection",
                msg: 'Select your gender.',
                explanation: '',
                caps: ['Male', 'female', 'other'],
                ifs: ['new'],
                dataname: ['basic', 'gender']
            },

            {
                id: 'B3',
                type: "TextInputOptional",
                msg: 'Tell me your phone number.',
                explanation: 'You can skip this question.',
                ifs: ['new'],
                dataname: ['basic', 'phone_number']
            },

            {
                id: 'B4',
                type: "DateInputOptional",
                msg: 'Tell me your birthday.',
                explanation: 'You can skip this question if you do not know.',
                ifs: ['new'],
                dataname: ['basic', 'birthdate']
            },

            // Age
            {
                id: 'B5',
                type: "TextInputOptional",
                msg: 'Tell me your age.',
                explanation: 'You can skip this question if you do not know.',
                ifs: ['new', 'unknownbirthday'],
                dataname: ['basic', 'age']
            },

            {
                id: 'B6',
                type: "TextInput",
                msg: 'Input the ward number.',
                explanation: '',
                ifs: ['new'],
                dataname: ['basic', 'ward']
            },

            // HealthConnect ID
            {
                id: 'B7',
                type: "TextInputOptional",
                msg: 'Tell me your HealthConnect ID. ',
                explanation: 'You can skip this question if you do not have.',
                ifs: ['new'],
                dataname: ['basic', 'healthconnect_id']
            },

            // ******* Medical Basic *******
            // height
            {
                id: 'MB2',
                type: "TextInputOptional",
                msg: 'Tell me your height by cm. ',
                explanation: 'You can skip this question if you do not know.',
                ifs: ['new', 'adult'],
                dataname: ['medical_basic', 'height']
            },

            // blood type
            {
                id: 'MB3',
                type: "Selection",
                msg: 'Select your blood type.',
                explanation: 'select unknown if you do not know.',
                caps: ['A', 'B', 'O', 'AB', 'Unknown'],
                ifs: ['new'],
                dataname: ['medical_basic', 'blood_type']
            },

            {
                id: 'MB4',
                type: "Selection",
                msg: 'Select your blood type Rh factor.',
                explanation: 'select unknown if you do not know.',
                caps: ['Rh+', 'Rh-', 'Unknown'],
                ifs: ['new'],
                dataname: ['medical_basic', 'rh_factor']
            },

            //Past Medical History
            // asthma
            {
                id: 'MB10',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with asthma?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'asthma']
            },

            // epilepsy
            {
                id: 'MB11',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with epilepsy?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'epilepsy']
            },

            {
                id: 'MB12',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with heart disease?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'heart_disease']
            },

            // diabetes 1
            {
                id: 'MB13',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with type1 Diabetes?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'type1_diabetes']
            },
            
            // diabetes 2
            {
                id: 'MB14',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with type2 Diabetes?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'type2_diabetes']
            },

            {
                id: 'MB15',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with systemic autoimmune disease?',
                explanation: 'e.g. Systemic Lupus Erythematosus (SLE), rheumatoid arthritis',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'systemic_autoimmune_disease']
            },

            {
                id: 'MB16',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with haemoglobinopathies: sickle cell anaemia, thalassaemias?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'haemoglobinopathies']
            },

            {
                id: 'MB17',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with endocrine disorder, such as thyroid function?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'thyroid_function']
            },

            {
                id: 'MB18',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with kidney or liver diseases?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'liver_diseases']
            }, 

            {
                id: 'MB19',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with cystic fibrosis?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'cystic_fibrosis']
            },

            {
                id: 'MB20',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with copd?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'copd']
            },

            {
                id: 'MB21',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with hypertension?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'medical_history', 'hypertension']
            },

            {
                id: 'MB22',
                type: "YesNo",
                msg: 'Have you ever been diagnosed with other severe disease?',
                explanation: '',
                setname: ['medical_basic', 'other_disease'],
                setvalue: ['Yes', 'No'],
                ifs: ['new'],
            },

            // other disease
            {
                id: 'MB23',
                type: "TextInput",
                msg: 'Tell me the name of the disease.',
                explanation: '',
                ifs: ['new', 'other_disease'],
                dataname: ['medical_basic', 'medical_history', 'other']
            },

            //Past Treatment History
            {
                id: 'MB40',
                type: "YesNoUnknown",
                msg: 'Have you ever been given internal medicine?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'treatment_history', 'internal_medicine']
            },

            {
                id: 'MB41',
                type: "YesNoUnknown",
                msg: 'Have you ever been given self injection?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'treatment_history', 'self_injection']
            },

            {
                id: 'MB42',
                type: "YesNoUnknown",
                msg: 'Have you ever been given surgery?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'treatment_history', 'surgery']
            },

            // other treatment
            {
                id: 'MB43',
                type: "YesNo",
                msg: 'Have you ever been given other treatment?',
                explanation: '',
                setname: ['medical_basic', 'other_treatment'],
                ifs: ['new'],
                setvalue: ['Yes', 'No'],
            },

            // other treatment name
            {
                id: 'MB44',
                type: "TextInput",
                msg: 'Tell me the name of the treatment.',
                explanation: '',
                ifs: ['new', 'other_treatment'],
                dataname: ['medical_basic', 'treatment_history', 'other']
            }, 

            // *** Past Infectious Diseases
            {
                id: 'MB50',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with HIV?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                ifs: ['new'],
                dataname: ['medical_basic', 'infectious_diseases', 'HIV']
            },

            {
                id: 'MB51',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with HCV?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                ifs: ['new'],
                dataname: ['medical_basic', 'infectious_diseases', 'HCV']
            },

            {
                id: 'MB52',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with HBV?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                ifs: ['new'],
                dataname: ['medical_basic', 'infectious_diseases', 'HBV']
            },

            // TB
            {
                id: 'MB53',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with TB?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                ifs: ['new'],
                dataname: ['medical_basic', 'infectious_diseases', 'TB']
            },

            // syphilis
            {
                id: 'MB54',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with Syphilis?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                ifs: ['new'],
                dataname: ['medical_basic', 'infectious_diseases', 'Syphilis']
            }, 

            // *** allergy
            // food
            {
                id: 'MB60',
                type: "YesNoUnknown",
                msg: 'Are you allergic to any food?',
                explanation: 'such as milk, eggs or nuts',
                setname: ['medical_basic', 'food_allergy'],
                setvalue: ['Yes', 'No'],
                ifs: ['new']
            },

            {
                id: 'MB61',
                type: "TextInput",
                msg: 'Tell me the food you are allergic.',
                explanation: '',
                ifs: ['new', 'food_allergy'],
                dataname: ['medical_basic', 'allergy_food']
            },

            // medicine
            {
                id: 'MB62',
                type: "YesNoUnknown",
                msg: 'Are you allergic to any medicine?',
                explanation: '',
                setname: ['medical_basic', 'medicine_allergy'],
                setvalue: ['Yes', 'No'],
                ifs: ['new']
            },

            {
                id: 'MB63',
                type: "TextInput",
                msg: 'Tell me the medicine you are allergic.',
                explanation: '',
                ifs: ['new', 'medicine_allergy'],
                dataname: ['medical_basic', 'allergy_medicine']
            },

            // *** lifestyle
            // alcohol
            {
                id: 'MB64',
                type: "YesNo",
                msg: 'Do you drink alcohol?',
                explanation: '',
                setname: ['medical_basic', 'alcohol'],
                setvalue: ['Yes', 'No'],
                ifs: ['new']
            },

            {
                id: 'MB65',
                type: "Selection",
                msg: 'Tell me the amount of alcohol you drink a day.',
                explanation: '',
                ifs: ['new', 'alcohol'],
                caps: [
                    'Less than a cup',
                    '2 - 3 cups',
                    'More than 4 cups'
                ],
                dataname: ['medical_basic', 'alcohol']
            },

            // tabacco
            {
                id: 'MB66',
                type: "YesNo",
                msg: 'Do you smoke tabacco?',
                explanation: '',
                setname: ['medical_basic', 'tabacco'],
                setvalue: ['Yes', 'No'],
                ifs: ['new']
            },

            {
                id: 'MB67',
                type: "TextInput",
                msg: 'How many cigarettes do you smoke per day?',
                explanation: '',
                ifs: ['new', 'tabacco'],
                dataname: ['medical_basic', 'tabacco_count']
            },

            {
                id: 'MB68',
                type: "TextInput",
                msg: 'How many years have you smoked?',
                explanation: 'Approximate number of years is acceptable.',
                ifs: ['new', 'tabacco'],
                dataname: ['medical_basic', 'tabacco_year']
            },

            // chewing tabacco
            {
                id: 'MB69',
                type: "YesNo",
                msg: 'Do you have chewing tobacco?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'chewing_tabacco']
            },

            // living dust
            {
                id: 'MB70',
                type: "YesNo",
                msg: 'Is the living environment prone to expose dust or smoke?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'dust_in_living']
            },

            // working dust
            {
                id: 'MB71',
                type: "YesNo",
                msg: 'Are you exposed to dust or smoke while you work?',
                explanation: '',
                ifs: ['new'],
                dataname: ['medical_basic', 'dust_in_working']
            },

            // menstruation
            {
                id: 'MB81',
                type: "YesNo",
                msg: 'Has your menstruation begun?',
                explanation: '',
                ifs: ['new', 'female'],
                dataname: ['medical_basic', 'menstruation']
            },

            // Gravidity
            {
                id: 'MB82',
                type: "TextInput",
                msg: 'Tell me your gravidity (number of pregnancies).',
                explanation: '',
                ifs: ['new', 'menstruation'],
                dataname: ['medical_basic', 'Gravidity']
            },

            // Parity
            {
                id: 'MB83',
                type: "TextInput",
                msg: 'Tell me your parity (number of delivery).',
                explanation: '',
                ifs: ['new', 'Gravidity'],
                dataname: ['medical_basic', 'Parity']
            },

            // status
            {
                id: 'MB100',
                type: "YesNo",
                msg: '[To CHW] Is she pregnant?',
                explanation: '',
                setname: ['subcategory', 'ANC'],
                setvalue: ['Yes', 'No'],
                ifs: ['new', 'Gravidity']
            }, 

            {
                id: 'MB101',
                type: "YesNo",
                msg: '[To CHW] Is she a mother of newborn baby?',
                explanation: '',
                setname: ['subcategory', 'PNC'],
                setvalue: ['Yes', 'No'],
                ifs: ['new', 'Gravidity', 'notANC']
            }, 
            
            {
                id: 'MB102',
                type: "YesNo",
                msg: '[To CHW] Had she miscarried or aborted her baby?',
                explanation: '',
                setname: ['subcategory', 'Abortion'],
                setvalue: ['Yes', 'No'],
                ifs: ['new', 'Gravidity', 'notANC', 'notPNC']
            }, 

            // ******* ANC Basic *******
            // birth facility
            {
                id: 'ANCBasic1',
                type: "YesNo",
                msg: 'Have you decided where to give birth?',
                explanation:'',
                setname: ['ANC', 'facility_decided'],
                setvalue: ['Yes', 'No'],
                ifs: ['ANC', 'facility_not_decided']
            },

            {
                id: 'ANCBasic2',
                type: "Selection",
                msg: 'Where are you planning to give birth?',
                explanation: '',
                caps: [
                    'Home',
                    'Health Post',
                    'Government Elsewhere',
                    'Community Health Unit / Basic Health Unit',
                    'Birth Center',
                    'Antenatal Care Center',
                    'Ayurveda Clinic',
                    'Private center within the municipality',
                    'Private center outside the municipality',
                    'India',
                    'Other'
                ],
                ifs: ['ANC', 'facility_decided'],
                dataname: ['ANC', 'BirthFacilityType']
            },

            {
                id: 'ANCBasic3',
                type: "TextInput",
                msg: 'Tell me the name of birth facility.',
                explanation: '',
                ifs: ['ANC', 'facility_decided'],
                dataname: ['ANC', 'BirthFacilityName']
            },

            {
                id: 'ANCBasic4',
                type: "Message",
                msg: 'Tell her to decide the birth facility.',
                explanation: '',
                ifs: ['ANC', 'facility_not_decided']
            },

            // LMP
            {
                id: 'ANCBasic11',
                type: "DateInput",
                msg: 'Tell me your first day of the last menstrual period.',
                explanation: '',
                ifs: ['ANC', 'noLMP'],
                dataname: ['ANC', 'LMP']
            },

            // EDD
            {
                id: 'ANCBasic12',
                type: "YesNo",
                msg: 'Have you ever been told when your estimated delivery date is?',
                explanation: '',
                setname: ['ANC', 'toldEDD'],
                setvalue: ['Yes', 'No'],
                ifs: ['ANC', 'noEDD'],
            },

            {
                id: 'ANCBasic13',
                type: "DateInput",
                msg: 'Tell me your estimated delivery date.',
                explanation: '',
                dataname: ['ANC', 'EDD'],
                ifs: ['ANC', 'toldEDD'],
            },

            // weight
            {
                id: 'ANCBasic14',
                type: "TextInput",
                msg: 'Tell me your weight before pregnancy.',
                explanation: '',
                dataname: ['ANC', 'weight_before_pregnancy'],
                ifs: ['ANC']
            },

            // waist
            {
                id: 'ANCBasic15',
                type: "TextInput",
                msg: 'Tell me your waist before pregnancy.',
                explanation: '',
                dataname: ['ANC', 'waist_before_pregnancy'],
                ifs: ['ANC']
            },

            // ******* General *******
            // blood pressure
            {
                id: 'General1',
                type: "MultiInput",
                msg: '[To CHW] Measure the blood pressure and enter the value.',
                explanation: '',
                inputs: [
                    {
                        cap: 'SBP',
                        dataname: ['medical_basic', 'SBP']
                    }, {
                        cap: 'DBP',
                        dataname: ['medical_basic', 'DBP']
                    }, {
                        cap: 'Heart rate',
                        dataname: ['medical_basic', 'heart_rate']
                    }],
                checkComplete: 'Yes',
                ifs: ['normal']
            },

            // ******* ANC *******

            // body temperature
            {
                id: 'ANC0',
                type: "TextInput",
                msg: 'Take body temperature',
                explanation: '',
                ifs: ['ANC'],
                dataname: ['ANC', 'flow', 'temperature'],
                checkComplete: 'Yes',
            },

            {
                id: 'ANC_a8',
                type: "YesNo",
                msg: 'Are there signs of delivery (contractions, water breaking)?',
                explanation: '',
                ifs: ['ANC', 'ANCbefore36'],
                checkComplete: 'Yes',
                dataname: ['ANC', 'flow', 'signs_delivery']
            }, 

            // before 36 weeks
        
            // before 20 weeks
            {
                id: 'ANC_a9',
                type: "YesNo",
                msg: 'Do you have severe morning sickness in the form of nausea that you can not eat or vomiting?',
                explanation:'',
                ifs: ['ANC', 'ANCbefore20'],
                checkComplete: 'Yes',
                dataname: ['ANC', 'flow', 'nausea']
            }, 
        
            {
                id: 'ANC_a10',
                type: "YesNo",
                msg: 'Do you have lower abdominal pain and vaginal bleeding clots?',
                explanation:'',
                ifs: ['ANC', 'ANCbefore20'],
                checkComplete: 'Yes',
                dataname: ['ANC', 'flow', 'lower_abdominal_pain_vaginal_bleeding_clots']
            },
        
            // after 20 weeks
            {
                id: 'ANC_b2',
                type: "YesNo",
                msg: 'Do you have lower abdominal pain with uterine contractions?',
                explanation: '',
                ifs: ['ANC', 'ANCafter20', 'ANCbefore36'],
                checkComplete: 'Yes',
                dataname: ['ANC', 'flow', 'lower_abdominal_pain_with_uterine_contractions']
            },

            {
                id: 'ANC_b3',
                type: "YesNo",
                msg: 'Is there vaginal bleeding or a feeling of water breaking?',
                explanation: '',
                ifs: ['ANC', 'ANCafter20', 'ANCbefore36'],
                checkComplete: 'Yes',
                dataname: ['ANC', 'flow', 'vaginal_bleeding_feeling_water_breaking']
            }, 
        
            {
                id: 'ANC_a11',
                type: "YesNo",
                msg: 'Do you feel pain or burning while urinating?',
                explanation:'',
                ifs: ['ANC', 'ANCbefore36'],
                dataname: ['ANC', 'flow', 'pain_burning_while_urinating']
            }, 
        
            {
                id: 'ANC_a12',
                type: "YesNo",
                msg: 'Do you feel the need of urinating despite having an empty bladder?',
                explanation:'',
                ifs: ['ANC', 'ANCbefore36'],
                dataname: ['ANC', 'flow', 'need_urinating ']
            }, 
        
            {
                id: 'ANC_a13',
                type: "YesNo",
                msg: 'Do you have bloody urine?',
                explanation:'',
                ifs: ['ANC', 'ANCbefore36'],
                dataname: ['ANC', 'flow', 'bloody_urine']
            }, 
        
            {
                id: 'ANC_a14',
                type: "YesNo",
                msg: 'Do you have pressure or cramping in the groin or lower abdomen?',
                explanation:'',
                ifs: ['ANC', 'ANCbefore36'],
                dataname: ['ANC', 'flow', 'pressure_cramping_groin']
            }, 
        
            {
                id: 'ANC_a15',
                type: "YesNo",
                msg: 'Do you have pain in your arms, legs, back, chest or stomach (severe, dull, sharp or throbbing pain)?',
                explanation:'',
                ifs: ['ANC', 'ANCbefore36'],
                dataname: ['ANC', 'flow', 'pain_arms_legs_back_chest']
            }, 
        
            {
                id: 'ANC_a16',
                type: "YesNo",
                msg: 'Do you have difficulty breathing?',
                explanation:'',
                ifs: ['ANC', 'ANCbefore36'],
                dataname: ['ANC', 'flow', 'difficulty_breathing']
            },

            // after 36 weeks
            {
                id: 'ANC_d1',
                type: "YesNo",
                msg: 'Were you told that you are high risk pregnancy?',
                explanation: 'ex) previous C - section, abnormal location of placenta, not head position, preeclampsia..etc',
                ifs: ['ANC', 'ANCafter36'],
                dataname: ['ANC', 'flow', 'high_risk_pregnancy']
            },

            {
                id: 'ANC_d2',
                type: "YesNo",
                msg: 'Was your labor pain onset?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36'],
                dataname: ['ANC', 'flow', 'labor_pain']
            },

            // water broken
            {
                id: 'ANC_B3',
                type: "YesNo",
                msg: 'Have your water broken?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36'],
                dataname: ['ANC', 'flow', 'water_broken']
            },

            {
                id: 'ANC_B4',
                type: "YesNo",
                msg: 'Is the water not clear?',
                explanation: 'bloody, yellow, or green',
                ifs: ['ANC', 'ANCafter36', 'water_broken'],
                dataname: ['ANC', 'flow', 'water_not_clear']
            },

            {
                id: 'ANC_B5',
                type: "YesNo",
                msg: 'Does your water smells bad?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'water_broken'],
                dataname: ['ANC', 'flow', 'water_smells_bad']
            },

            {
                id: 'ANC_B6',
                type: "YesNo",
                msg: 'Does your water gush?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'water_broken'],
                dataname: ['ANC', 'flow', 'water_gush']
            },

            {
                id: 'ANC_d7',
                type: "YesNo",
                msg: 'Is your baby not moving?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'water_broken'],
                dataname: ['ANC', 'flow', 'baby_not_moving']
            },

            {
                id: 'ANC_d9',
                type: "YesNo",
                msg: 'Did the water breaking occurred 18 hours ago or earlier?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'water_broken'],
                dataname: ['ANC', 'flow', 'water_breaking_early18hour']
            },

            {
                id: 'ANC_d10',
                type: "YesNo",
                msg: ' Do you have persistent abdominal pain with uterine contraction?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'persistent_abdominal_pain']
            },

            {
                id: 'ANC_d11',
                type: "YesNo",
                msg: 'Do you have significant vaginal bleeding?',
                explanation: 'flowing, more than menstrual blood',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'significant_vaginal_bleeding']
            },

            {
                id: 'ANC_B15',
                type: "YesNo",
                msg: 'Does your baby usually move well?',
                explanation: 'Is your baby moving as much as usual?',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'baby_move_well']
            },

            {
                id: 'ANC_B17',
                type: "YesNo",
                msg: 'Do you feel severe fatigue?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'severe_fatigue']
            },

            {
                id: 'ANC_B18',
                type: "YesNo",
                msg: 'Do you have severe edema?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'severe_edema']
            },

            {
                id: 'ANC_B19',
                type: "YesNo",
                msg: 'Do you have nausea?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'nausea']
            },

            {
                id: 'ANC_B20',
                type: "YesNo",
                msg: 'Have you had any episodes of vomiting?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'vomiting']
            },

            {
                id: 'ANC_B21',
                type: "YesNo",
                msg: 'Do you have severe stomachache?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'severe_stomachache']
            },

            {
                id: 'ANC_B22',
                type: "YesNo",
                msg: 'Do you have severe headache?',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'severe_headache']
            },

            {
                id: 'ANC_B24',
                type: "YesNo",
                msg: 'Is there vaginal bleeding or a feeling of water breaking??',
                explanation: '',
                ifs: ['ANC', 'ANCafter36', 'notVeryUrgent'],
                dataname: ['ANC', 'flow', 'vaginal_bleeding_feeling_water_breaking']
            },

            {
                id: 'ANC12',
                type: "MultiInput",
                msg: '[To CHW] Remeasure the blood pressure and enter the value.',
                explanation: '',
                inputs: [
                    {
                        cap: 'SBP',
                        dataname: ['medical_basic', 'SBP']
                    }, {
                        cap: 'DBP',
                        dataname: ['medical_basic', 'DBP']
                    }, {
                        cap: 'Heart rate',
                        dataname: ['medical_basic', 'heart_rate']
                    }],
                ifs: ['ANC', 'BPcategory2'],
            },

            // ANC TEST
            //Have you received Tetanus and Diphtheria vaccination, Iron and folic acid supplement at ANC ?
            {
                id: 'ANCTEST1',
                type: "YesNo",
                msg: 'Has the blood test been completed?',
                explanation: '',
                ifs: ['ANC', 'no_blood_test'],
                dataname: ['ANC', 'test', 'blood_test']
            },

            {
                id: 'ANCTEST2',
                type: "YesNoUnknown",
                msg: 'Tell me the result of HIV test.',
                explanation:'You can answer by no or unknown if you do not want to answer.',
                ifs: ['ANC', 'blood_test'],
                dataname: ['ANC', 'test', 'HIV']
            },

            {
                id: 'ANCTEST3',
                type: "TextInput",
                msg: 'Tell me your hemoglobin value.',
                explanation: '',
                ifs: ['ANC', 'notVeryUrgent', 'blood_test'],
                dataname: ['ANC', 'test', 'hemoglobin']
            },

            {
                id: 'ANCTEST4',
                type: "YesNoUnknown",
                msg: 'Tell me the result of anemia test.',
                explanation: '',
                ifs: ['ANC', 'notVeryUrgent', 'blood_test'],
                dataname: ['ANC', 'test', 'anemia']
            },
            
            {
                id: 'ANCTEST5',
                type: "YesNo",
                msg: 'Has the urine test been completed?',
                explanation: '',
                ifs: ['ANC', 'notVeryUrgent', 'no_urine_test'],
                dataname: ['ANC', 'test', 'urine_test']
            },

            {
                id: 'ANCTEST6',
                type: "Selection",
                msg: 'Tell me the result of urine protein test.',
                explanation: '',
                ifs: ['ANC', 'notVeryUrgent', 'urine_test'],
                caps: [
                    '-',
                    '+',
                    '++',
                    '+++',
                    'Unknown'
                ],
                dataname: ['ANC', 'test', 'urine_protein']
            },

            {
                id: 'ANCTEST7',
                type: "Selection",
                msg: 'Tell me the result of urine glucose test.',
                explanation: '',
                ifs: ['ANC', 'notVeryUrgent', 'urine_test'],
                caps: [
                    '-',
                    '+',
                    '++',
                    '+++',
                    'Unknown'
                ],
                dataname: ['ANC', 'test', 'urine_glucose']
            },
            
            {
                id: 'ANCTEST10',
                type: "YesNo",
                msg: 'Have you ever received Tetanus and Diphtheria vaccination?',
                explanation: '',
                ifs: ['ANC', 'notVeryUrgent', 'no_tdvaccine'],
                dataname: ['ANC', 'test', 'TDVaccine'],
            },
            
            {
                id: 'ANCTEST11',
                type: "YesNo",
                msg: 'Have you received Iron and folic acid supplement at ANC?',
                explanation: '',
                ifs: ['ANC', 'notVeryUrgent', 'no_supplement'],
                dataname: ['ANC', 'test', 'supplement']
            },
            
            {
                id: 'ANCTEST12',
                type: "YesNo",
                msg: 'Have you recerived ultrasound test at medical facility?',
                explanation: '',
                ifs: ['ANC', 'notVeryUrgent', 'no_ultrasound'],
                dataname: ['ANC', 'test', 'ultrasound']
            },
            
            // *********************PNC*********************
            {
                id: 'PNC_e2',
                type: "YesNo",
                msg: 'Do you have headache?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'headache']
            },

            {
                id: 'PNC_e3',
                type: "YesNo",
                msg: 'Do you have nausea or vomiting?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'nausea_vomit']
            },

            {
                id: 'PNC_e4',
                type: "YesNo",
                msg: 'Do you experience change in vision?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'change_vision']
            },

            {
                id: 'PNC_e5',
                type: "YesNo",
                msg: 'Do you have upper abdominal pain?',
                explanation: '',
                ifs: ['PNC'],
                checkComplete: 'Yes',
                dataname: ['PNC', 'flow', 'upper_abdominal_pain']
            },

            {
                id: 'PNC_e7',
                type: "YesNo",
                msg: 'Does the vaginal bleeding continue to flow or increase?',
                explanation: '',
                ifs: ['PNC'],
                checkComplete: 'Yes',
                dataname: ['PNC', 'flow', 'vaginal_bleeding']
            },

            {
                id: 'PNC_e9',
                type: "YesNo",
                msg: 'Do you feel severe fatigue or weakness?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'fatigue_weakness']
            },

            {
                id: 'PNC_e10',
                type: "YesNo",
                msg: 'Do you have irregular heartbeats?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'irregular_heartbeats']
            },

            {
                id: 'PNC_e11',
                type: "YesNo",
                msg: 'Do you have shortness of breaths?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'shortness_breaths']
            },

            {
                id: 'PNC_e12',
                type: "YesNo",
                msg: 'Do you have dizziness or lightheadedness?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'dizziness_lightheadedness']
            },

            // chest pain
            {
                id: 'PNC_e13',
                type: "YesNo",
                msg: 'Do you have chest pain?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'chest_pain']
            },

            {
                id: 'PNC_e14',
                type: "YesNo",
                msg: 'Do you have fast or difficult breathing?',
                explanation: '',
                ifs: ['PNC'],
                checkComplete: 'Yes',
                dataname: ['PNC', 'flow', 'difficult_breathing']
            },
            // swelling body
            {
                id: 'PNC_e15',
                type: "YesNo",
                msg: 'Do you have Redness or swelling of body?',
                explanation: '',
                ifs: ['PNC'],
                checkComplete: 'Yes',
                dataname: ['PNC', 'flow', 'redness_swelling']
            },
            // calf pain
            {
                id: 'PNC_e16',
                type: "YesNo",
                msg: 'Do you have calf pain?',
                explanation: '',
                ifs: ['PNC'],
                checkComplete: 'Yes',
                dataname: ['PNC', 'flow', 'calf_pain']
            },
            // abdominal pain
            {
                id: 'PNC_e8',
                type: "YesNo",
                msg: 'Do you have abdominal pain that makes daily life difficult?',
                explanation: '',
                ifs: ['PNC'],
                checkComplete: 'Yes',
                dataname: ['PNC', 'flow', 'abdominal_pain']
            },
            
            {
                id: 'PNC_e17',
                type: "YesNo",
                msg: 'Do you have swollen breast?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'swollen_breast']
            },
            
            {
                id: 'PNC_e18',
                type: "YesNo",
                msg: 'Do you have redness in breast?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'red_breast']
            },

            // cracked nipples
            {
                id: 'PNC_e19',
                type: "YesNo",
                msg: 'Do you have sore or cracked nipples?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'sore_cracked_nipples']
            },

            // problems urinating
            {
                id: 'PNC_e20',
                type: "YesNo",
                msg: 'Do you have problems urinating, or leaking?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'problems_urinating']
            },
            
            {
                id: 'PNC_e21',
                type: "YesNo",
                msg: 'Do you have increased pain in perineum?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'perineum_pain']
            },
            
            {
                id: 'PNC_e22',
                type: "YesNo",
                msg: 'Do you have pus-like discharge in perineum?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'puslike_discharge']
            },
            
            {
                id: 'PNC_e23',
                type: "YesNo",
                msg: 'Do you feel strong feelings of sadness or dispair?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'sad_despair']
            },
            
            {
                id: 'PNC_e24',
                type: "YesNo",
                msg: 'Do you feel anxious without clear reasons?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'anxious']
            },
            
            {
                id: 'PNC_e25',
                type: "YesNo",
                msg: 'Do you feel being detouched?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'detouched']
            },
            
            {
                id: 'PNC_e26',
                type: "YesNo",
                msg: 'Do you have a thoughts of hurting yourself or your baby?',
                explanation: '',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'hurting_you']
            },

            // DV
            {
                id: 'PNC_e27',
                type: "YesNoUnknown",
                msg: 'Violence from husband is suspected?',
                explanation: 'The patient does not need to answer this question if she does not want to',
                ifs: ['PNC'],
                dataname: ['PNC', 'flow', 'DV']
            },
            
            {
                id: 'PNC_E2',
                type: "Message",
                msg: '[To CHW] Discuss with your manager about the further response',
                explanation: '',
                ifs: ['PNC','DV'],
                dataname: ['PNC', 'flow', 'DV']
            },

            {
                id: 'PNC_e28',
                type: "MultiInput",
                msg: '[To CHW] Remeasure the blood pressure and enter the value.',
                explanation: '',
                inputs: [
                    {
                        cap: 'SBP',
                        dataname: ['medical_basic', 'SBP']
                    }, {
                        cap: 'DBP',
                        dataname: ['medical_basic', 'DBP']
                    }, {
                        cap: 'Heart rate',
                        dataname: ['medical_basic', 'heart_rate']
                    }],
                ifs: ['PNC', 'BPcategory2'],
            },

            {
                id: 'PNC_e29',
                type: "YesNo",
                msg: '[To CHW] Do you want do start newborn interview?',
                explanation: '',
                ifs: ['PNC'],
                setname: ['subcategory', 'Newborn'],
                setvalue: ['Yes', 'No']
            },
            //********* Newborn *********

            // Moving
            {
                id: 'Newborn_f5',
                type: "YesNo",
                msg: 'Does your baby move spontaneously?',
                explanation: '',
                ifs: ['Newborn'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'moving']
            },

            // Breathe
            {
                id: 'Newborn_f6',
                type: "YesNo",
                msg: 'Breathe?',
                explanation: '',
                ifs: ['Newborn'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'breathe']
            },

            // reapiratory rate'
            {
                id: 'Newborn_f7',
                type: "TextInput",
                msg: '[To CHW] Measure reapiratory rate',
                explanation: '',
                ifs: ['Newborn'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'reapiratory_rate']
            },

            // Retraction
            {
                id: 'Newborn_f8',
                type: "YesNo",
                msg: 'Retraction?',
                explanation: 'Greater rise and fall of the chest during breathing',
                ifs: ['Newborn'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'retraction']
            },

            {
                id: 'Newborn_f9',
                type: "YesNo",
                msg: 'Grunting?',
                explanation: 'Groaning',
                ifs: ['Newborn'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'retraction']
            },

            // body temperature
            {
                id: 'Newborn_f10',
                type: "TextInput",
                msg: '[To CHW] Take body temperature',
                explanation: 'Insert the thermometer straight under the armpit or groin.',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'body_temperature']
            },

            {
                id: 'Newborn_f11',
                type: "TextInput",
                msg: '[To CHW] Take body temperature one more time',
                explanation: '',
                ifs: ['Newborn', 'too_low_temprature'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'body_temperature2']
            },

            {
                id: 'Newborn_f12',
                type: "TextInput",
                msg: '[To CHW] Take body temperature one more time',
                explanation: 'Try following ways and re - inspection 30 minute later ・Warm the room > 77°F(25°C) ・Swaddling with dry and clean towels or cloths ・Add the cloths ・Hold the baby in close contact with an adult ・Breastfeeding',
                ifs: ['Newborn', 'low_temprature'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'body_temperature3']
            },

            {
                id: 'Newborn_f13',
                type: "TextInput",
                msg: '[To CHW] Take body temperature one more time',
                explanation: 'Try following ways and re - inspection 30 minute later ・Reduce Clothing and swaddling ・Reduce room temprature',
                ifs: ['Newborn', 'high_temprature'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'body_temperature3']
            },

            {
                id: 'Newborn_f14',
                type: "YesNo",
                msg: 'Does your baby seem different than usual, not doing well?',
                explanation: '',
                ifs: ['Newborn', 'high_temprature_again'],
                dataname: ['Newborn', 'flow', 'different']
            },

            {
                id: 'Newborn_f15',
                type: "YesNo",
                msg: 'Is it difficult to feed your baby?',
                explanation: '',
                ifs: ['Newborn', 'high_temprature_again'],
                dataname: ['Newborn', 'flow', 'difficult_feed']
            },

            {
                id: 'Newborn_f16',
                type: "YesNo",
                msg: 'Is your baby’s umbilical cord red or draining pus?',
                explanation: '',
                ifs: ['Newborn', 'high_temprature_again'],
                dataname: ['Newborn', 'flow', 'red_cord']
            },

            {
                id: 'Newborn_f17',
                type: "YesNo",
                msg: 'Does your baby have the presence of pustules?',
                explanation: '',
                ifs: ['Newborn', 'high_temprature_again'],
                dataname: ['Newborn', 'flow', 'pustules']
            },

            {
                id: 'Newborn_f18',
                type: "YesNo",
                msg: 'Does someone in the family have an infectious disease?',
                explanation: '',
                ifs: ['Newborn', 'high_temprature_again'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'family_infectious_disease']
            },

            {
                id: 'Newborn_f23',
                type: "YesNo",
                msg: 'Is there bleeding from anywhere?',
                explanation: '',
                ifs: ['Newborn'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'bleeding']
            },

            {
                id: 'Newborn_f24',
                type: "YesNo",
                msg: 'Is the cord draining pus or bleeding or smelling bad or redness around the navel?',
                explanation: '',
                ifs: ['Newborn'],
                checkComplete: 'Yes',
                dataname: ['Newborn', 'flow', 'cord_draining_pus']
            },

            {
                id: 'Newborn_f20',
                type: "YesNo",
                msg: 'Does the child vomit profusely several times a day?',
                explanation: 'It is normal for milk to overflow from the mouth',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'vomit']
            },

            {
                id: 'Newborn_f21',
                type: "YesNo",
                msg: 'Is the baby\'s stool dark or contains blood or whitish?',
                explanation: '',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'dark_stool']
            },

            {
                id: 'Newborn_f22',
                type: "YesNo",
                msg: 'Is the baby\'s face yellow within 24 hours of birth? Is the baby\'s palms and soles of hands and feet yellow?',
                explanation: '',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'yellow_face']
            },

            {
                id: 'Newborn_f25',
                type: "YesNo",
                msg: 'Has the baby ever had a seizure?',
                explanation: '',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'seizure']
            },

            {
                id: 'Newborn_f26',
                type: "YesNo",
                msg: 'Are there many or large pustules or severe eczema in the baby\'s skin?',
                explanation: '',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'pustules_eczema']
            },

            {
                id: 'Newborn_f27',
                type: "YesNo",
                msg: 'Does your baby urinate more than 6 times a day?',
                explanation: '',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'urinate_6_times']
            },

            {
                id: 'Newborn_F2',
                type: "Message",
                msg: 'Breast milk may be low. Comsult with your CHW or someone who is familiar with breastfeeding.',
                explanation: '',
                ifs: ['Newborn', 'urinate_6_times']
            },

            {
                id: 'Newborn_f28',
                type: "YesNo",
                msg: 'Does your baby have a bowel movement once a day?',
                explanation: '',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'bowel_movement']
            },

            {
                id: 'Newborn_F3',
                type: "Message",
                msg: 'Massage the abdomen to promote stool, and if it continues for days(up to 7 days) , go to the health post.',
                explanation: '',
                ifs: ['Newborn', 'bowel_movement']
            },

            {
                id: 'Newborn_f1',
                type: "YesNo",
                msg: 'Has your baby been seen by a health worker at least once since birth?',
                explanation: '',
                ifs: ['Newborn'],
                dataname: ['Newborn', 'flow', 'seen_by_health_worker']
            },

            {
                id: 'Newborn_f2',
                type: "YesNo",
                msg: 'Has your baby weighted since last time?',
                explanation: '',
                ifs: ['Newborn'],
                setname: ['Newborn', 'weighted'],
                setvalue: ['Yes', 'No']
            },

            {
                id: 'Newborn_f3',
                type: "DateInput",
                msg: 'When was the last time your baby was weighed?',
                explanation: '',
                ifs: ['Newborn', 'weighted'],
                dataname: ['Newborn', 'flow', 'when_weighted']
            },

            {
                id: 'Newborn_f4',
                type: "TextInput",
                msg: 'What was the baby\'s last weight?',
                explanation: '',
                ifs: ['Newborn', 'weighted'],
                dataname: ['Newborn', 'flow', 'weight']
            },

            // HEALTH GUIDANCE
            {
                id: 'Newborn_f29',
                type: "Message",
                msg: 'HEALTH GUIDANCE',
                explanation: '',
                ifs: ['Newborn']
            },

            // ******* Asthma *******

            {
                id: 'Asthma_a1',
                type: "TextInput",
                msg: '[To CHW] Measure SpO2',
                explanation: 'Skip the question if you do not have measurement tool.',
                ifs: ['Asthma', 'no_SpO2'],
                dataname: ['medical_basic', 'SpO2']
            },

            {
                id: 'Asthma_a2',
                type: "YesNo",
                msg: '[To CHW] Observe the patient. Does the patient alter the level of consciousness?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'alter_consciousness']
            },

            {
                id: 'Asthma_a3',
                type: "YesNo",
                msg: '[To CHW] Observe the patient. Does the patient have cyanosis?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'cyanosis']
            },

            {
                id: 'Asthma_a4',
                type: "YesNo",
                msg: '[To CHW] Observe the patient. Does the patient need effort breathing?',
                explanation: '',
                ifs: ['Asthma'],
                checkComplete: 'Yes',
                dataname: ['Asthma', 'flow', 'effort_breathing']
            },

            {
                id: 'Asthma_a5',
                type: "YesNo",
                msg: 'Have asthma symptoms at daytime either 3 times or more per week?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'day_symptoms']
            },

            {
                id: 'Asthma_a6',
                type: "YesNo",
                msg: 'Have asthma symptoms at night about over 3 times per month?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'night_symptoms']
            },

            {
                id: 'Asthma_a7',
                type: "YesNo",
                msg: 'The asthma conditions affect the daily life?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'affect_life']
            },

            {
                id: 'Asthma_a8',
                type: "YesNo",
                msg: 'Have severe exacerbations?',
                explanation: 'e.g., requiring oral steroids(e.g., dexamethasone) OR hospitalization within 1 month',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'exacerbations']
            },

            {
                id: 'Asthma_a9',
                type: "TextInput",
                msg: '[To CHW] Measure respiratory rate',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'respiratory_rate']
            },

            {
                id: 'Asthma_a10',
                type: "TextInput",
                msg: '[To CHW] Observe the patient. Is it difficult for the patient to say a sentence in one breath?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'difficult_sentence_in_one_breath']
            },

            // ******* COPD *******

            {
                id: 'COPD_b1',
                type: "TextInput",
                msg: '[To CHW] Measure SpO2',
                explanation: 'Skip the question if you do not have measurement tool.',
                ifs: ['COPD', 'no_SpO2'],
                dataname: ['medical_basic', 'SpO2']
            },

            {
                id: 'COPD_b2',
                type: "YesNo",
                msg: 'Do you have severe exacerbations?',
                explanation: 'e.g., requiring oral steroids(e.g., dexamethasone) OR hospitalization within 1 month',
                ifs: ['COPD'],
                dataname: ['COPD', 'flow', 'exacerbations']
            },

            {
                id: 'COPD_b3',
                type: "YesNo",
                msg: 'Do you have shortness of breath in daily activities?',
                explanation: '',
                ifs: ['COPD'],
                dataname: ['COPD', 'flow', 'breath_shortness_daily']
            },

            {
                id: 'COPD_b4',
                type: "YesNo",
                msg: 'Do you have shortness of breath even at rest?',
                explanation: '',
                ifs: ['COPD'],
                dataname: ['COPD', 'flow', 'breath_shortness_rest']
            },

            // ******* Hypertension *******

            {
                id: 'HT_c1',
                type: "YesNo",
                msg: 'Do you have chest pain?',
                explanation: '',
                ifs: ['Hypertension'],
                dataname: ['Hypertension', 'flow', 'chest_pain']
            },

            {
                id: 'HT_c2',
                type: "YesNo",
                msg: 'Do you have severe headache with confusion and blurred vision?',
                explanation: '',
                ifs: ['Hypertension'],
                dataname: ['Hypertension', 'flow', 'severe_headache']
            },

            {
                id: 'HT_c3',
                type: "YesNo",
                msg: 'Do you have nausea and vomiting?',
                explanation: '',
                ifs: ['Hypertension'],
                dataname: ['Hypertension', 'flow', 'nausea']
            },

            {
                id: 'HT_c4',
                type: "YesNo",
                msg: 'Do you have intense anxiety or fear of possible death(or impending doom)?',
                explanation: '',
                ifs: ['Hypertension'],
                dataname: ['Hypertension', 'flow', 'anxiety']
            },

            {
                id: 'HT_c5',
                type: "YesNo",
                msg: 'Do you have seizures?',
                explanation: '',
                ifs: ['Hypertension'],
                dataname: ['Hypertension', 'flow', 'seizures']
            },

            {
                id: 'HT_c6',
                type: "YesNo",
                msg: 'Do you have unresponsiveness?',
                explanation: '',
                ifs: ['Hypertension'],
                dataname: ['Hypertension', 'flow', 'unresponsiveness']
            },

            {
                id: 'HT_c7',
                type: "YesNo",
                msg: 'Do you have sudden numbness or weakness of the face, arm, or leg, especially on one side of the body(symptoms of stroke)?',
                explanation: '',
                ifs: ['Hypertension'],
                checkComplete: 'Yes',
                dataname: ['Hypertension', 'flow', 'numbness']
            },

            {
                id: 'HT_c8',
                type: "YesNo",
                msg: 'Currently, do you have antihypertensive medicine?',
                explanation: '',
                ifs: ['Hypertension'],
                dataname: ['Hypertension', 'flow', 'current_medicine']
            },

            {
                id: 'HT_c8_2',
                type: "YesNo",
                msg: 'Did you have antihypertensive medicine in the past?',
                explanation: '',
                ifs: ['Hypertension'],
                dataname: ['Hypertension', 'flow', 'past_medicine']
            },

            {
                id: 'HT_c9',
                type: "MultiInput",
                msg: '[To CHW] Measure the blood pressure again and enter the value.',
                explanation: '',
                ifs: ['Hypertension', 'BPcategory2'],
                inputs: [
                    {
                        cap: 'SBP',
                        dataname: ['Hypertension', 'flow', 'SBP']
                    }, {
                        cap: 'DBP',
                        dataname: ['Hypertension', 'flow', 'DBP']
                    }],
            },

            // ******* Diabetes *******

            // blood glucose
            {
                id: 'Diabetes_d1',
                type: "TextInput",
                msg: '[To CHW] Measure random plasma glucose',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'blood_glucose']
            },

            {
                id: 'Diabetes_d2',
                type: "TextInput",
                msg: '[To CHW] Measure respiratory rate',
                explanation: '',
                ifs: ['Diabetes', 'adult'],
                dataname: ['Diabetes', 'flow', 'respiratory_rate']
            },

            {
                id: 'Diabetes_d3',
                type: "YesNo",
                msg: 'Do you have ever lost consciousness?',
                explanation: '',
                ifs: ['Diabetes'],
                checkComplete: 'Yes',
                dataname: ['Diabetes', 'flow', 'lost_consciousness']
            },

            {
                id: 'Diabetes_d4',
                type: "YesNo",
                msg: 'Do you feel increased thirst?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'increased_thirst']
            },

            {
                id: 'Diabetes_d5',
                type: "YesNo",
                msg: 'Do you drink lots of water?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'drink_water']
            },

            {
                id: 'Diabetes_d6',
                type: "YesNo",
                msg: 'Do you feel weak or unusually tired?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'weak_tired']
            },

            {
                id: 'Diabetes_d7',
                type: "YesNo",
                msg: 'Have you lost weight?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'lost_weight']
            },

            // frequent_urination
            {
                id: 'Diabetes_d8',
                type: "YesNo",
                msg: 'Do you urinate frequently?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'frequent_urination']
            },

            // ******* Lifestyle *******

            {
                id: 'Life_x1',
                type: "YesNo",
                msg: 'Is your weight and / or abdominal circumference increased recently?',
                explanation: '',
                ifs: ['NCD'],
                dataname: ['Lifestyle', 'flow', 'increase_weight_wc']
            },

            {
                id: 'Life_x2',
                type: "YesNo",
                msg: 'Do you eat a lot of rice?',
                explanation: '',
                ifs: ['NCD'],
                dataname: ['Lifestyle', 'flow', 'lots_of_rice']
            },

            {
                id: 'Life_x3',
                type: "YesNo",
                msg: 'Do you eat kaja frequently?',
                explanation: '',
                ifs: ['NCD'],
                dataname: ['Lifestyle', 'flow', 'kaja']
            },

            {
                id: 'Life_x4',
                type: "YesNo",
                msg: 'Do you prefer foods that taste strong?',
                explanation: '',
                ifs: ['NCD'],
                dataname: ['Lifestyle', 'flow', 'kaja']
            },

            {
                id: 'Life_x5',
                type: "YesNo",
                msg: 'Do you walk no more than 30 minutes per day?',
                explanation: '',
                ifs: ['NCD'],
                dataname: ['Lifestyle', 'flow', 'no_walk']
            },

            // ******* Medication *******

            {
                id: 'Medication_y1',
                type: "YesNo",
                msg: 'Do you currently have the medication with you?',
                explanation: '',
                ifs: ['NCD'],
                dataname: ['Medication', 'flow', 'have_medication']
            },

            {
                id: 'Medication_y2',
                type: "YesNo",
                msg: 'Looking back over the past week, was there a day when you did not take your current medication more than once',
                explanation: '',
                ifs: ['NCD', 'have_medication'],
                dataname: ['Medication', 'flow', 'missed_medication']
            },

            {
                id: 'Medication_y2_2',
                type: "YesNo",
                msg: 'Did you intentionally not take the medication?',
                explanation: '',
                ifs: ['NCD', 'missed_medication'],
                dataname: ['Medication', 'flow', 'no_medication_intent']
            },

            {
                id: 'Medication_y3',
                type: "YesNo",
                msg: 'Do you stop taking your medication because it makes you feel unwell?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent'],
                dataname: ['Medication', 'flow', 'cause_feeling_unwell']
            },

            {
                id: 'Medication_y4',
                type: "YesNo",
                msg: 'Have you stopped taking your medication because it makes you feel unwell, after informing the medical staff?',
                explanation: '',
                ifs: ['NCD', 'cause_feeling_unwell'],
                dataname: ['Medication', 'flow', 'tell_medical']
            },

            {
                id: 'Medication_y5',
                type: "YesNo",
                msg: 'Have you stopped taking your medication due to improved symptoms?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent'],
                dataname: ['Medication', 'flow', 'cause_improved_symptoms']
            },

            {
                id: 'Medication_y6',
                type: "YesNo",
                msg: 'Have you stopped taking your medication because it was ineffective?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell'],
                dataname: ['Medication', 'flow', 'cause_ineffective']
            },

            {
                id: 'Medication_y7',
                type: "YesNo",
                msg: 'Have you stopped taking your medication because you don\'t understand the need for medication?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell'],
                dataname: ['Medication', 'flow', 'cause_not_understand']
            },

            {
                id: 'Medication_y8',
                type: "YesNo",
                msg: 'Have you stopped taking your medication because you don\'t trust hospitals, HP, CHU?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell'],
                dataname: ['Medication', 'flow', 'cause_not_trust']
            },

            {
                id: 'Medication_y9',
                type: "YesNo",
                msg: 'Have you stopped taking your medication because you have no money for medicines(which can be given at the health post)?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell'],
                dataname: ['Medication', 'flow', 'cause_no_money_given']
            },

            {
                id: 'Medication_y10',
                type: "YesNo",
                msg: 'Have you stopped taking your medication because you have no money for medicines(cannot get them at the health post)?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell'],
                dataname: ['Medication', 'flow', 'cause_no_money_not_given']
            },

            {
                id: 'Medication_y11',
                type: "YesNo",
                msg: 'Have you stopped taking your medication because of distance to hospital / HP / CHU / phrmacies?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell'],
                dataname: ['Medication', 'flow', 'cause_distance']
            },

            {
                id: 'Medication_y12',
                type: "YesNo",
                msg: 'Have you stopped taking your medication because of high cost of transportation fee?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell'],
                dataname: ['Medication', 'flow', 'cause_transportation_fee']
            },

            {
                id: 'Medication_y13',
                type: "YesNo",
                msg: 'Are there any other reason to stop taking medication?',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell'],
                setname: ['Medication', 'cause_other'],
                setvalue: ['Yes', 'No']
            },

            {
                id: 'Medication_y13_2',
                type: "YesNo",
                msg: 'Tell me the reason',
                explanation: '',
                ifs: ['NCD', 'no_medication_intent_not_unwell', 'cause_other'],
                dataname: ['Medication', 'flow', 'cause_other']
            },

            {
                id: 'Medication_y15',
                type: "Selection",
                msg: 'Why don\'t you currently have your medication with you?',
                explanation: '',
                ifs: ['NCD', 'have_no_medication'],
                caps: [
                    'The medication has been taken completely',
                    'Symptoms improved, leading to discontinuation of the medication',
                    'Not undergoing treatment with medication'
                ],
                dataname: ['Medication', 'flow', 'dont_have_medication_cause']
            },

            {
                id: 'Medication_y16',
                type: "YesNo",
                msg: 'Didn\'t you go to medical facility after finishing the medication because you have no money for medicines(which can be given at the health post)?',
                explanation: '',
                ifs: ['NCD', 'medication_complete'],
                dataname: ['Medication', 'flow', 'not_visit_no_money_given']
            },

            {
                id: 'Medication_y17',
                type: "YesNo",
                msg: 'Didn\'t you go to medical facility after finishing the medication because you have no money for medicines(which cannot get them at the health post)?',
                explanation: '',
                ifs: ['NCD', 'medication_complete'],
                dataname: ['Medication', 'flow', 'not_visit_no_money_not_given']
            },

            {
                id: 'Medication_y18',
                type: "YesNo",
                msg: 'Didn\'t you go to medical facility after finishing the medication because of distance to hospital/HP/CHU/phrmacies?',
                explanation: '',
                ifs: ['NCD', 'medication_complete'],
                dataname: ['Medication', 'flow', 'not_visit_distance']
            },

            {
                id: 'Medication_y19',
                type: "YesNo",
                msg: 'Didn\'t you go to medical facility after finishing the medication because of high cost of transportation fee?',
                explanation: '',
                ifs: ['NCD', 'medication_complete'],
                dataname: ['Medication', 'flow', 'not_visit_transportation_fee']
            },

            {
                id: 'Medication_y20',
                type: "YesNo",
                msg: 'Are there any other reason not to go to medical facility after finishing the medication?',
                explanation: '',
                ifs: ['NCD', 'medication_complete'],
                setname: ['Medication', 'not_visit_cause_other'],
                setvalue: ['Yes', 'No']
            },

            {
                id: 'Medication_y20_2',
                type: "YesNo",
                msg: 'Tell me the reason',
                explanation: '',
                ifs: ['NCD', 'medication_complete', 'not_visit_cause_other'],
                dataname: ['Medication', 'flow', 'not_visit_cause_other']
            },

            {
                id: 'RESULT_VERYURGENT',
                type: "Result",
                msg: 'VERY URGENT: the patient must visit the medical facility imediately.',
                explanation: '',
                ifs: ['VeryUrgent'],
            },

            {
                id: 'RESULT_URGENT',
                type: "Result",
                msg: 'URGENT: the patient must visit the medical facility in 1 day.',
                explanation: '',
                ifs: ['Urgent'],
            },

            {
                id: 'RESULT_MODERATE',
                type: "Result",
                msg: 'MODERATE: the patient must visit the medical facility.',
                explanation: '',
                ifs: ['Moderate'],
            },

            {
                id: 'RESULT_MODERATE_LOW',
                type: "Result",
                msg: 'MODERATE-LOW: the patient must be careful for his/her lifestyle and medication.',
                explanation: '',
                ifs: ['Moderate-Low'],
            },

            {
                id: 'RESULT_LOW',
                type: "Result",
                msg: 'GOOD CONTROL: ',
                explanation: '',
                ifs: ['Low'],
            }, 
            // Reason
            {
                id: 'Reason',
                type: "Message",
                msg: 'The reason why the patient must go to medical facility',
                explanation: '',
                ifs: ['ANC', 'facility_not_decided']
            },

        // Follow-up
        {
            id: 'F1',
            type: "YesNo",
            msg: 'Did the patient visit the medical facility?',
            explanation: '',
            ifs: ['follow'],
            nexts: ['F2', 'F5'],
            setname: ['Follow', 'visit'],
            setvalue: ['Yes', 'No']
        }, 
        
        {
            id: 'F2',
            type: "TextInput",
            msg: 'Where did the patient visit?',
            explanation: '',
            ifs: ['follow', 'visit'],
            dataname: ['Follow', 'flow', 'where']
        }, 
        
        {
            id: 'F3',
            type: "DateInput",
            msg: 'When did the patient visit medical facility?',
            explanation: '',
            ifs: ['follow', 'visit'],
            dataname: ['Follow', 'flow', 'when']
        }, 
        
        {
            id: 'F4',
            type: "Selection",
            msg: 'What is the result?',
            explanation: '',
            ifs: ['follow', 'visit'],
            caps: [
                'Given medicine',
                'Recieved treatment',
                'Given advice',
                'None'
            ]
        }, {
            id: 'F5',
            type: "Message",
            msg: 'Tell the patient to visit the medical facility imediately.',
            explanation: '',
            ifs: ['follow', 'no_visit']
        }, {
            id: '995',
            type: "YesNo",
            msg: 'Do the patient agree to visit the medical facility?',
            explanation: '',
            ifs: ['follow', 'no_visit'],
            dataname: ['Follow', 'flow', 'agree']
        }, {
            id: '996',
            type: "Selection",
            msg: 'Consult with Project manager immidiately.',
            explanation: 'Select skip if the patient will never agree to visit medical facility',
            ifs: ['follow', 'no_visit', 'no_agree'],
            caps: [
                'OK',
                'Skip'
            ],
            dataname: ['Follow', 'flow', 'agree_final']
        }, {
            id: '997',
            type: "Message",
            msg: 'Follow up the patient in one day.',
            explanation: '',
            ifs: ['need_follow'],
        }, {
            id: 'NextVisit',
            type: "DateInput",
            msg: 'Enter the next appointment date.',
            ifs: ['need_no_follow'],
            explanation:''
        }, {
            id: 'Terminate',
            type: "Terminate",
            msg: 'Thank you!',
            explanation:''
        }
    ]
</script>

