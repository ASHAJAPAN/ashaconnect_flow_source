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
                id: 500,
                cap: 'Normal interview'
            }, {
                id: 'F1',
                cap: 'Follow-up interview'
            }]
        }, {
            id: 'B1',
            type: "MultiInput",
            msg: 'Tell me your name',
            explanation: '',
            inputs: [
                {
                    cap: 'First name'
                }, {
                    cap: 'Middle name'
                }, {
                    cap: 'Family name'
                }
            ],
            next: 'B2'
        }, {
            id: 'B2',
            type: "TextInputOptional",
            msg: 'Tell me your phone number.',
            explanation: 'You can skip this question.',
            nexts: ['B3', 'B3']
        }, {
            id: 'B3',
            type: "DateInputOptional",
            msg: 'Tell me your birthday.',
            explanation: 'You can skip this question if you do not know.',
            nexts: [5, 4]
        }, {
            id: 4,
            type: "TextInputOptional",
            msg: 'Tell me your age.',
            explanation: 'You can skip this question if you do not know.',
            nexts: [5, 5]
        }, {
            id: 5,
            type: "TextInput",
            msg: 'Input the ward number.',
            explanation:'',
            next: 6
        }, {
            id: 6,
            type: "TextInputOptional",
            msg: 'Tell me your HealthConnect ID. ',
            explanation:'You can skip this question if you do not have.',
            nexts: [20, 20]
        }, {
            id: 20,
            type: "TextInputOptional",
            msg: 'Tell me your height by cm. ',
            explanation:'You can skip this question if you do not know.',
            nexts: [21, 22]
        },{
            id: 21,
            type: "Selection",
            msg: 'Select your blood type.',
            explanation: 'select unknown if you do not know.',
            nexts: [{
                id: 22,
                cap: 'A'
            }, {
                id: 22,
                cap: 'B'
            }, {
                id: 22,
                cap: 'O'
            }, {
                id: 22,
                cap: 'AB'
            }, {
                id: 22,
                cap: 'Unknown'
            }]
        },{
            id: 22,
            type: "Selection",
            msg: 'Select your blood type Rh factor.',
            explanation: 'select unknown if you do not know.',
            nexts: [{
                id: 23,
                cap: 'Rh+'
            }, {
                id: 23,
                cap: 'Rh-'
            }, {
                id: 23,
                cap: 'Unknown'
            }]
        }, {
            id: 23,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with asthma?',
            explanation:'',
            nexts: [24, 24, 24]
        }, {
            id: 24,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with epilepsy?',
            explanation:'',
            nexts: [25, 25, 25]
        }, {
            id: 25,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with heart disease?',
            explanation:'',
            nexts: [26, 26, 26]
        }, {
            id: 26,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with type1 Diabetes?',
            explanation:'',
            nexts: [27, 27, 27]
        }, {
            id: 27,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with type2 Diabetes?',
            explanation:'',
            nexts: [28, 28, 28]
        }, {
            id: 28,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with systemic autoimmune disease?',
            explanation:'e.g. Systemic Lupus Erythematosus (SLE), rheumatoid arthritis',
            nexts: [29, 29, 29]
        }, {
            id: 29,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with haemoglobinopathies: sickle cell anaemia, thalassaemias?',
            explanation:'',
            nexts: [30, 30, 30]
        }, {
            id: 30,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with endocrine disorder, such as thyroid function?',
            explanation:'',
            nexts: [31, 31, 31]
        }, {
            id: 31,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with kidney or liver diseases?',
            explanation:'',
            nexts: [32, 32, 32]
        }, {
            id: 32,
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with Cystic fibrosis?',
            explanation:'',
            nexts: [33, 33, 33]
        }, {
            id: 33,
            type: "YesNo",
            msg: 'Have you ever been diagnosed with other severe disease?',
            explanation:'',
            nexts: ['MB34', 'MB40']
        }, {
            id: 'MB34',
            type: "TextInput",
            msg: 'Tell me the name of the disease.',
            explanation:'',
            next: 'MB40'
        }, {
            id: 'MB40',
            type: "YesNoUnknown",
            msg: 'Have you ever been given internal medicine?',
            explanation:'',
            nexts: ['MB41', 'MB41', 'MB41']
        }, {
            id: 'MB41',
            type: "YesNoUnknown",
            msg: 'Have you ever been given self injection?',
            explanation:'',
            nexts: ['MB42', 'MB42', 'MB42']
        }, {
            id: 'MB42',
            type: "YesNoUnknown",
            msg: 'Have you ever been given surgery?',
            explanation:'',
            nexts: ['MB43', 'MB43', 'MB43']
        }, {
            id: 'MB43',
            type: "YesNo",
            msg: 'Have you ever been given other treatment?',
            explanation:'',
            nexts: ['MB44', 'MB50']
        }, {
            id: 'MB44',
            type: "TextInput",
            msg: 'Tell me the name of the treatment.',
            explanation:'',
            next: 'MB50'
        }, {
            id: 'MB50',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with HIV?',
            explanation:'You can answer by no or unknown if you do not want to answer.',
            nexts: ['MB51', 'MB51', 'MB51']
        }, {
            id: 'MB51',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with HCV?',
            explanation:'You can answer by no or unknown if you do not want to answer.',
            nexts: ['MB52', 'MB52', 'MB52']
        }, {
            id: 'MB52',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with HBV?',
            explanation:'You can answer by no or unknown if you do not want to answer.',
            nexts: ['MB53', 'MB53', 'MB53']
        }, {
            id: 'MB53',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with TB?',
            explanation:'You can answer by no or unknown if you do not want to answer.',
            nexts: ['MB54', 'MB54', 'MB54']
        }, {
            id: 'MB54',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with TB?',
            explanation:'You can answer by no or unknown if you do not want to answer.',
            nexts: ['MB55', 'MB55', 'MB55']
        }, {
            id: 'MB55',
            type: "YesNoUnknown",
            msg: 'Have you ever been diagnosed with Syphilis?',
            explanation:'You can answer by no or unknown if you do not want to answer.',
            nexts: ['MB60', 'MB60', 'MB60']
        }, {
            id: 'MB60',
            type: "YesNoUnknown",
            msg: 'Are you allergic to any food?',
            explanation:'such as milk, eggs or nuts',
            nexts: ['MB61', 'MB62', 'MB62']
        }, {
            id: 'MB61',
            type: "TextInput",
            msg: 'Tell me the food you are allergic.',
            explanation:'',
            next: 'MB62'
        }, {
            id: 'MB62',
            type: "YesNoUnknown",
            msg: 'Are you allergic to any medicine?',
            explanation:'',
            nexts: ['MB63', 'MB64', 'MB64']
        }, {
            id: 'MB63',
            type: "TextInput",
            msg: 'Tell me the medicine you are allergic.',
            explanation:'',
            next: 'MB64'
        }, {
            id: 'MB64',
            type: "YesNo",
            msg: 'Do you drink alcohol?',
            explanation:'',
            nexts: ['MB65', 'MB66']
        }, {
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
            }]
        }, {
            id: 'MB66',
            type: "YesNo",
            msg: 'Do you smoke tabacco?',
            explanation:'',
            nexts: ['MB67', 'MB69']
        }, {
            id: 'MB67',
            type: "TextInput",
            msg: 'How many cigarettes do you smoke per day?',
            explanation:'',
            next: 'MB68'
        }, {
            id: 'MB68',
            type: "TextInput",
            msg: 'How many years have you smoked?',
            explanation:'Approximate number of years is acceptable.',
            next: 'MB69'
        }, {
            id: 'MB69',
            type: "YesNo",
            msg: 'Do you have chewing tobacco?',
            explanation:'',
            nexts: ['MB70', 'MB70']
        }, {
            id: 'MB70',
            type: "YesNo",
            msg: 'Is the living environment prone to expose dust or smoke?',
            explanation:'',
            nexts: ['MB71', 'MB71']
        }, {
            id: 'MB71',
            type: "YesNo",
            msg: 'Are you exposed to dust or smoke while you work?',
            explanation:'',
            nexts: ['MB80', 'MB80']
        }, {
            id: 'MB80',
            type: "Selection",
            msg: '[To CHW] is the patient pregnant or mother of newborn baby?',
            explanation: '',
            nexts: [{
                id: 'ANC1',
                cap: 'Pregnant'
            }, {
                id: 'PNC1',
                cap: 'Mother of newborn baby'
            }, {
                id: 'NCD1',
                cap: 'No'
            }]
        }, {
            id: 'F1',
            type: "YesNo",
            msg: 'Did the patient visit the medical facility?',
            explanation:'',
            nexts: ['F2', 'F5']
        }, {
            id: 'F2',
            type: "TextInput",
            msg: 'Where did the patient visit?',
            explanation:'',
            next: 'F3'
        }, {
            id: 'F3',
            type: "DateInput",
            msg: 'When did the patient visit medical facility?',
            explanation:'',
            next: 'F4'
        }, {
            id: 'F4',
            type: "Selection",
            msg: 'What is the result?',
            explanation:'',
            nexts: [
                {
                    id: 990,
                    cap: 'Given medicine'
                }, {
                    id: 990,
                    cap: 'Recieved treatment'
                }, {
                    id: 900,
                    cap: 'Given advice'
                }, {
                    id: 990,
                    cap: 'None'
                }
            ]
        }, {
            id: 'F5',
            type: "Message",
            msg: 'Tell the patient to visit the medical facility imediately.',
            explanation:'',
            next: 905
        }, {
            id: 905,
            type: "YesNo",
            msg: 'Do the patient agree to visit the medical facility?',
            explanation:'',
            nexts: [906, 907]
        }, {
            id: 906,
            type: "Message",
            msg: 'Follow up the patient in one day.',
            explanation:'',
            next: 991
        }, {
            id: 907,
            type: "Message",
            msg: 'Consult with Project manager immidiately.',
            explanation:'',
            next: 991
        }, {
            id: 990,
            type: "DateInput",
            msg: 'Enter the next appointment date.',
            explanation:'',
            next: 991
        }, {
            id: 991,
            type: "Terminate",
            msg: 'Thank you!',
            explanation:''
        }
    ]
</script>

