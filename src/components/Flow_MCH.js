const questions = 
[

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

        {
            id: 'ANC_b5',
            type: "YesNo",
            msg: 'Did you go to medical facility to receive antenatal care?',
            explanation: '',
            ifs: ['ANC'],
            setname: ['ANC', 'visited'],
            setvalue: ['Yes', 'No']
        },

        {
            id: 'ANC_b6',
            type: "TextInput",
            msg: 'where did you go?',
            explanation: '',
            ifs: ['ANC', 'ANC_visited'],
            dataname: ['Newborn', 'flow', 'ANC_place']
        },

        {
            id: 'ANC_b7',
            type: "TextInput",
            msg: 'When did you go?',
            explanation: '',
            ifs: ['ANC', 'ANC_visited'],
            dataname: ['Newborn', 'flow', 'ANC_date']
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

            // Grunting
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
                id: 'Newborn_h22',
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

    ];
export default questions;

