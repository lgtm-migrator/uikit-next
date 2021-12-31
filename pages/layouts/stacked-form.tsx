import { LayoutWrapper } from '../../src/layouts/LayoutWrapper'
import StackedFormLayout from '../../src/layouts/StackedFormLayout/StackedFormLayout'

const StackedFormLayoutPreview = () => {
  return (
    <LayoutWrapper
      layout={{
        name: 'Stacked Form',
        to: '/layouts/stacked-form',
        current: true,
      }}
    >
      <StackedFormLayout />
    </LayoutWrapper>
  )
}

export default StackedFormLayoutPreview
