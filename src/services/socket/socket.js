import io from 'socket.io-client';
import { Alert, } from 'react-native';
import store from '../../redux/store';
import { signout, } from '../../redux/actions/LogInActions';

const BaseUrl = "wss://mytest.com"
const u = BaseUrl + '/?token=' + store.getState().LogInReducer.token;
let RETRY_COUNT = 0;
export function initSocket(props) {
    let isAuthed = false;
    console.log("mytoken", store.getState().LogInReducer.token)
    ////////////////////////////
    const socket = io(u, {
        transports: ['websocket'],
        secure: true,
        rejectUnauthorized: false,
        path: '/ws/socket.io'
    });
    ////////////////////////////
    socket.on("connect", () => {
        console.log("connect is true")
    })
    ////////////////////////////

    socket.on("connect_error", (error) => {
        console.log("connect_error is true :", error, error.code)
    })
    ////////////////////////////

    socket.on('err', async err => {

        //console.log('Err: ', err);

        switch (err.code) {
            // Server error happened, you can try again.
            case 'server_err':
                // Server error has happened during authentication process
                // You can try again and if failed multiple times, inform the application user.
                console.log("error is :", err)

                break;
            case 'auth_err':
                // Given token is invalid; Kick out the application user.
                //logOffUser();
                console.log("error is :", err)
                //RETRY_COUNT = 0;
                 await store.dispatch(signout())
                 props.navigation.replace('LogInStackNavigator')

                break;
        }

    });
    ////////////////////////////

    socket.on("auth", (res) => {
        if (res) {
            isAuthed = true;
            console.log("auth is true")

        } else {
            isAuthed = false;
            console.log("auth is false")
        }
    });
    ////////////////////////////

    socket.on('vehicle', (action, data) => {
        console.log(JSON.stringify(data))

        switch (action) {
            case "inserts":
                //console.log(action,data)
                break;
            case "insert":
                // console.log(action,data)
                break;
        }

    });
    ////////////////////////////

    socket.on('lastTrack', (track) => {
        console.log('last track :', track)
    });
    ////////////////////////////

    socket.on('disconnect', async (reason) => {
        console.log('disconnected :', reason);
        if (isAuthed) {

            if (RETRY_COUNT < 10) {
                RETRY_COUNT++;
                console.log('RETRY_COUNT :', RETRY_COUNT)
                socket.connect(u);

            } else {
                RETRY_COUNT = 0;
                await store.dispatch(signout())
                props.navigation.replace('LogInStackNavigator')

            }
        }
    });
    ////////////////////////////



}