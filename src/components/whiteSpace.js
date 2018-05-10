import { WhiteSpace } from 'antd-mobile'

function WhiteSpaceComponent(props) {
	let className = classNames({
		'mkm-white-space': true,
		[props.className]: !!props.className
	})
	return <WhiteSpace {...props} className={className} />
}

export default WhiteSpaceComponent
