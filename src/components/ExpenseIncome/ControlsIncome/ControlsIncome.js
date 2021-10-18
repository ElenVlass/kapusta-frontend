import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Select from '../Select';

import DateComponent from '../Date';
import styles from '../Controls/Controls.module.scss';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import useWindowDementions from '../../../helpers/useWindowDementions';
import { kapustaOperations } from '../../../redux/operations';
import { enterError } from '../../../services/pnotify';

import {
  inputChangeHandler,
  inputBlurHandler,
} from '../../../helpers/priceInputParser';

const options = [
  { value: 'salary', label: 'ЗП' },
  { value: 'otherIncome', label: 'Доп. доход' },
];

export default function ControlsIncome() {
  const [income, setIncome] = useState({
    name: '',
    sum: '',
  });

  const [category, setCategory] = useState({ category: '' });
  const [date, setDate] = useState({ date: '' });

  const { name, sum } = income;

  const dispatch = useDispatch();

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    setIncome(prevIncome => ({
      ...prevIncome,
      [name]: value,
    }));
  }, []);

  const handlePriceChange = e => {
    setIncome(prevExpense => ({
      ...prevExpense,
      [e.target.name]: inputChangeHandler(e.target.value),
    }));
  };

  const handlePriceBlur = e => {
    setIncome(prevExpense => ({
      ...prevExpense,
      [e.target.name]: inputBlurHandler(e.target.value),
    }));
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const data = {
        date,
        name,
        sum,
        category,
      };

      if (name === '' || sum === '' || category === undefined) {
        enterError();
        return;
      }

      dispatch(kapustaOperations.addIncome(data));
      dispatch(kapustaOperations.fetchTotalBalance());

      resetForm();
    },
    [dispatch, name, sum, category, date],
  );

  const handleReset = () => {
    resetForm();
  };

  const resetForm = () => {
    setIncome({ name: '', sum: '' });
  };

  const { width } = useWindowDementions();

  return (
    <div className={styles.controls__container}>
      <div className={styles.date__container}>
        {width >= 768 && <DateComponent setDate={setDate} />}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs__container}>
          <input
            type="text"
            name="name"
            placeholder="Описание товара"
            className={styles.input__item}
            onChange={handleChange}
            value={name}
          />

          <Select setCategory={setCategory} options={options} />

          <div className={styles.input__sum__thumb}>
            <input
              name="sum"
              placeholder="0.00"
              pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
              title="Значение должно состоять из цифр и может иметь точку"
              className={styles.input__sum}
              onBlur={handlePriceBlur}
              onChange={handlePriceChange}
              value={sum}
            />
            <Calculator className={styles.icon__calculator} />
            <div className={styles.icon__mobile_calculator_container}>
              <Calculator className={styles.icon__mobile_calculator} />
            </div>
          </div>
        </div>

        <div className={styles.buttons__container}>
          <button type="submit" className={styles.button__submit}>
            Ввод
          </button>
          <button
            type="reset"
            className={styles.button__reset}
            onClick={handleReset}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}
