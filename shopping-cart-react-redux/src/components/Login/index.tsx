import * as React from 'react';
import { Button, Input, Image, Modal } from 'semantic-ui-react';

export const Login = ({ isFetching, user, loggedIn, handleChange, handleClick }) => (
    <React.Fragment>
        {!loggedIn ? 
            <Modal trigger={<Button data-test="btn-modal-login" primary>Entrar</Button>} size="tiny">
                <Modal.Header>Login</Modal.Header>
                <Modal.Content>
                    <Input placeholder="name" name="name" onChange={handleChange} />
                    <br />
                    <br />
                    <Input type="password" placeholder="password" name="password" onChange={handleChange} />
                    <br />
                    <br />
                    <Button data-test="btn-login" disabled={isFetching} loading={isFetching} primary onClick={handleClick}>Entrar</Button>
                </Modal.Content>
            </Modal>
            :
            <h1>{user}</h1>
        }
    </React.Fragment>
)