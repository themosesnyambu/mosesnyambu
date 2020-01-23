import React, { useState } from 'react'
import Contact from './contact'
import axios from 'axios'

const ContactControl = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [subjectError, setSubjectError] = useState('')
    const [messageError, setMessageError] = useState('')
    const [submitEnabled, setSubmitEnabled] = useState(true)
    const [success, setSuccess] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    const resetFields = () => {
        setName('')
        setSubject('')
        setMessage('')
        setEmail('')
        setSubmitEnabled(true)
    }

    async function submitForm(e) {
        e.preventDefault();
        if (validateFields()) {
            let data = {
                "name": name, "email": email, "subject": subject, "message": message
            }

            try {
                setSubmitEnabled(false)
                const res = await axios.post('https://milimaniserver.herokuapp.com/contact', data)
                setSuccess(res.message)
                resetFields()

            } catch (error) { }
        }
    }

    const validateFields = () => {
        if (validateEmail() && validateMessage() && validateSubject() && validateName()) {
            return true
        } else {
            return false
        }
    }

    const validateName = () => {
        if (name.trim().length < 1) {
            setNameError('cannot be empty')
            return false;
        } else {
            setNameError('')
            return true;
        }
    }

    const validateSubject = () => {
        if (subject.trim().length < 1) {
            setSubjectError('cannot be empty')
            return false;
        } else {
            setSubjectError('')
            return true;
        }
    }

    const validateMessage = () => {
        if (message.trim().length < 1) {
            setMessageError('cannot be empty')
            return false;
        } else {
            setMessageError('')
            return true;
        }
    }

    const validateEmail = () => {
        var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            setEmailError('')
            return true;
        } else {
            setEmailError('invalid email')
            return false;
        }
    }


    return (
        <Contact
            name={name}
            email={email}
            subject={subject}
            message={message}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handleSubjectChange={handleSubjectChange}
            handleMessageChange={handleMessageChange}
            submitForm={submitForm}
            nameError={nameError}
            subjectError={subjectError}
            messageError={messageError}
            emailError={emailError}
            submitEnabled={submitEnabled}
            success={success}
        />
    );
}

export default ContactControl;