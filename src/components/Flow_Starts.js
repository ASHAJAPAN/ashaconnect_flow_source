const questions =
    [
        // Starts
        {
            id: 'Start',
            type: "Selection",
            msg: 'Select the interview type you want to test. ',
            explanation: '',
            //nexts: [ 'B1', 'Set1', 'F1'],
            caps: [
                'Normal interview',
                'Follow-up interview'
            ],
            setname: ['interview_type'],
            setvalue: ['normal', 'follow']
        },

        {
            id: 'Set1',
            type: "Selection",
            msg: 'Select the sample patient to test the flow. ',
            explanation: '',
            caps: [
                'ANC (Before 20 weeks)',
                'ANC (20 - 36 weeks)',
                'ANC (After 36 weeks)',
                'PNC',
                'Asthma-COPD',
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
    ]
export default questions;