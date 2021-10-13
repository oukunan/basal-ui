import Breadcrumb from '@basal-ui/breadcrumb'

export default function BreadcrumbPage() {
  return (
    <Breadcrumb
      links={[
        { label: 'Link1', href: '/about' },
        { label: 'Link2', href: '/home' }
      ]}
    />
  )
}
