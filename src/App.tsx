import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form>
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
