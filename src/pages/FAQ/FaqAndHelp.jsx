import { Collapse } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
const FaqAndHelp = () => {
    const text = `
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, officia nihil 
 inventore porro in accusantium adipisci cumque ex aspernatur repellendus temporibus 
 oluptate. Molestiae repudiandae quos commodi?
 inventore porro in accusantium adipisci cumque ex aspernatur repellendus temporibus 
 oluptate. Molestiae repudiandae quos commodi?
`
    const items = [
        {
            key: '1',
            label: 'BRANDING IS SIMPLY A MORE EFFICIENT WAY TO SELL THINGS?',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'MARKETING IS A COMPANY’S ULTIMATE OBJECTIVE?',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'POSITIONING IS WHAT YOU DO TO THE MIND OF THE PROSPECT?',
            children: <p>{text}</p>,
        },
        {
            key: '4',
            label: 'BRANDING IS SIMPLY A MORE EFFICIENT WAY TO SELL THINGS?',
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: 'MARKETING IS A COMPANY’S ULTIMATE OBJECTIVE?',
            children: <p>{text}</p>,
        },
        {
            key: '6',
            label: 'IT’S BETTER TO BE FIRST IN THE MIND THAN TO BE FIRST IN THE MARKETPLACE?',
            children: <p>{text}</p>,
        },
        {
            key: '7',
            label: 'MARKETING IS A COMPANY’S ULTIMATE OBJECTIVE?',
            children: <p>{text}</p>,
        },
        {
            key: '8',
            label: 'POSITIONING IS WHAT YOU DO TO THE MIND OF THE PROSPECT?',
            children: <p>{text}</p>,
        },
    ];

    return (
        <div className='faq-page'>
            <div className="faq-page-title">
                <h1>Frequently Asked Questions</h1>
                <p>These are the most commonly asked questions about us. <br />
                    Can't find what you're looking for? <Link to="/contact-us" className='chat-link'>Chat to our friendly team!</Link></p>
            </div>
            <p></p>
            <div className="faq-page-body">
                <div className="container">
                    <div className="question-box">
                        <Collapse defaultActiveKey={['1']}
                            accordion ghost items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqAndHelp