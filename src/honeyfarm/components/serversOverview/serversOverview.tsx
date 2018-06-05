import * as React from 'react';
import {
	Badge,
	Card,
	CardBody,
	CardHeader,
	Col,
	Row,
	Table
} from 'reactstrap';

import { connect, Dispatch } from 'react-redux';
import { I18n, translate } from 'react-i18next';
import { AppState } from '../../../rootReducer';
import { ObjectMap } from '../../../shared/interfaces/objectMap';
import { Server } from '../../interfaces/server';
import { AppScreenBasic } from '../../../shared/components/appScreenBasic/appScreenBasic';
import { PaginationNav } from '../../../shared/components/pagination/paginationNav';
import { map } from 'lodash';
import { RequestServerList } from '../../honeyfarmActions';
import * as moment from 'moment';

interface Props {
	servers: ObjectMap<Server>;
	dispatch: Dispatch<any>;
}

class ServersOverview extends React.Component<Props> {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(new RequestServerList({ page: 1, perPage: 20 }));
	}

	render() {
		const { servers } = this.props;

		return (
			<AppScreenBasic title="Servers">
				<Table hover bordered striped responsive
					   size="sm">
					<thead>
					<tr>
						<th>Status</th>
						<th>Server</th>
						<th>First seen</th>
						<th>IP</th>
						<th>Services</th>
					</tr>
					</thead>
					<tbody>
						{map(servers, server =>
							<tr key={server.serverId}>
								<td>
									{server.status === 'online'
										? <span className="badge badge-success">Online</span>
										: <span className="badge badge-danger">Offline</span>}
								</td>
								<td>{server.name}</td>
								<td>{moment(server.firstSeen).format('MMMM Do YYYY, h:mm:ss a')}</td>
								<td>{server.ip}</td>
								<td>
									{server.services.map(service =>
										<span className="badge badge-info" key={service}>{service}</span>
									)}
								</td>
							</tr>
						)}
					</tbody>
				</Table>
				<PaginationNav />
			</AppScreenBasic>
		);
	}
}

const select = (state: AppState) => ({
	servers: state.honeyfarm.servers
});

export default connect(select)(ServersOverview);
