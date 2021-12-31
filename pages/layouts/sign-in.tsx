import { LayoutWrapper } from '../../src/layouts/LayoutWrapper'
import SignInLayout from '../../src/layouts/SignInLayout/SignInLayout'

const SignInLayoutPreview = () => {
  return (
    <LayoutWrapper
      layout={{
        name: 'Sign In',
        to: '/layouts/sign-in',
        current: true,
      }}
    >
      <SignInLayout />
    </LayoutWrapper>
  )
}

export default SignInLayoutPreview
