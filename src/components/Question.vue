<script>
    export default
        [
            {
                id: 'Start',
                type: "Selection",
                msg: 'Select the flow you want to test. ',
                explanation: '',
                nexts: [{
                    id: 'B1',
                    cap: 'New patient'
                }, {
                    id: 'Set1',
                    cap: 'Normal interview'
                }, {
                    id: 'F1',
                    cap: 'Follow-up interview'
                }]
            },

            {
                id: 'Set1',
                type: "Selection",
                msg: 'Select the patient to test. ',
                explanation: '',
                nexts: [{
                        id: 'Set2',
                        cap: '5 months pregnant woman with asthma'
                    }, {
                        id: '',
                        cap: '9 months pregnant woman'
                    }, {
                        id: '',
                        cap: 'A woman just give birth'
                    }, {
                        id: '',
                        cap: 'COPD patient'
                    }, {
                        id: '',
                        cap: 'Hypertension & Diabetes patient'
                    }, {
                        id: 'Previous test',
                        cap: 'Previous test'
                    }, {
                        id: 'From file',
                        cap: 'From file'
                }]
            },

            {
                id: 'Set2',
                type: "Operation",
                operation: 'Set5ANC_Asthma',
                next: 'General1'
            },

            // ******* Basic *******
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
                next: 'B2'
            },

            {
                id: 'B2',
                type: "Selection",
                msg: 'Select your gender.',
                explanation: '',
                nexts: [{
                    id: 'B3',
                    cap: 'Male'
                }, {
                    id: 'B3',
                    cap: 'female'
                }, {
                    id: 'B3',
                    cap: 'other'
                }],
                dataname: ['basic', 'gender']
            },

            {
                id: 'B3',
                type: "TextInputOptional",
                msg: 'Tell me your phone number.',
                explanation: 'You can skip this question.',
                nexts: ['B4', 'B4'],
                dataname: ['basic', 'phone_number']
            },

            {
                id: 'B4',
                type: "DateInputOptional",
                msg: 'Tell me your birthday.',
                explanation: 'You can skip this question if you do not know.',
                nexts: ['B6', 'B5'],
                dataname: ['basic', 'birthdate']
            },

            {
                id: 'B5',
                type: "TextInputOptional",
                msg: 'Tell me your age.',
                explanation: 'You can skip this question if you do not know.',
                nexts: ['B6', 'B6'],
                dataname: ['basic', 'age']
            },

            {
                id: 'B6',
                type: "TextInput",
                msg: 'Input the ward number.',
                explanation: '',
                next: 'B7',
                dataname: ['basic', 'ward']
            },

            {
                id: 'B7',
                type: "TextInputOptional",
                msg: 'Tell me your HealthConnect ID. ',
                explanation: 'You can skip this question if you do not have.',
                nexts: ['MB1', 'MB1'],
                dataname: ['basic', 'healthconnect_id']
            },

            // ******* Medical Basic *******
            {
                id: 'MB1',
                type: "Branch",
                condition: 'IsAdult',
                nexts: ['MB3', 'MB2']
            },

            {
                id: 'MB2',
                type: "TextInputOptional",
                msg: 'Tell me your height by cm. ',
                explanation: 'You can skip this question if you do not know.',
                nexts: ['MB3', 'MB3']
            },

            {
                id: 'MB3',
                type: "Selection",
                msg: 'Select your blood type.',
                explanation: 'select unknown if you do not know.',
                nexts: [{
                    id: 'MB4',
                    cap: 'A'
                }, {
                    id: 'MB4',
                    cap: 'B'
                }, {
                    id: 'MB4',
                    cap: 'O'
                }, {
                    id: 'MB4',
                    cap: 'AB'
                }, {
                    id: 'MB4',
                    cap: 'Unknown'
                }],
                dataname: ['medical_basic', 'blood_type']
            },

            {
                id: 'MB4',
                type: "Selection",
                msg: 'Select your blood type Rh factor.',
                explanation: 'select unknown if you do not know.',
                nexts: [{
                    id: 'MB10',
                    cap: 'Rh+'
                }, {
                    id: 'MB10',
                    cap: 'Rh-'
                }, {
                    id: 'MB10',
                    cap: 'Unknown'
                }],
                dataname: ['medical_basic', 'rh_factor']
            },

            //Past Medical History
            {
                id: 'MB10',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with asthma?',
                explanation: '',
                nexts: ['MB11', 'MB11', 'MB11'],
                dataname: ['medical_basic', 'medical_history', 'asthma']
            },

            {
                id: 'MB11',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with epilepsy?',
                explanation: '',
                nexts: ['MB12', 'MB12', 'MB12'],
                dataname: ['medical_basic', 'medical_history', 'epilepsy']
            },

            {
                id: 'MB12',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with heart disease?',
                explanation: '',
                nexts: ['MB13', 'MB13', 'MB13'],
                dataname: ['medical_basic', 'medical_history', 'heart_disease']
            },

            {
                id: 'MB13',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with type1 Diabetes?',
                explanation: '',
                nexts: ['MB14', 'MB14', 'MB14'],
                dataname: ['medical_basic', 'medical_history', 'type1_diabetes']
            }, 
        
        {
            id: 'MB14',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with type2 Diabetes?',
            explanation:'',
            nexts: ['MB15', 'MB15', 'MB15'],
            dataname: ['medical_basic', 'medical_history' ,'type2_diabetes']
        }, 
        
        {
            id: 'MB15',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with systemic autoimmune disease?',
            explanation:'e.g. Systemic Lupus Erythematosus (SLE), rheumatoid arthritis',
            nexts: ['MB16', 'MB16', 'MB16'],
            dataname: ['medical_basic', 'medical_history' ,'systemic_autoimmune_disease']
        }, 
        
        {
            id: 'MB16',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with haemoglobinopathies: sickle cell anaemia, thalassaemias?',
            explanation:'',
            nexts: ['MB17', 'MB17', 'MB17'],
            dataname: ['medical_basic', 'medical_history' ,'haemoglobinopathies']
        }, 
        
        {
            id: 'MB17',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with endocrine disorder, such as thyroid function?',
            explanation:'',
            nexts: ['MB18', 'MB18', 'MB18'],
            dataname: ['medical_basic', 'medical_history','thyroid_function']
        }, 
        
        {
            id: 'MB18',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with kidney or liver diseases?',
            explanation:'',
            nexts: ['MB19', 'MB19', 'MB19'],
            dataname: ['medical_basic', 'medical_history', 'liver_diseases']
        }, 

            {
                id: 'MB19',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with cystic fibrosis?',
                explanation: '',
                nexts: ['MB20', 'MB20', 'MB20'],
                dataname: ['medical_basic', 'medical_history', 'cystic_fibrosis']
            },

            {
                id: 'MB20',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with copd?',
                explanation: '',
                nexts: ['MB21', 'MB21', 'MB21'],
                dataname: ['medical_basic', 'medical_history', 'copd']
            },

            {
                id: 'MB21',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with hypertension?',
                explanation: '',
                nexts: ['MB22', 'MB22', 'MB22'],
                dataname: ['medical_basic', 'medical_history', 'hypertension']
            },

            {
                id: 'MB22',
                type: "YesNo",
                msg: 'Have you ever been diagnosed with other severe disease?',
                explanation: '',
                nexts: ['MB23', 'MB23']
            },

            {
                id: 'MB23',
                type: "TextInput",
                msg: 'Tell me the name of the disease.',
                explanation: '',
                next: 'MB40',
                dataname: ['medical_basic', 'medical_history', 'other']
            },

            //Past Treatment History
            {
                id: 'MB40',
                type: "YesNoUnknown",
                msg: 'Have you ever been given internal medicine?',
                explanation: '',
                nexts: ['MB41', 'MB41', 'MB41'],
                dataname: ['medical_basic', 'treatment_history', 'internal_medicine']
            },

            {
                id: 'MB41',
                type: "YesNoUnknown",
                msg: 'Have you ever been given self injection?',
                explanation: '',
                nexts: ['MB42', 'MB42', 'MB42'],
                dataname: ['medical_basic', 'treatment_history', 'self_injection']
            },

            {
                id: 'MB42',
                type: "YesNoUnknown",
                msg: 'Have you ever been given surgery?',
                explanation: '',
                nexts: ['MB43', 'MB43', 'MB43'],
                dataname: ['medical_basic', 'treatment_history', 'surgery']
            },

            {
                id: 'MB43',
                type: "YesNo",
                msg: 'Have you ever been given other treatment?',
                explanation: '',
                nexts: ['MB44', 'MB50']
            },

            {
                id: 'MB44',
                type: "TextInput",
                msg: 'Tell me the name of the treatment.',
                explanation: '',
                next: 'MB50',
                dataname: ['medical_basic', 'treatment_history', 'other']
            }, 

            //Past Infectious Diseases
            {
                id: 'MB50',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with HIV?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                nexts: ['MB51', 'MB51', 'MB51'],
                dataname: ['medical_basic', 'infectious_diseases', 'HIV']
            },

            {
                id: 'MB51',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with HCV?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                nexts: ['MB52', 'MB52', 'MB52'],
                dataname: ['medical_basic', 'infectious_diseases', 'HCV']
            },

            {
                id: 'MB52',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with HBV?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                nexts: ['MB53', 'MB53', 'MB53'],
                dataname: ['medical_basic', 'infectious_diseases', 'HBV']
            },

            {
                id: 'MB53',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with TB?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                nexts: ['MB54', 'MB54', 'MB54'],
                dataname: ['medical_basic', 'infectious_diseases', 'TB']
            },

            {
                id: 'MB54',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with Syphilis?',
                explanation: 'You can answer by no or unknown if you do not want to answer.',
                nexts: ['MB60', 'MB60', 'MB60'],
                dataname: ['medical_basic', 'infectious_diseases', 'Syphilis']
            }, 

            // allergy
            {
                id: 'MB60',
                type: "YesNoUnknown",
                msg: 'Are you allergic to any food?',
                explanation: 'such as milk, eggs or nuts',
                nexts: ['MB61', 'MB62', 'MB62']
            },

            {
                id: 'MB61',
                type: "TextInput",
                msg: 'Tell me the food you are allergic.',
                explanation: '',
                next: 'MB62',
                dataname: ['medical_basic', 'allergy_food']
            },

            {
                id: 'MB62',
                type: "YesNoUnknown",
                msg: 'Are you allergic to any medicine?',
                explanation: '',
                nexts: ['MB63', 'MB64', 'MB64']
            },

            {
                id: 'MB63',
                type: "TextInput",
                msg: 'Tell me the medicine you are allergic.',
                explanation: '',
                next: 'MB64',
                dataname: ['medical_basic', 'allergy_medicine']
            }, 

        // lifestyle
        {
            id: 'MB64',
            type: "YesNo",
            msg: 'Do you drink alcohol?',
            explanation:'',
            nexts: ['MB65', 'MB66'],
            dataname: ['medical_basic', 'alcohol']
        }, 
        
        {
            id: 'MB65',
            type: "Selection",
            msg: 'Tell me the amount of alcohol you drink a day.',
            explanation: '',
            nexts: [{
                id: 'MB66',
                cap: 'Less than a cup'
            }, {
                id: 'MB66',
                cap: '2 - 3 cups'
            }, {
                id: 'MB66',
                cap: 'More than 4 cups'
                }],
            dataname: ['medical_basic', 'alcohol']
        }, 
        
        {
            id: 'MB66',
            type: "YesNo",
            msg: 'Do you smoke tabacco?',
            explanation:'',
            nexts: ['MB67', 'MB69']
        }, 
        
        {
            id: 'MB67',
            type: "TextInput",
            msg: 'How many cigarettes do you smoke per day?',
            explanation:'',
            next: 'MB68',
            dataname: ['medical_basic', 'tabacco_count']
        },
        
        {
            id: 'MB68',
            type: "TextInput",
            msg: 'How many years have you smoked?',
            explanation:'Approximate number of years is acceptable.',
            next: 'MB69',
            dataname: ['medical_basic', 'tabacco_year']
        }, 

        {
            id: 'MB69',
            type: "YesNo",
            msg: 'Do you have chewing tobacco?',
            explanation:'',
            nexts: ['MB70', 'MB70'],
            dataname: ['medical_basic', 'chewing_tabacco']
        },

        {
            id: 'MB70',
            type: "YesNo",
            msg: 'Is the living environment prone to expose dust or smoke?',
            explanation:'',
            nexts: ['MB71', 'MB71'],
            dataname: ['medical_basic', 'dust_in_living']
            },

        {
            id: 'MB71',
            type: "YesNo",
            msg: 'Are you exposed to dust or smoke while you work?',
            explanation:'',
            nexts: ['MB80', 'MB80'],
            dataname: ['medical_basic', 'dust_in_working']
            },

        {
            id: 'MB80',
            type: "Branch",
            condition: 2,
            nexts: ['MB81', 'MB100']
        },

        {
        id: 'MB81',
        type: "YesNo",
        msg: 'Has your menstruation begun?',
        explanation:'',
        nexts: ['MB82', 'MB102']
        },

            {
                id: 'MB82',
                type: "TextInput",
                msg: 'Tell me your gravidity.',
                explanation:'',
                next: 'MB83'
            },

            {
                id: 'MB83',
                type: "TextInput",
                msg: 'Tell me your parity.',
                explanation:'',
                next: 'MB100'
            },

            {
                id: 'MB100',
                type: "Selection",
                msg: '[To CHW] Select the patient state.',
                explanation: '',
                nexts: [{
                    id: 'MB101',
                    cap: 'She is pregnant'
                }, {
                    id: 'MB102',
                    cap: 'She is a mother of newborn baby'
                }, {
                    id: 'MB103',
                    cap: 'She miscarried or aborted her baby.'
                }, {
                    id: 'NCD0',
                        cap: 'He/She is noncommunicable disease patient.'
                }]
            }, 

            {
                id: 'MB101',
                type: "Operation",
                operation: 'SetANC',
                next: 'ANCBasic1'
            },

            {
                id: 'MB102',
                type: "Operation",
                operation: 'SetPNC',
                next: 'PNC1'
            },

            {
                id: 'MB103',
                type: "Operation",
                operation: 'Miscarriage',
                next: 'Miscarry1'
            },

            // ******* ANC Basic *******
            {
                id: 'ANCBasic0',
                type: "YesNo",
                msg: 'Do you need to modify the information?',
                explanation: '',
                nexts: ['ANCBasic1', 'ANC1']
            }, 

            {
                id: 'ANCBasic1',
                type: "YesNo",
                msg: 'Have you decided where to give birth?',
                explanation:'',
                nexts: ['ANCBasic3', 'ANCBasic2']
            }, 
        
        {
            id: 'ANCBasic2',
            type: "Message",
            msg: 'Tell her to decide the birth facility.',
            explanation:'',
            next: 'ANCBasic3'
        }, 
        
        {
            id: 'ANCBasic3',
            type: "Selection",
            msg: 'Where are you planning to give birth?',
            explanation:'',
            nexts: [
                {
                    id: 'ANCBasic5',
                    cap: 'Home'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Health Post'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Government Elsewhere'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Community Health Unit / Basic Health Unit'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Birth Center'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Antenatal Care Center'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Ayurveda Clinic'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Private center within the municipality'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Private center outside the municipality'
                }, {
                    id: 'ANCBasic4',
                    cap: 'India'
                }, {
                    id: 'ANCBasic4',
                    cap: 'Other'
                }
            ],
            dataname: ['ANC', 'BirthFacilityType']
        }, 
        
        {
            id: 'ANCBasic4',
            type: "TextInput",
            msg: 'Tell me the name of birth facility.',
            explanation:'',
            dataname: ['ANC', 'BirthFacilityName'],
            next: 'ANCBasic11'
        }, 
        
        {
            id: 'ANCBasic11',
            type: "DateInput",
            msg: 'Tell me your first day of the last menstrual period.',
            explanation:'',
            dataname: ['ANC', 'LMP'],
            next: 'ANCBasic12'
        },
        
        {
            id: 'ANCBasic12',
            type: "YesNo",
            msg: 'Have you ever been told when your estimated delivery date is?',
            explanation:'',
            nexts: ['ANCBasic13', 'ANC10']
        }, 
        
        {
            id: 'ANCBasic13',
            type: "DateInput",
            msg: 'Tell me your estimated delivery date.',
            explanation:'',
            dataname: ['ANC', 'EDD'],
            next: 'ANCBasic14'
        },
        
        {
            id: 'ANCBasic14',
            type: "TextInput",
            msg: 'Tell me your weight before pregnancy.',
            explanation:'',
            dataname: ['ANC', 'weight_before_pregnancy'],
            next: 'ANCBasic15'
        }, 
        
        {
            id: 'ANCBasic15',
            type: "TextInput",
            msg: 'Tell me your waist before pregnancy.',
            explanation:'',
            dataname: ['ANC', 'waist_before_pregnancy'],
            next: 'ANC1'
        },

            // ******* General *******
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
                next: 'General2'
            },

            {
                id: 'General2',
                type: "Branch",
                condition: 'IsANC',
                nexts: ['ANC0', 'General3']
            },

            {
                id: 'General3',
                type: "Branch",
                condition: 'IsPNC',
                nexts: ['PNC1', 'General4']
            },

            {
                id: 'General4',
                type: "Branch",
                condition: 'IsNCD',
                nexts: ['NCD0', 'General5']
            },

            // ******* ANC *******
            {
                id: 'ANC0',
                type: "TextInput",
                msg: 'Take body tempurature',
                explanation: '',
                next: 'ANC1',
                dataname: ['ANC', 'flow', 'temprature']
            },

            {
                id: 'ANC1',
                type: "Branch",
                condition: 'VeryHighBP',
                nexts: ['RESULT_VERYURGENT', 'ANC2']
            },

            {
                id: 'ANC2',
                type: "YesNo",
                msg: 'Are there signs of delivery (contractions, water breaking)?',
                explanation: '',
                nexts: ['RESULT_VERYURGENT', 'ANC3'],
                dataname: ['ANC', 'flow', 'signs_delivery']
            }, 

            {
                id: 'ANC3',
                type: "Branch",
                condition: 'Over36weeks',
                nexts: ['ANC_B1', 'ANC_A1']
            },

            // before 36 weeks
            {
                id: 'ANC_A1',
                type: "Branch",
                condition: 'Over20weeks',
                nexts: ['ANC_A4', 'ANC_A2']
            },
        
            {
                id: 'ANC_A2',
                type: "YesNo",
                msg: 'Do you have severe morning sickness in the form of nausea that you can not eat or vomiting?',
                explanation:'',
                nexts: ['RESULT_VERYURGENT', 'ANC_A3'],
                dataname: ['ANC', 'flow', 'nausea']
            }, 
        
            {
                id: 'ANC_A3',
                type: "YesNo",
                msg: 'Do you have lower abdominal pain and vaginal bleeding clots?',
                explanation:'',
                nexts: ['RESULT_VERYURGENT', 'ANC_A6'],
                dataname: ['ANC', 'flow', 'lower_abdominal_pain_vaginal_bleeding_clots']
            },

            {
                id: 'ANC_A4',
                type: "YesNo",
                msg: 'Do you have lower abdominal pain with uterine contractions?',
                explanation: '',
                nexts: ['RESULT_VERYURGENT', 'ANC_A5'],
                dataname: ['ANC', 'flow', 'lower_abdominal_pain_with_uterine_contractions']
            },

            {
                id: 'ANC_A5',
                type: "YesNo",
                msg: 'Is there vaginal bleeding or a feeling of water breaking?',
                explanation: '',
                nexts: ['RESULT_VERYURGENT', 'ANC_A6'],
                dataname: ['ANC', 'flow', 'vaginal_bleeding_feeling_water_breaking']
            }, 
        
            {
                id: 'ANC_A6',
                type: "YesNo",
                msg: 'Do you feel pain or burning while urinating?',
                explanation:'',
                nexts: ['RESULT_URGENT', 'ANC_A7'],
                dataname: ['ANC', 'flow', 'pain_burning_while_urinating']
            }, 
        
            {
                id: 'ANC_A7',
                type: "YesNo",
                msg: 'Do you feel the need of urinating despite having an empty bladder?',
                explanation:'',
                nexts: ['RESULT_URGENT', 'ANC_A8'],
                dataname: ['ANC', 'flow', 'need_urinating ']
            }, 
        
            {
                id: 'ANC_A8',
                type: "YesNo",
                msg: 'Do you have bloody urine?',
                explanation:'',
                nexts: ['RESULT_URGENT', 'ANC_A9'],
                dataname: ['ANC', 'flow', 'bloody_urine']
            }, 
        
            {
                id: 'ANC_A9',
                type: "YesNo",
                msg: 'Do you have pressure or cramping in the groin or lower abdomen?',
                explanation:'',
                nexts: ['RESULT_URGENT', 'ANC_A10'],
                dataname: ['ANC', 'flow', 'pressure_cramping_groin']
            }, 
        
            {
                id: 'ANC_A10',
                type: "YesNo",
                msg: 'Do you have pain in your arms, legs, back, chest or stomach (severe, dull, sharp or throbbing pain)?',
                explanation:'',
                nexts: ['RESULT_URGENT', 'ANC_A11'],
                dataname: ['ANC', 'flow', 'pain_arms_legs_back_chest']
            }, 
        
            {
                id: 'ANC_A11',
                type: "YesNo",
                msg: 'Do you have difficulty breathing?',
                explanation:'',
                nexts: ['RESULT_URGENT', 'ANC10'],
                dataname: ['ANC', 'flow', 'difficulty_breathing']
            },

            // after 36 weeks
            {
                id: 'ANC_B1',
                type: "YesNo",
                msg: 'Were you told that you are high risk pregnancy?',
                explanation: 'ex) previous C - section, abnormal location of placenta, not head position, preeclampsia..etc',
                nexts: ['ANC_B2', 'ANC_B2'],
                dataname: ['ANC', 'flow', 'high_risk_pregnancy']
            },

            {
                id: 'ANC_B2',
                type: "YesNo",
                msg: 'Was your labor pain onset?',
                explanation: '',
                nexts: ['RESULT_VERYURGENT', 'ANC_B3'],
                dataname: ['ANC', 'flow', 'labor_pain']
            },

            {
                id: 'ANC_B3',
                type: "YesNo",
                msg: 'Have your water broken?',
                explanation: '',
                nexts: ['ANC_B4', 'ANC_B11'],
                dataname: ['ANC', 'flow', 'water_broken']
            },

            {
                id: 'ANC_B4',
                type: "YesNo",
                msg: 'Is the water not clear?',
                explanation: 'bloody, yellow, or green',
                nexts: ['ANC_B5', 'ANC_B5'],
                dataname: ['ANC', 'flow', 'water_not_clear']
            },

            {
                id: 'ANC_B5',
                type: "YesNo",
                msg: 'Does your water smells bad?',
                explanation: '',
                nexts: ['ANC_B6', 'ANC_B6'],
                dataname: ['ANC', 'flow', 'water_smells_bad']
            },

            {
                id: 'ANC_B6',
                type: "YesNo",
                msg: 'Does your water gush?',
                explanation: '',
                nexts: ['ANC_B7', 'ANC_B7'],
                dataname: ['ANC', 'flow', 'water_gush']
            },

            {
                id: 'ANC_B7',
                type: "YesNo",
                msg: 'Is your baby not moving?',
                explanation: '',
                nexts: ['ANC_B8', 'ANC_B8'],
                dataname: ['ANC', 'flow', 'baby_not_moving']
            },

            {
                id: 'ANC_B8',
                type: "Branch",
                condition: 'CheckUrgency',
                nexts: ['RESULT_VERYURGENT', 'ANC_B9']
            },

            {
                id: 'ANC_B9',
                type: "YesNo",
                msg: 'Did the water breaking occurred 18 hours ago or earlier?',
                explanation: '',
                nexts: ['ANC_B10', 'ANC_B10'],
                dataname: ['ANC', 'flow', 'water_breaking_early18hour']
            },

            {
                id: 'ANC_B10',
                type: "Branch",
                condition: 'CheckUrgency',
                nexts: ['RESULT_VERYURGENT', 'ANC_B11']
            },

            {
                id: 'ANC_B11',
                type: "YesNo",
                msg: ' Do you have persistent abdominal pain with uterine contraction?',
                explanation: '',
                nexts: ['ANC_B12', 'ANC_B12'],
                dataname: ['ANC', 'flow', 'persistent_abdominal_pain']
            },

            {
                id: 'ANC_B12',
                type: "Branch",
                condition: 'CheckUrgency',
                nexts: ['RESULT_VERYURGENT', 'ANC_B13']
            },

            {
                id: 'ANC_B13',
                type: "YesNo",
                msg: 'Do you have significant vaginal bleeding?',
                explanation: 'flowing, more than menstrual blood',
                nexts: ['ANC_B14', 'ANC_B14'],
                dataname: ['ANC', 'flow', 'significant_vaginal_bleeding']
            },

            {
                id: 'ANC_B14',
                type: "Branch",
                condition: 'CheckUrgency',
                nexts: ['RESULT_VERYURGENT', 'ANC_B15']
            },

            {
                id: 'ANC_B15',
                type: "YesNo",
                msg: 'Does your baby usually move well?',
                explanation: 'Is your baby moving as much as usual?',
                nexts: ['ANC_B16', 'ANC_B16'],
                dataname: ['ANC', 'flow', 'baby_move_well']
            },

            {
                id: 'ANC_B16',
                type: "Branch",
                condition: 'CheckUrgency',
                nexts: ['RESULT_VERYURGENT', 'ANC_B17']
            },
     
     
//            Do you feel severe fatigue ?
//                Do you have severe edema ?

            {
                id: 'ANC10',
                type: "Branch",
                condition: 'HighBP',
                nexts: ['ANC11', 'ANC_A2']
            },

            {
                id: 'ANC11',
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
                next: 'ANCTEST1'
            },

            //Have you received Tetanus and Diphtheria vaccination, Iron and folic acid supplement at ANC ?
        {
            id: 'ANCTEST1',
            type: "YesNo",
            msg: 'Has the blood test and urine test been completed?',
            explanation:'',
            nexts: ['ANCTEST2', 'ANC11']
            },

            {
                id: 'ANCTEST2',
                type: "YesNoUnknown",
                msg: 'Tell me the result of HIV test.',
                explanation:'You can answer by no or unknown if you do not want to answer.',
                nexts: ['ANCTEST3', 'ANCTEST3']
            },

            {
                id: 'ANC101',
                type: "YesNo",
                msg: 'Was your labor pain onset?',
                explanation:'',
                nexts: ['ANC2', 'ANC11']
            },

            // ******* NCD *******
            {
                id: 'NCD0',
                type: "Branch",
                condition: 'NoDisease',
                nexts: ['NCD1', 'NCD10']
            },

            {
                id: 'NCD1',
                type: "YesNo",
                msg: 'No target diseases are recorded. Do you want to add?',
                explanation: '',
                nexts: ['NCD2', '999']
            },

            {
                id: 'NCD2',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with asthma?',
                explanation: '',
                nexts: ['NCD3', 'NCD3', 'MB3'],
                dataname: ['medical_basic', 'medical_history', 'asthma']
            },

            {
                id: 'NCD3',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with type2 Diabetes?',
                explanation: '',
                nexts: ['NCD4', 'NCD4', 'NCD4'],
                dataname: ['medical_basic', 'medical_history', 'type2_diabetes']
            },

            {
                id: 'NCD4',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with copd?',
                explanation: '',
                nexts: ['NCD5', 'NCD5', 'NCD5'],
                dataname: ['medical_basic', 'medical_history', 'copd']
            },

            {
                id: 'NCD5',
                type: "YesNoUnknown",
                msg: 'Have you ever been diagnosed with hypertension?',
                explanation: '',
                nexts: ['NCD10', 'NCD10', 'NCD10'],
                dataname: ['medical_basic', 'medical_history', 'hypertension']
            },

            {
                id: 'NCD10',
                type: "Branch",
                condition: 'OneDisease',
                nexts: ['NCD12', 'NCD11']
            },

            {
                id: 'NCD11',
                type: "Selection",
                msg: 'Select the disease you want to start interview.',
                explanation: '',
                nexts: [{
                        id: 'Asthma1',
                        cap: 'Asthma'
                    }, {
                        id: 'COPD1',
                        cap: 'COPD'
                    }, {
                        id: 'Diabetes1',
                        cap: 'Diabetes'
                    }, {
                        id: 'Hypertension1',
                        cap: 'Hypertension'
                    }]
            },

            {
                id: 'NCD12',
                type: "Branch",
                condition: 'IsAthema',
                nexts: ['Asthma1', 'NCD13']
            },

            {
                id: 'NCD13',
                type: "Branch",
                condition: 'IsCOPD',
                nexts: ['COPD1', 'NCD14']
            },

            {
                id: 'NCD14',
                type: "Branch",
                condition: 'IsDiabetes',
                nexts: ['Diabetes1', 'NCD15']
            },

            {
                id: 'NCD15',
                type: "Branch",
                condition: 'IsHypertension',
                nexts: ['Hypertension1', '999']
            },

            // ******* Asthma *******

            // ******* COPD *******

            // ******* Diabetes *******

            // ******* Hypertension *******

            // Result
        {
            id: 'RESULT_VERYURGENT',
            type: "Message",
            msg: 'VERY URGENT: the patient must visit the medical facility imediately.',
            explanation:'',
            next: '995'
        }, 

        {
            id: 'RESULT_URGENT',
            type: "Message",
            msg: 'URGENT: the patient must visit the medical facility in 1 day.',
            explanation:'',
            next: '995'
        }, 
        
        {
            id: 'RESULT_MODERATE',
            type: "Message",
            msg: 'MODERATE: the patient must visit the medical facility.',
            explanation:'',
            next: '995'
        }, 

        // Follow-up
        {
            id: 'F1',
            type: "YesNo",
            msg: 'Did the patient visit the medical facility?',
            explanation:'',
            nexts: ['F2', 'F5']
        }, 
        
        {
            id: 'F2',
            type: "TextInput",
            msg: 'Where did the patient visit?',
            explanation:'',
            next: 'F3'
        }, 
        
        {
            id: 'F3',
            type: "DateInput",
            msg: 'When did the patient visit medical facility?',
            explanation:'',
            next: 'F4'
        }, 
        
        {
            id: 'F4',
            type: "Selection",
            msg: 'What is the result?',
            explanation:'',
            nexts: [
                {
                    id: '998',
                    cap: 'Given medicine'
                }, {
                    id: '998',
                    cap: 'Recieved treatment'
                }, {
                    id: '998',
                    cap: 'Given advice'
                }, {
                    id: '998',
                    cap: 'None'
                }
            ]
        }, {
            id: 'F5',
            type: "Message",
            msg: 'Tell the patient to visit the medical facility imediately.',
            explanation:'',
            next: '995'
        }, {
            id: '995',
            type: "YesNo",
            msg: 'Do the patient agree to visit the medical facility?',
            explanation:'',
            nexts: ['997', '996']
        }, {
            id: '996',
            type: "Selection",
            msg: 'Consult with Project manager immidiately.',
            explanation:'Select skip if the patient will never agree to visit medical facility',
            nexts: [
                {
                    id: '997',
                    cap: 'OK'
                }, {
                    id: '998',
                    cap: 'Skip'
                }
            ]
        }, {
            id: '997',
            type: "Message",
            msg: 'Follow up the patient in one day.',
            explanation:'',
            next: '999'
        }, {
            id: '998',
            type: "DateInput",
            msg: 'Enter the next appointment date.',
            explanation:'',
            next: '999'
        }, {
            id: '999',
            type: "Terminate",
            msg: 'Thank you!',
            explanation:''
        }
    ]
</script>

