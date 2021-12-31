import { Fragment } from 'react'
import Image from 'next/image'

import { Button, classNames, NavBar, TabNavigation } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

import { PlusSmIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'

import Logo from '../../src/assets/logo.svg'
import LogoText from '../../src/assets/logo-text.svg'

import FaceImg from '../../src/assets/face-1.jpeg'

const SampleActions = () => {
  return (
    <>
      <button
        type="button"
        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 rounded-full">
              <Image className="h-8 w-8 rounded-full" src={FaceImg} alt="" />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  )}
                >
                  Your Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  )}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

const SampleIcon = () => (
  <>
    <div className="block lg:hidden h-8 w-auto">
      <Image className="block lg:hidden h-8 w-auto" src={Logo} alt="Workflow" />
    </div>
    <div className="hidden lg:block h-8 w-auto">
      <Image
        className="hidden lg:block h-8 w-auto"
        src={LogoText}
        alt="Workflow"
      />
    </div>
  </>
)

const SampleNavigation = () => (
  <TabNavigation
    isNavBar
    tabs={[
      { name: 'Dashboard', to: '/', current: true },
      { name: 'Team', to: '/', current: false },
      { name: 'Projects', to: '/', current: false },
      { name: 'Calendar', to: '/', current: false },
    ]}
  />
)

const SampleQuickAction = () => (
  <>
    <Button type="button">
      <PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
      <span>New Job</span>
    </Button>
  </>
)

const SampleDisclosurePanel = () => {
  return (
    <>
      <div className="pt-2 pb-3 space-y-1">
        {/* Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
        <a
          href="#"
          className="bg-primary-50 border-primary-500 text-primary-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
        >
          Team
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
        >
          Projects
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
        >
          Calendar
        </a>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="flex items-center px-4 sm:px-6">
          <div className="shrink-0 h-10 w-10 rounded-full">
            <Image className="h-10 w-10 rounded-full" src={FaceImg} alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">Tom Cook</div>
            <div className="text-sm font-medium text-gray-500">
              tom@example.com
            </div>
          </div>
          <button
            type="button"
            className="ml-auto shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          <a
            href="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  )
}

const NavBarPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'NavBar',
        to: '/components/navbar',
        current: true,
      }}
    >
      <NavBar
        icon={<SampleIcon />}
        tabNavigation={<SampleNavigation />}
        actions={<SampleActions />}
        disclosurePanel={<SampleDisclosurePanel />}
      />
      <NavBar
        icon={<SampleIcon />}
        tabNavigation={<SampleNavigation />}
        quickAction={<SampleQuickAction />}
        disclosurePanel={<SampleDisclosurePanel />}
      />
      <NavBar
        icon={<SampleIcon />}
        tabNavigation={<SampleNavigation />}
        quickAction={<SampleQuickAction />}
        actions={<SampleActions />}
        disclosurePanel={<SampleDisclosurePanel />}
      />
    </ComponentWrapper>
  )
}

export default NavBarPreview
