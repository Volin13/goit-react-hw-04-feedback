import { SlLike, SlCheck, SlDislike } from 'react-icons/sl';
import { FiMeh } from 'react-icons/fi';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const switchImages = name => {
    switch (name) {
      case 'bad':
        return <SlDislike className={css.img} />;

      case 'good':
        return <SlLike className={css.img} />;

      case 'nautral':
        return <FiMeh className={css.img} />;

      default:
        return <SlCheck className={css.img} />;
    }
  };
  return (
    <div>
      <ul className={css.btn_list}>
        {options.map(feedbackname => (
          <li key={feedbackname}>
            <button
              className={css.btn}
              type="button"
              name={feedbackname}
              onClick={evt => onLeaveFeedback(evt)}
            >
              <span>{switchImages(feedbackname)} </span>
              {feedbackname}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
