import classNames from 'classnames';
import styles from './form-row.module.scss';

export interface FormRowProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | String> | String;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FormRow = ({ className, children }: FormRowProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.formrow}>{children}</div>
        </div>
    );
};
