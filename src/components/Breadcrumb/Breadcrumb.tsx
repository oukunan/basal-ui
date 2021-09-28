import { styled } from '../../../stitches.config'

const OrderList = styled('ol', {
  listStyle: 'none',
  margin: 0,
  padding: 0
})

const ListItem = styled('li', {
  display: 'inline',
  margin: 0,
  padding: 0,

  '& a[aria-current="page"]': {
    fontWeight: 'bold'
  }
})

type BreadcrumbProps = {
  links: { label: string; href: string }[]
}

export default function Breadcrumb(props: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <OrderList>
        {props.links.map((link, index) => {
          const isLastLink = index === props.links.length - 1

          return (
            <ListItem key={index}>
              <a href={link.href} aria-current={isLastLink && 'page'}>
                {link.label}
              </a>
            </ListItem>
          )
        })}
      </OrderList>
    </nav>
  )
}
