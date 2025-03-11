const questions = 
[
    {
        id: 'NCD_a1',
        type: "Selection",
        msg: 'What is your current physical condition?',
        caps: [
            'I have a cold.',
            'Other options(Not decided yet)'
        ],
        checkComplete: 'Yes',
        ifs: ['NCD']
    },

    {
        id: 'NCD_a2',
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
        ifs: ['NCD']
    },

    // ******* Asthma *******

    {
        id: 'Asthma_b1',
        type: "YesNo",
        msg: '[To CHW] Observe the patient. Does the patient alter the level of consciousness?',
        explanation: '',
        ifs: ['Asthma'],
        dataname: ['Asthma', 'flow', 'alter_consciousness']
    },

    {
        id: 'Asthma_b2',
        type: "YesNo",
        msg: '[To CHW] Observe the patient. Does the patient have cyanosis?',
        explanation: '',
        ifs: ['Asthma'],
        dataname: ['Asthma', 'flow', 'cyanosis']
    },

    {
        id: 'Asthma_b3',
        type: "YesNo",
        msg: '[To CHW] Observe the patient. Does the patient need effort breathing?',
        explanation: '',
        ifs: ['Asthma'],
        checkComplete: 'Yes',
        dataname: ['Asthma', 'flow', 'effort_breathing']
    },

    {
        id: 'Asthma_b4',
        type: "YesNo",
        msg: 'Have asthma symptoms at daytime either 3 times or more per week?',
        explanation: '',
        ifs: ['Asthma'],
        dataname: ['Asthma', 'flow', 'day_symptoms']
    },

    {
        id: 'Asthma_b5',
        type: "YesNo",
        msg: 'Have asthma symptoms at night about over 3 times per month?',
        explanation: '',
        ifs: ['Asthma'],
        dataname: ['Asthma', 'flow', 'night_symptoms']
    },

            {
                id: 'Asthma_b6',
                type: "YesNo",
                msg: 'The asthma conditions affect the daily life?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'affect_life']
            },

        {
            id: 'Asthma_b7',
            type: "YesNo",
            msg: 'Have severe exacerbations?',
            explanation: 'e.g., requiring oral steroids(e.g., dexamethasone) OR hospitalization within 1 month',
            ifs: ['Asthma'],
            dataname: ['Asthma', 'flow', 'exacerbations']
        },

            {
                id: 'Asthma_b8',
                type: "TextInput",
                msg: '[To CHW] Measure respiratory rate',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'respiratory_rate']
            },

            {
                id: 'Asthma_a9',
                type: "TextInput",
                msg: '[To CHW] Observe the patient. Is it difficult for the patient to say a sentence in one breath?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'difficult_sentence_in_one_breath']
            },

            {
                id: 'Asthma_a10',
                type: "YesNo",
                msg: 'Do you have shortness of breath even at rest?',
                explanation: '',
                ifs: ['Asthma'],
                dataname: ['Asthma', 'flow', 'breath_shortness_rest']
            },

            // ******* Hypertension *******

            {
                id: 'HT_c1',
                type: "YesNo",
                msg: 'Do you have chest pain?',
                explanation: '',
                ifs: ['Hypertension', 'HT_BP_3'],
                dataname: ['Hypertension', 'flow', 'chest_pain']
            },

            {
                id: 'HT_c2',
                type: "YesNo",
                msg: 'Do you have severe headache with confusion and blurred vision?',
                explanation: '',
                ifs: ['Hypertension', 'HT_BP_3'],
                dataname: ['Hypertension', 'flow', 'severe_headache']
            },

            {
                id: 'HT_c3',
                type: "YesNo",
                msg: 'Do you have nausea and vomiting?',
                explanation: '',
                ifs: ['Hypertension', 'HT_BP_3'],
                dataname: ['Hypertension', 'flow', 'nausea']
            },

            {
                id: 'HT_c4',
                type: "YesNo",
                msg: 'Do you have intense anxiety or fear of possible death(or impending doom)?',
                explanation: '',
                ifs: ['Hypertension', 'HT_BP_3'],
                dataname: ['Hypertension', 'flow', 'anxiety']
            },

            {
                id: 'HT_c5',
                type: "YesNo",
                msg: 'Do you have seizures recently?',
                explanation: '',
                ifs: ['Hypertension', 'HT_BP_3'],
                dataname: ['Hypertension', 'flow', 'seizures']
            },

            {
                id: 'HT_c6',
                type: "YesNo",
                msg: 'Do you have unresponsiveness?',
                explanation: '',
                ifs: ['Hypertension', 'HT_BP_3'],
                dataname: ['Hypertension', 'flow', 'unresponsiveness']
            },

            {
                id: 'HT_c7',
                type: "YesNo",
                msg: 'Do you have sudden numbness or weakness of the face, arm, or leg, especially on one side of the body(symptoms of stroke)?',
                explanation: '',
                ifs: ['Hypertension', 'HT_BP_3'],
                checkComplete: 'Yes',
                dataname: ['Hypertension', 'flow', 'numbness']
            },

            {
                id: 'HT_c8',
                type: "MultiInput",
                msg: '[To CHW] Measure the blood pressure again and enter the value.',
                explanation: '',
                ifs: ['Hypertension', 'HT_BP_2'],
                inputs: [
                    {
                        cap: 'SBP',
                        dataname: ['medical_basic', 'SBP']
                    }, {
                        cap: 'DBP',
                        dataname: ['medical_basic', 'DBP']
                    }],
            },

            // ******* Diabetes *******

            // blood glucose
            {
                id: 'Diabetes_d1',
                type: "TextInput",
                msg: '[To CHW] Measure respiratory rate',
                explanation: '',
                ifs: ['Diabetes', 'adult'],
                dataname: ['Diabetes', 'flow', 'respiratory_rate']
            },

            {
                id: 'Diabetes_d2',
                type: "YesNo",
                msg: 'Do you have ever lost consciousness?',
                explanation: '',
                ifs: ['Diabetes'],
                checkComplete: 'Yes',
                dataname: ['Diabetes', 'flow', 'lost_consciousness']
            },

            {
                id: 'Diabetes_d3',
                type: "YesNo",
                msg: 'Do you feel increased thirst?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'increased_thirst']
            },

            {
                id: 'Diabetes_d4',
                type: "YesNo",
                msg: 'Do you drink lots of water?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'drink_water']
            },

            {
                id: 'Diabetes_d5',
                type: "YesNo",
                msg: 'Do you feel weak or unusually tired?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'weak_tired']
            },

            {
                id: 'Diabetes_d6',
                type: "YesNo",
                msg: 'Have you lost weight recently?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'lost_weight']
            },

            // frequent_urination
            {
                id: 'Diabetes_d7',
                type: "YesNo",
                msg: 'Do you urinate frequently?',
                explanation: '',
                ifs: ['Diabetes'],
                dataname: ['Diabetes', 'flow', 'frequent_urination']
        },

        {
            id: 'Diabetes_MD2',
            type: "Message",
            msg: 'possible blood glucose 300-500/dL or higher.',
            explanation: 'Until you see the doctor, 1. Unprocessed wheat is better than rice. You shouldn\'t eat much sweet food now. 2. While you are taking food, make sure that you are taking more vegetables than rice and bread.However, do not take too much sugary fruits. 3. Eat a lot less oil and greasy food 4.Emphasize taking medications neatly',
            ifs: ['Diabetes', 'frequent_urination'],
        },

        {
            id: 'Diabetes_MD3',
            type: "Message",
            msg: 'possible blood glucose 300-400/dL or higher.',
            explanation: 'Until you see the doctor, 1. Unprocessed wheat is better than rice. You shouldn\'t eat much sweet food now. 2. While you are taking food, make sure that you are taking more vegetables than rice and bread.However, do not take too much sugary fruits. 3. Eat a lot less oil and greasy food 4.Emphasize taking medications neatly',
            ifs: ['Diabetes', 'water_lostweight'],
        },

        {
            id: 'Diabetes_MD4',
            type: "Message",
            msg: 'possible blood glucose 180/dL or higher.',
            explanation: '',
            ifs: ['Diabetes', 'thirst'],
        },

        // weight
        {
            id: 'NCD_a3',
            type: "TextInputOptional",
            msg: 'What is your current weight?',
            explanation: '',
            ifs: ['NCD'],
            dataname: ['NCD_General', 'weight']
        },
        // WC
        {
            id: 'NCD_a4',
            type: "TextInputOptional",
            msg: 'What is your current WC (abdominal circumference)?',
            explanation: '',
            ifs: ['NCD'],
            checkComplete: 'Yes',
            dataname: ['NCD_General', 'WC']
        },

        {
            id: 'NCD_a5',
            type: "YesNo",
            msg: 'Have you visited a medical facility recently?',
            explanation: '',
            ifs: ['NCD'],
            setname: ['NCD', 'visit_hp'],
            setvalue: ['Yes', 'No']
        },
        {
            id: 'NCD_a6',
            type: "DateInput",
            msg: 'When did you visit?',
            explanation: '',
            ifs: ['NCD', 'visit_hp'],
            dataname: ['NCD_General', 'medical_check_where']
        },
        {
            id: 'NCD_a7',
            type: "TextInput",
            msg: 'Where did you visit?',
            explanation: '',
            ifs: ['NCD', 'visit_hp'],
            dataname: ['NCD_General', 'medical_check_when']
        },

    ];
export default questions;

