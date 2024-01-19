import classNames from 'classnames';
import styles from './submit-button.module.scss';
import { RiSendPlaneFill } from 'react-icons/ri';

export interface SubmitButtonProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SubmitButton = ({ className, children }: SubmitButtonProps) => {
    return (
        <div className={' ${styles.root} ${className} '}>
            <button className={styles.button}>
                <RiSendPlaneFill className={styles.iconSend} />
                {children}
            </button>
        </div>
    );
};
