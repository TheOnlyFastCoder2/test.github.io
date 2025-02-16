interface InfoCellProps {
	title: string,
	value: number | string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function ({ title, value, Icon }: InfoCellProps) {
	return (
		<h4 className='Post_info-cell'>
			<span className='Post_info-icon'>
				<Icon /> {title}
			</span>
			<span className='Post_info-value'>
				{value}
			</span>
		</h4>
	)
}