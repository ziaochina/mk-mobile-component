import { WingBlank } from 'antd-mobile'

function WingBlankComponent(props) {
	let className = classNames({
		'mkm-wing-blank': true,
		[props.className]: !!props.className
	})
	return <WingBlank {...props} className={className} />
}

export default WingBlankComponent
