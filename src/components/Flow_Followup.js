const questions =
[
    // Follow-up
    {
        id: 's1',
        type: "YesNo",
        msg: 'Did the patient visit the medical facility?',
        explanation: '',
        ifs: ['follow'],
        setname: ['Follow', 'visit'],
        setvalue: ['Yes', 'No']
    },

    {
        id: 's2',
        type: "TextInput",
        msg: 'Where did the patient visit?',
        explanation: '',
        ifs: ['follow', 'visit'],
        dataname: ['Follow', 'flow', 'where']
    },

    {
        id: 's3',
        type: "DateInput",
        msg: 'When did the patient visit medical facility?',
        explanation: '',
        ifs: ['follow', 'visit'],
        dataname: ['Follow', 'flow', 'when']
    },

    {
        id: 's4',
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
        id: 'MS1',
        type: "Message",
        msg: 'Tell the patient to visit the medical facility imediately.',
        explanation: '',
        ifs: ['follow', 'no_visit']
    }, {
        id: 's5',
        type: "YesNo",
        msg: 'Do the patient agree to visit the medical facility?',
        explanation: '',
        ifs: ['follow', 'no_visit'],
        dataname: ['Follow', 'flow', 'agree']
    }, {
        id: 'MS2',
        type: "Message",
        msg: 'Consult with Project manager immidiately.',
        explanation: '',
        ifs: ['follow', 'no_visit', 'no_agree'],
    }, {
        id: 's6',
        type: "Selection",
        msg: 'Select skip if the patient will never agree to visit medical facility.',
        explanation: '',
        ifs: ['follow', 'no_visit', 'no_agree'],
        caps: [
            'continue follow-up',
            'Skip'
        ],
        dataname: ['Follow', 'flow', 'agree_final']
        },
        //{
        //id: '997',
        //type: "Message",
        //msg: 'Follow up the patient in one day.',
        //explanation: '',
        //ifs: ['follow', 'need_follow'],
        //},
        {
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
export default questions;