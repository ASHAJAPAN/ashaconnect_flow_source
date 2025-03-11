const questions =
    [
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
            type: "Selection",
            msg: 'Have you taken your medications as directed in the last week?',
            explanation: '',
            ifs: ['NCD', 'Not_Good'],
            caps: [
                'I had it everyday.',
                'Sometimes I failed to have it.',
                'I did not have it.',
                'I had not been directed to take a medicine.'
            ],
            dataname: ['Medication', 'flow', 'have_medication']
        },

        {
            id: 'Medication_y2',
            type: "Selection",
            msg: 'Are there any reason not to take the medicine?',
            explanation: '',
            ifs: ['NCD', 'dont_have_medication'],
            caps: [
                'Yes. (I intentionally did not take the medicine.)',
                'No. (I simply forgot to take the medicine.)',
                'The medication has been taken completely'
            ],
            dataname: ['Medication', 'flow', 'reason_no_medication']
        },

        {
            id: 'Medication_y2_2',
            type: "Message",
            msg: 'I\'m going to ask you why you don\'t take your medicine.',
            explanation: '',
            ifs: ['NCD', 'no_medication_intent']
        },

        {
            id: 'Medication_y2_3',
            type: "Message",
            msg: 'I\'m going to ask you why you don\'t go to a medical institution to get more medicine.',
            explanation: '',
            ifs: ['NCD', 'no_medication_over']
        },

        {
            id: 'Medication_y3',
            type: "YesNo",
            msg: 'Do you stop taking your medication because it makes you feel unwell?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget'],
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
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            dataname: ['Medication', 'flow', 'cause_improved_symptoms']
        },

        {
            id: 'Medication_y6',
            type: "YesNo",
            msg: 'Have you stopped taking your medication because it was ineffective?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            dataname: ['Medication', 'flow', 'cause_ineffective']
        },

        {
            id: 'Medication_y7',
            type: "YesNo",
            msg: 'Have you stopped taking your medication because you don\'t understand the need for medication?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            dataname: ['Medication', 'flow', 'cause_not_understand']
        },

        {
            id: 'Medication_y8',
            type: "YesNo",
            msg: 'Have you stopped taking your medication because you don\'t trust hospitals, HP, CHU?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            dataname: ['Medication', 'flow', 'cause_not_trust']
        },

        {
            id: 'Medication_y9',
            type: "YesNo",
            msg: 'Have you stopped taking your medication because you have no money for medicines(which can be given at the health post)?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            dataname: ['Medication', 'flow', 'cause_no_money_given']
        },

        {
            id: 'Medication_y10',
            type: "YesNo",
            msg: 'Have you stopped taking your medication because you have no money for medicines(cannot get them at the health post)?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            dataname: ['Medication', 'flow', 'cause_no_money_not_given']
        },

        {
            id: 'Medication_y11',
            type: "YesNo",
            msg: 'Have you stopped taking your medication because of distance to hospital / HP / CHU / phrmacies?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            dataname: ['Medication', 'flow', 'cause_distance']
        },

        {
            id: 'Medication_y12',
            type: "YesNo",
            msg: 'Have you stopped taking your medication because of high cost of transportation fee?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            dataname: ['Medication', 'flow', 'cause_transportation_fee']
        },

        {
            id: 'Medication_y13',
            type: "YesNo",
            msg: 'Are there any other reason to stop taking medication?',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell'],
            setname: ['Medication', 'cause_other'],
            setvalue: ['Yes', 'No']
        },

        {
            id: 'Medication_y13_2',
            type: "YesNo",
            msg: 'Tell me the reason',
            explanation: '',
            ifs: ['NCD', 'no_medication_no_forget', 'no_medication_no_unwell', 'cause_other'],
            dataname: ['Medication', 'flow', 'cause_other']
        },


        {
            id: 'Medication_y14',
            type: "YesNo",
            msg: 'Do you forget to take your medicine because you forget to take it with you when you go out?',
            explanation: '',
            ifs: ['NCD', 'no_medication_forget'],
            dataname: ['Medication', 'flow', 'not_visit_no_money_given']
        }
    ]
export default questions;