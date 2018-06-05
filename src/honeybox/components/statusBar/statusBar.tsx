import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../rootReducer';
import * as styles from './statusBar.css';

interface Props {
	connected: boolean;
}

class StatusBar extends React.Component<Props> {
	render() {
		const { connected } = this.props;

		return (
			<div className={styles.statusBar}>
				<div className={styles.connection}>
					<span className={styles.dot + ' ' + (connected ? styles.connected : styles.notConnected)} />
					<p className={styles.message}>{ connected ? 'Connected' : 'Not connected'}</p>
				</div>
			</div>
		)
	}
}

const select = (state: AppState) => ({
	connected: state.connection.connected
});

export default connect(select)(StatusBar);