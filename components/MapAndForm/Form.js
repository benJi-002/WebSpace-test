'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

import frame from '../../public/checkFrame.svg';
import mark from '../../public/checkMark.svg';

import styles from '../../styles/Form.module.scss';




const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [checked, setChecked] = useState(false);


    // const { register, handleSubmit } = useForm();

    // function sendEmail(data) {

    const apiEndpoint = '../../mailer/smart.php';

    //     fetch(apiEndpoint, {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => res.json())
    //         .then((response) => {
    //             alert(response.message);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });

    //     console.log(data);
    // }

    // function onSubmit(data) {
    //     sendEmail(data);
    // }

    const handleSubmit = e => {

        e.preventDefault();

        const data = {
            name,
            phone
        }

        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((response) => {
                alert(response.message);
            })
            .catch((err) => {
                alert(err);
            });
        
            console.log(JSON.stringify(data));


        setName('');
        setPhone('');
        setChecked(false);

    };

    const chengeCheckbox = () => {
        setChecked(!checked);
    }

    return (
        <div className={styles.wrapper}>

            <form onSubmit={e => handleSubmit(e)} >

                <div className={styles.title}>Обратный звонок</div>

                <input
                    className={styles.inputName}

                    value={name}
                    placeholder='Ваше имя'
                    required
                    id="name"
                    type="text"
                    name='name'
                    onChange={e => setName(e.target.value)}
                />

                <input
                    className={styles.inputPhone}

                    value={phone}
                    placeholder='Номер телефона'
                    required
                    id="phone"
                    type="number"
                    name='phone'
                    onChange={e => setPhone(e.target.value)}
                />

                <div className={styles.checkboxWrapper}>
                    <input
                        className={styles.checkbox}

                        onChange={chengeCheckbox}
                        checked={checked}
                        required
                        id='check'
                        type='checkbox'
                    />
                    <Image src={frame} className={styles.frame}></Image>
                    <Image src={mark} className={styles.mark}></Image>
                    <label className={styles.checkboxLabel} htmlFor="check">Согласие на обработку персональных данных</label>
                </div>

                <button 
                className={styles.button}
                    type="submit"
                >
                    Отправить →
                </button>
            </form>
        </div>
    );
};

export default Form;