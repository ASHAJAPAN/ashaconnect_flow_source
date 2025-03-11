const questions =
    [
        {
            id: 'RESULT_MOSTURGENT',
            type: "Result",
            msg: 'MOST URGENT: the patient must visit the medical facility imediately.',
            explanation: '',
            ifs: ['Urgent4'],
        },

        {
            id: 'RESULT_URGENT',
            type: "Result",
            msg: 'URGENT: the patient must visit the medical facility in 1-3 day.',
            explanation: '',
            ifs: ['notUrgent4', 'Urgent3'],
        },

        {
            id: 'RESULT_SLIGHTLYURGENT',
            type: "Result",
            msg: 'SLIGHTLY URGENT: the patient must visit the medical facility.',
            explanation: '',
            ifs: ['notUrgent3', 'Urgent2'],
        },

        {
            id: 'RESULT_NOTURGENT',
            type: "Result",
            msg: 'NOT URGENT: ',
            explanation: '',
            ifs: ['notUrgent2'],
        }
    ]
export default questions;