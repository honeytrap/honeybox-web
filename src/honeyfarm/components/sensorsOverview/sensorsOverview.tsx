import * as React from 'react';
import {
	Badge,
	Card,
	CardBody,
	CardHeader,
	Col,
	Pagination,
	PaginationItem,
	PaginationLink,
	Row,
	Table
} from 'reactstrap';

import { connect } from 'react-redux';
import { I18n, translate } from 'react-i18next';
import { compose } from 'redux';
import { AppScreen } from '../../../shared/components/appScreen/appScreen';

interface Props {

}

interface State {

}

class SensorsOverview extends React.Component<Props, State> {
	render() {
		return (
			<AppScreen>
				<Row>
					<Col>
						<Card>
							<CardHeader>
								<i className="fa fa-align-justify"></i> Sensors
							</CardHeader>
							<CardBody>
								<Table hover bordered striped responsive
									   size="sm">
									<thead>
									<tr>
										<th>Status</th>
										<th>Sensor</th>
										<th>First seen</th>
										<th>IP</th>
										<th>Services</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>
											<span
												className="badge badge-success">Online</span>
										</td>
										<td>Sensor01</td>
										<td>2012/01/01</td>
										<td>1.2.3.4</td>
										<td>
											<span
												className="badge badge-info">smtp</span>&nbsp;
											<span
												className="badge badge-info">http</span>
										</td>
									</tr>
									</tbody>
								</Table>
								<nav>
									<Pagination>
										<PaginationItem><PaginationLink previous
																		tag="button">Prev</PaginationLink></PaginationItem>
										<PaginationItem active>
											<PaginationLink
												tag="button">1</PaginationLink>
										</PaginationItem>
										<PaginationItem><PaginationLink
											tag="button">2</PaginationLink></PaginationItem>
										<PaginationItem><PaginationLink
											tag="button">3</PaginationLink></PaginationItem>
										<PaginationItem><PaginationLink
											tag="button">4</PaginationLink></PaginationItem>
										<PaginationItem><PaginationLink next
																		tag="button">Next</PaginationLink></PaginationItem>
									</Pagination>
								</nav>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</AppScreen>
		)
	}
}

export default connect()(SensorsOverview);