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

class AnalysersOverview extends React.Component {
	render() {
		return (
			<AppScreen>
				<Row>
					<Col>
						<Card>
							<CardHeader>
								<i className="fa fa-align-justify"></i> Analysers
							</CardHeader>
							<CardBody>
								<Table hover bordered striped responsive
									   size="sm">
									<thead>
									<tr>
										<th>Status</th>
										<th>Analyser</th>
										<th>Input</th>
										<th>Output</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>
											<span
												className="badge badge-success">Online</span>
										</td>
										<td>Geolocation (country)</td>
										<td>Honeytrap</td>
										<td>Honeytrap-1</td>
									</tr>
									<tr>
										<td>
											<span
												className="badge badge-success">Online</span>
										</td>
										<td>Elasticsearch storer</td>
										<td>Honeytrap-1</td>
										<td></td>
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
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {

	};
}

export default connect()(AnalysersOverview)
