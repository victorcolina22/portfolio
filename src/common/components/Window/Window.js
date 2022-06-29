import PropTypes from 'prop-types'

export function Window({ children, className, height = '100px', width = '100px', style }) {
  return (
    <div className={className} style={{
      width,
      height,
      border: '2px solid #fff',
      position: 'relative',
      ...style
    }}>
      {children}
    </div>
  )
}

Window.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string
}

export default Window