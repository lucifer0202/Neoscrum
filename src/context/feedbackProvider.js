import React, {useState, createContext} from 'react';
import FeedbackContext from './feedbackContext';


const FeedBackProvider = props =>  {

    const [feedbacks, setFeedback] = useState([
        {
            text: 'This app is so cool',
            describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            id: ''
        },
    ])
    const [ userInfo , setUserInfo] = useState({ email: '', name: ''})

    const handleUserProfileUpdate = (change={}) =>{      
        setUserInfo((preValue) =>{
            return {...preValue, ...change}
        })  
    }


    return (
        <FeedbackContext.Provider value={{feedbacks, setFeedback, userInfo, setUserInfo,
            handleUserProfileUpdate}}>
          {props.children}
        </FeedbackContext.Provider>
    )
}
export default FeedBackProvider
