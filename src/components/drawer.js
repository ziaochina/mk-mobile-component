import { Drawer } from 'antd-mobile'

function DrawerComponent(props) {
	let className = classNames({
		'mkm-drawer': true,
		[props.className]: !!props.className
	})
	return <Drawer {...props} className={className} />
}


export default DrawerComponent
