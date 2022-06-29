import PropTypes from 'prop-types'

export function WindowHeader({ children, className, height = '10px', style }) {
  return (
    <div className={className} style={{
      width: '100%',
      height,
      borderBottom: '2px solid var(--primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
      ...style
    }}>
      {children}
    </div>
  )
}

WindowHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
}

export default WindowHeader