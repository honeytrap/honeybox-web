import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { replace, push } from 'react-router-redux';
import { LocalForm, Errors, Control, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {I18n, translate} from 'react-i18next';
import { compose, Dispatch } from 'redux';

import Modal from 'react-bootstrap/lib/Modal';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { AppState } from '../../rootReducer';

import {ResizableBox} from 'react-resizable';
import * as throttle from 'lodash.throttle';

import { XTerm, Terminal } from './xterm';

interface Props {
	dispatch: Dispatch<any>;
	history;
	location;
	t;
	i18n;
}

interface Refs {
    [k: string]: any
    xterm: XTerm;
}

interface State {
}

class Sandbox extends React.Component<any, State> {
    private xterm: React.RefObject<XTerm>;

    refs: Refs

    state: State = {
    };

    constructor(props?: Props, context?: any) {
        super(props);

        this.xterm = React.createRef();
    }

    componentDidMount() {
        const {i18n} = this.props;

    }

    componentWillUnmount() {
        // this.refs.mainDeviceComponent.componentWillUnmount();
    }

    throttleConsoleResize = throttle((size?) => {
        this.xterm && this.xterm.current.fit();
    }, 50)

    render() {
        const { t, i18n } = this.props;

        return (
            <I18n ns="translations">
                {
                (t, {i18n}) => (
                <div>
                    <ResizableBox width={200} height={200} onResize={this.throttleConsoleResize} style={{
                        overflow: 'hidden'
                        }} >

                        <button onClick={ () => {
                            var socket = new WebSocket('ws://172.16.84.198:8089/console');
                            this.xterm.current.terminadoAttach(socket, true, true);

                            runFakeTerminal(this.xterm.current);
                            }}>Connect</button>
                        <XTerm ref={ this.xterm }
                               addons={ [ 'fit', 'fullscreen', 'search', 'terminado', 'attach' ] }
                               style={{
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                        }}

                        />
                    </ResizableBox>
                    <div>Syscalls</div>
                    <div>Network</div>
                    <div>Processes</div>
                </div>
                )
				        }
			      </I18n>
		    );
	  }
}

const select = (state: AppState) => ({});

export default connect(select)(Sandbox);

function runFakeTerminal(xterm: XTerm) {
    const term: Terminal = xterm.getTerminal();
    var shellprompt = '$ ';

    function prompt () {
        xterm.write('\r\n' + shellprompt);
    };
    xterm.writeln('Welcome to xterm.js');
    xterm.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
    xterm.writeln('Type some keys and commands to play around.');
    xterm.writeln('');
    prompt();

    term.on('key', function (key, ev) {
        var printable = (
            !ev.altKey && !ev.ctrlKey && !ev.metaKey
        );

        if (ev.keyCode == 13) {
            prompt();
            // } else if (ev.keyCode == 8) {
            //   // Do not delete the prompt
            //   if (term['x'] > 2) {
            //     xterm.write('\b \b');
            //   }
        } else if (printable) {
            xterm.write(key);
        }
    });

    term.on('paste', function (data, ev) {
        xterm.write(data);
    });
}
