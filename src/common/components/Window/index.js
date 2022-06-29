import { Window as WindowComponent } from './Window'
import { WindowHeader } from './WindowHeader'

export { WindowHeader } from './WindowHeader'
export { CloseIcon } from './CloseIcon'
export { MinimizeIcon } from './MinimizeIcon'
export { ExpandIcon } from './ExpandIcon'

export const Window = Object.assign(WindowComponent, {
  Header: WindowHeader
})

export default Window