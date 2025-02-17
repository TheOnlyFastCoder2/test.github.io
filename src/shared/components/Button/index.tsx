import './styles.css'

export default function (props: React.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button className="Button" {...props} />
	)
};