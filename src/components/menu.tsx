import * as React from 'react';
import {Link} from "react-router-dom";

export default class Menu extends React.PureComponent<{}> {


    render() {
        console.log("this.props", this.props.history)

        return (
            <div className="menu" style={{ backgroundColor: 'red', width: '100vw', height: '100vh' }}>
                <Link to={'genericTypeExample'}>{'genericTypeExample'}</Link>

            </div>
        )
    }
}