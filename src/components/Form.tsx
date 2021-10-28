import React, { Fragment, useState } from 'react';

const defaultFormData = {
    title: '',
    body: '',
};

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const { title, body } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData(defaultFormData);
    };
    return (
        <Fragment>
            <h2>Form</h2>
            <p>Create a post</p>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    value={title}
                    id='title'
                    onChange={onChange}
                />
                <input
                    type='text'
                    value={body}
                    id='body'
                    onChange={onChange}
                />
                <button type='submit'>Upload post</button>
            </form>
        </Fragment>
    );
};
