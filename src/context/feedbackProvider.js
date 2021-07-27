import React, {useState, createContext} from 'react';
import FeedbackContext from './feedbackContext';


const FeedBackProvider = props =>  {

    const [feedbacks, setFeedback] = useState([
        {
            text: '',
            describe: '',
            id: ''
        },
    ])

    return (
        <FeedbackContext.Provider value={[feedbacks, setFeedback]}>
          {props.children}
        </FeedbackContext.Provider>
    )
}
export default FeedBackProvider
