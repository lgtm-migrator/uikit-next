import React, { useState } from 'react'

import { NavigationItem } from '../NavigationItem'
import { classNames } from '../../../helpers/methods'
import { Anchor } from '../../..'
import { Disclosure } from '@headlessui/react'

import { useRouter } from 'next/router'

export type VerticalNavigationProps = {
  items?: NavigationItem[]
  secondaryNavigationTitle?: string
  secondaryItems?: NavigationItem[]
  showIcons?: boolean
  onItemSelected?: (item: NavigationItem) => void
}

const VerticalNavigationComponent: React.FC<VerticalNavigationProps> = ({
  items = [],
  secondaryNavigationTitle = undefined,
  secondaryItems = undefined,
  showIcons = true,
}) => {
  const router = useRouter()
  const { pathname } = router

  // memo or state

  const [navItems] = useState<NavigationItem[]>(items.slice())

  return (
    <nav aria-label="Sidebar">
      <div className="space-y-1">
        {navItems.map((item) => {
          const current = router.pathname.includes(item.to)
          return !item.children ? (
            <Anchor
              to={item.to}
              key={item.name}
              aria-current={current ? 'page' : undefined}
              className={classNames(
                current
                  ? 'bg-primary-100 text-primary-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
              )}
            >
              {showIcons && item.icon && item.icon}
              <span className="truncate">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    current
                      ? 'bg-white'
                      : 'bg-gray-100 group-hover:bg-gray-200',
                    'ml-auto inline-block py-0.5 px-3 text-xs rounded-full',
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </Anchor>
          ) : (
            <Disclosure
              as="div"
              key={item.name}
              defaultOpen={current}
              className="space-y-1"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={classNames(
                      current
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500',
                    )}
                  >
                    <svg
                      className={classNames(
                        open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                        'mr-2 shrink-0 h-5 w-5 group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                      )}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                    {item.name}
                  </Disclosure.Button>
                  <Disclosure.Panel className="space-y-1">
                    {item.children?.map((subItem) => (
                      <Anchor
                        key={subItem.name}
                        to={subItem.to}
                        className={classNames(
                          subItem.to === router.pathname
                            ? 'bg-primary-100 text-primary-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group w-full  flex items-center pl-10 pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                        )}
                      >
                        {subItem.name}
                      </Anchor>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )
        })}
      </div>
      {secondaryItems && secondaryItems.length > 0 && (
        <div className="mt-8">
          {secondaryNavigationTitle && (
            <h3
              className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              id="projects-headline"
            >
              {secondaryNavigationTitle}
            </h3>
          )}
          <div className="mt-1 space-y-1" aria-labelledby="projects-headline">
            {secondaryItems?.map((item) => (
              <Anchor
                key={item.name}
                to={item.to}
                className={classNames(
                  'w-full group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md',
                  'hover:text-gray-900 hover:bg-gray-50',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                )}
              >
                <span className="truncate">{item.name}</span>
              </Anchor>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export const VerticalNavigation = Object.assign(VerticalNavigationComponent, {})

export default VerticalNavigation
