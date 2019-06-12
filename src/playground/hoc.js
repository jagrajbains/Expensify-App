import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is :- {props.info}</p>
    </div>
);

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin ? 
            <div>
                    <p>This is private info, please don't share.</p>
                    <WrappedComponent {...props} />
            </div>
                : <p>You are not authorized</p> }
            
        </div>
    )
}

const AdminInfo = WithAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => ( 
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/>
            :
            <p>You are not authorized!</p>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details.' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details.' />, document.getElementById('app'));