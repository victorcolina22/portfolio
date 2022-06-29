import PropTypes from 'prop-types'

import closeIcon from '../../../assets/icons/close.svg';

export function CloseIcon({ className }) {
  return (
    <img className={className} src={closeIcon} alt="close-icon" />
  )
}

CloseIcon.propTypes = {
  className: PropTypes.string
}

export default CloseIcon