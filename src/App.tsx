import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';

function App() {
    const [count, setCount] = useState(0);

    function onFormSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData: Record<string, string> = {};

        function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
            return 'value' in e && 'name' in e;
        }

        Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        console.log('formData', formData);
    }

    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
                Have a question? Fill out the form below and we&apos;ll get back to you as soon as
                we can.{' '}
            </p>
            <p className={styles.note}>All fields are required.</p>
            <form onSubmit={onFormSubmit} className={styles.form}>
                <FormRow>
                    <Label htmlFor={'name'}>Name </Label>
                    <Input id={'name'} name={'name'} />
                </FormRow>
                <FormRow>
                    <Label htmlFor={'email'}>E-mail</Label>
                    <Input id={'email'} name={'email'} />
                </FormRow>
                <FormRow>
                    <Label htmlFor={'message'}>Message</Label>
                    <Input id={'message'} name={'message'} />
                </FormRow>
                <SubmitButton> Submit </SubmitButton>
            </form>
        </div>
    );
}

export default App;
