import Image from 'next/image'

import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronLeftIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'

import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'
import {
  Anchor,
  Breadcrumb,
  Button,
  classNames,
  PageHeading,
} from '../../components'

import FaceImg from '../../src/assets/face-2.jpeg'

const Back = () => {
  return (
    <nav className="sm:hidden" aria-label="Back">
      <Anchor
        to="/"
        className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
      >
        <ChevronLeftIcon
          className="shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Back
      </Anchor>
    </nav>
  )
}

const SampleBreadcrumb = () => {
  return (
    <Breadcrumb
      className="hidden sm:flex"
      type={Breadcrumb.type.simpleWithChevrons}
    />
  )
}

const SampleActions = () => {
  return (
    <>
      <Button type="button" buttonType={Button.buttonType.outline}>
        Edit
      </Button>
      <Button
        className="ml-3"
        type="button"
        buttonType={Button.buttonType.primary}
      >
        Publish
      </Button>
    </>
  )
}

const SampleMeta = () => {
  return (
    <>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <BriefcaseIcon
          className="shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Full-time
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <LocationMarkerIcon
          className="shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Remote
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <CurrencyDollarIcon
          className="shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        $120k &ndash; $140k
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <CalendarIcon
          className="shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Closing on January 9, 2020
      </div>
    </>
  )
}

const SampleHeadingTitle = () => {
  return (
    <div className={classNames('mt-2', 'flex-1 min-w-0')}>
      <div className={classNames('flex items-start space-x-5')}>
        <div className="shrink-0">
          <div className="relative">
            <Image
              className="h-16 w-16 rounded-full object-cover"
              width={64}
              height={64}
              src={FaceImg}
              alt=""
            />
            <span
              className="absolute inset-0 shadow-inner rounded-full"
              aria-hidden="true"
            />
          </div>
        </div>
        {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
        <div className="pt-1.5">
          <h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
          <p className="text-sm font-medium text-gray-500">
            Applied for{' '}
            <a href="#" className="text-gray-900">
              Front End Developer
            </a>{' '}
            on <time dateTime="2020-08-25">August 25, 2020</time>
          </p>
        </div>
      </div>
    </div>
  )
}

const PageHeadingPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'PageHeading',
        to: '/components/page-heading',
        current: true,
      }}
    >
      <PageHeading
        title={<SampleHeadingTitle />}
        breadcrumb={<SampleBreadcrumb />}
        back={<Back />}
        actions={<SampleActions />}
      />
      <PageHeading
        title="Front End Developer"
        breadcrumb={<SampleBreadcrumb />}
        back={<Back />}
        actions={<SampleActions />}
      />
      <PageHeading
        title="Front End Developer"
        actions={<SampleActions />}
        meta={<SampleMeta />}
      />
      <PageHeading title="Front End Developer" />
    </ComponentWrapper>
  )
}

export default PageHeadingPreview
