import React from 'react';
import PropTypes from 'prop-types';
import css from '../Feedback.module.css';
import { Notification } from 'components/Notofocation/Notification';

const Statistics = ({ good, neutral, bad, total, percentage = 0 }) => {
  return total ? (
    <div className={css.statistics}>
      <p className={css.counter}>Good: {good}</p>
      <p className={css.counter}>Neutral: {neutral}</p>
      <p className={css.counter}>Bad: {bad}</p>
      <p className={css.counter}>Total: {total}</p>
      <p className={css.counter}>Positive feedback: {percentage}%</p>
    </div>
  ) : (
    <Notification message="There is no feedback" />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
