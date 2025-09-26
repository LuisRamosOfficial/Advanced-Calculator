import styles from '../styles/SimpleCalculator.module.scss';

const SimpleCalculator = () => {

    const buttons = [
        { label: 'C', type: 'action', name: 'clear' },
        { label: '*', type: 'operator', name: 'multiply' },
        { label: '7', type: 'number', name: 'seven' },
        { label: '8', type: 'number', name: 'eight' },
        { label: '9', type: 'number', name: 'nine' },
        { label: '/', type: 'operator', name: 'divide' },
        { label: '4', type: 'number', name: 'four' },
        { label: '5', type: 'number', name: 'five' },
        { label: '6', type: 'number', name: 'six' },
        { label: '-', type: 'operator', name: 'subtract' },
        { label: '1', type: 'number', name: 'one' },
        { label: '2', type: 'number', name: 'two' },
        { label: '3', type: 'number', name: 'three' },
        { label: '+', type: 'operator', name: 'add' },
        { label: '.', type: 'number',   name: 'decimal' },
        { label: '0', type: 'number', name: 'zero' },
        { label: '=', type: 'action', name: 'equals' },
    ];


  return (
    <div className={styles.calculator}>
        <div className={styles.display}>
            <input id='Calculator' type="text" value="0" />
        </div>
        <div className={styles.buttons}>
            {buttons.map((button, index) => (
                <button key={index} className={`${styles[button.name]} ${styles[button.type]}`}>
                    {button.label}
                </button>
            ))}
        </div>
    </div>); 

}

export default SimpleCalculator;