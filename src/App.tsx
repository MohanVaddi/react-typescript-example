import React, { Fragment, useContext, useState } from 'react';
import { InputValueContext } from './context/InputValueContext';
import { Form } from './components/Form';
import { User } from './interfaces';
import DataGrid from './components/DataGrid';
import Component, { Item } from './components/Component';

interface AppProps {
    headerText: string;
    extraText?: string;
}

export const App: React.FC<AppProps> = (props) => {
    const { headerText, extraText = 'default text' } = props;
    const { state, dispatch } = useContext(InputValueContext);

    const [user, setUser] = useState<User | null>(null);

    const getUserHandler = () => {
        setUser({
            name: 'Mohan',
            age: 20,
            country: 'India',
            address: {
                street: 'Gandhi Nagar',
                number: 39,
                zip: 533440,
            },
            admin: true,
        });
    };

    const users = [
        { id: 1, name: 'Mohan', age: 20 },
        { id: 2, name: 'siva', age: 21 },
        { id: 3, name: 'techbase', age: 32 },
    ];

    const orders = [
        { id: 1, quantity: 5, amount: 75 },
        { id: 2, quantity: 2, amount: 20 },
        { id: 3, quantity: 1, amount: 40 },
    ];

    return (
        <Fragment>
            <div>
                <h1>{headerText}</h1>
                {extraText && <p>{extraText}</p>}
                <p>{user?.name}</p>
                <button onClick={getUserHandler}>get User</button>
                <Form />
            </div>

            <p> Value: {state.inputValue}</p>
            <button
                onClick={() => {
                    dispatch({ type: 'SET_INPUT_VALUE_TO_100' });
                }}>
                Set Value to 100
            </button>

            <DataGrid items={users} />
            <br />
            <DataGrid items={orders} />
            <NewComponent />
        </Fragment>
    );
};

const NewComponent: React.FC = () => {
    const items: Item[] = [
        {
            id: 1,
            title: 'A nice sunset',
            type:'imageItem',
            imageUrl:
                'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
        },
        {
            id: 2,
            type:'quoteItem',
            quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quam ea. Nisi nulla earum itaque, sapiente exercitationem, laudantium sunt fuga dolores repellendus, expedita dicta. Voluptates minima laboriosam odit reprehenderit magnam!',
        },
    ];

    return <Component items={items} />;
};
