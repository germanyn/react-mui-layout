import { alpha, ListItemButton, ListItemButtonBaseProps } from '@mui/material'
import { forwardRef } from 'react'
import {
	Link,
	LinkProps,
	useMatch,
	useResolvedPath,
} from 'react-router-dom'

const LinkAdapter = forwardRef<HTMLAnchorElement, LinkProps>(function LinkAdapter(
	itemProps,
	ref,
) {
	return <Link ref={ref} {...itemProps} role={undefined} />
})

export type ListItemButtonLinkProps = ListItemButtonBaseProps & LinkProps & {
  children: React.ReactNode
  end?: boolean
}

export function ListItemButtonLink({ end, ...props}: ListItemButtonLinkProps) {
	const resolvedPath = useResolvedPath(props.to)
	const match = useMatch({ path: resolvedPath.pathname, end })
	const selected = !!match

	return (
		<ListItemButton
			component={LinkAdapter}
			selected={selected}
			sx={({ palette }) => ({
				'&.Mui-selected' : {
					color: 'primary.main',
					backgroundColor: alpha(palette.primary.main, 0.08),
				},
				'&.Mui-selected>.MuiListItemIcon-root' : {
					color: 'inherit',
				},
			})}
			{...props}
		/>
	)
}