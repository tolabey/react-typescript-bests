import * as React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
// import Menu from './components/menu';
// import GenericTypeExample from './components/genericTypeExample/genericTypeExample';

const Menu = React.lazy(() => import('./components/menu'));
const GenericTypeExample = React.lazy(() => import('./components/genericTypeExample/genericTypeExample'));

export default class Router extends React.PureComponent {
    render() {
        console.log("2second", this.props)
        return (
            <BrowserRouter>
                <React.Suspense fallback={<div style={{}}>Mustafa</div>}>
                    <Switch>
                        <Route exact path={'/'} component={Menu}/>
                        <Route path={'/genericTypeExample'} component={GenericTypeExample} />
                        <Redirect from={'*'} to={'/'} />
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        );
    }
}