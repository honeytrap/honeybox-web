import * as React from 'react';
import * as styles from './footerComponent.css';

interface Props {
	children: any;
	title: string;
	headerContent?: any;
}

class FooterComponent extends React.Component<Props> {
	render() {
		const { children, title, headerContent } = this.props;

		return (
			<div className={styles.footerComponent}>
				<h2 className={styles.header}>
					<span className={styles.title}>{title}</span>
					{headerContent ? headerContent :  null}
				</h2>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		);
	}
}

export default FooterComponent;