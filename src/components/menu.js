import { Menu } from 'antd-mobile'

function MenuComponent(props) {
	let className = classNames({
		'mkm-menu': true,
		[props.className]: !!props.className
	})
	return <Menu {...props} className={className} />
}


export default MenuComponent
