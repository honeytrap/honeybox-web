import Dashboard from './honeyfarm/components/dashboard/dashboard';
import Sandbox from './honeyfarm/components/sandbox';
import AgentsOverview from './honeyfarm/components/agentsOverview/agentsOverview';
import CollectorsOverview from './honeyfarm/components/collectorsOverview/collectorsOverview';
import AnalysersOverview from './honeyfarm/components/analysersOverview/analysersOverview';
import EventsOverview from './honeyfarm/components/eventsOverview/eventsOverview';
import AlertsOverview from './honeyfarm/components/alertsOverview/alertsOverview';
import ServersOverview from './honeyfarm/components/serversOverview/serversOverview';
import SensorsOverview from './honeyfarm/components/sensorsOverview/sensorsOverview';
import AttackersOverview from './honeyfarm/components/attackersOverview/attackersOverview';
import LoginForm from './authentication/components/loginForm/loginForm';
import SignUpForm from './authentication/components/signUpForm/signUpForm';

interface RouteConfig {
	path: string;
	exact: boolean;
	name: string;
	component: any;
}

export const authenticatedRoutes: RouteConfig[] = [
	{
		path: '/',
		exact: true,
		name: 'Home',
		component: Dashboard
	},
	{
		path: '/servers',
		exact: true,
		name: 'Servers',
		component: ServersOverview
	},
	{
		path: '/agents',
		exact: true,
		name: 'Agents',
		component: AgentsOverview
	},
	{
		path: '/collectors',
		exact: true,
		name: 'Collectors',
		component: CollectorsOverview
	},
	{
		path: '/analysers',
		exact: true,
		name: 'Analysers',
		component: AnalysersOverview
	},
	{
		path: '/alerts',
		exact: true,
		name: 'alerts',
		component: AlertsOverview
	},
	{
		path: '/events',
		exact: true,
		name: 'Events',
		component: EventsOverview
	},
	{
		path: '/sensors',
		exact: true,
		name: 'Sensors',
		component: SensorsOverview
	},
	{
		path: '/attackers',
		exact: true,
		name: 'Attackers',
		component: AttackersOverview
	},
];

export const notAuthenticatedRoutes: RouteConfig[] = [
	{
		path: '/login',
		exact: true,
		name: 'Login',
		component: LoginForm
	},
	{
		path: '/sign-up',
		exact: true,
		name: 'Sign up',
		component: SignUpForm
	},
	{
		path: '/sandbox',
		exact: true,
		name: 'Sandbox',
		component: Sandbox
	},
];

export const sharedRoutes: RouteConfig[] = [

];

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// export const routes: Route[] = [
//   { path: '/dashboard', name: 'Dashboard', component: Dashboard },
//   { path: '/theme', exact: true, name: 'Theme', component: Colors },
//   { path: '/theme/colors', name: 'Colors', component: Colors },
//   { path: '/theme/typography', name: 'Typography', component: Typography },
//   { path: '/base', exact: true, name: 'Base', component: Cards },
//   { path: '/base/cards', name: 'Cards', component: Cards },
//   { path: '/base/forms', name: 'Forms', component: Forms },
//   { path: '/base/switches', name: 'Switches', component: Switches },
//   { path: '/base/tables', name: 'Tables', component: Tables },
//   { path: '/base/tabs', name: 'Tabs', component: Tabs },
//   { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
//   { path: '/base/carousels', name: 'Carousels', component: Carousels },
//   { path: '/base/collapses', name: 'Collapses', component: Collapses },
//   { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
//   { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
//   { path: '/base/list-groups', name: 'ListGroups', component: ListGroups },
//   { path: '/base/navbars', name: 'Navbars', component: Navbars },
//   { path: '/base/navs', name: 'Navs', component: Navs },
//   { path: '/base/paginations', name: 'Paginations', component: Paginations },
//   { path: '/base/popovers', name: 'Popovers', component: Popovers },
//   { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
//   { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
//   { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
//   { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
//   { path: '/buttons/button-dropdowns', name: 'ButtonDropdowns', component: ButtonDropdowns },
//   { path: '/buttons/button-groups', name: 'ButtonGroups', component: ButtonGroups },
//   { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
//   { path: '/icons', exact: true, name: 'Icons', component: Flags },
//   { path: '/icons/flags', name: 'Flags', component: Flags },
//   { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
//   { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
//   { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
//   { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
//   { path: '/notifications/badges', name: 'Badges', component: Badges },
//   { path: '/notifications/modals', name: 'Modals', component: Modals },
//   { path: '/widgets', name: 'Widgets', component: Widgets },
//   { path: '/charts', name: 'Charts', component: Charts }
// ];
