// first action
$scope.init = function () {
    RETRY_COUNT = 0;
    let u = SERVER_URL + '/?token=' + authenticationToken.getToken();
    if (SERVER_TYPE === 0) {
        u = SERVER_URL + '/?token=' + authenticationToken.getToken();
    } else if (SERVER_TYPE === 1) {
        let token = 'lh2kGdlFdEW3WeVkJgEGLMhuU4';
        u = 'http://127.0.0.1:3051/?token=' + localStorageService.get('userToken');
        
    }
    $rootScope.socket = io.connect(u, {
        secure: true,
        rejectUnauthorized: false,
        path: '/ws/socket.io'
    });

    initSocket();

};
// second action
