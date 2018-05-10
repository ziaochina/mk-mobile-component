import { Flex } from 'antd-mobile'

function FlexComponent(props) {
	let className = classNames({
		'mkm-flex': true,
		[props.className]: !!props.className
	})
	return <Flex {...props} className={className} />
}

FlexComponent.Item = Flex.Item

export default FlexComponent
