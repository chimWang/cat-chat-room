import IO from 'socket.io-client';

const options = {
    // reconnectionDelay: 1000,
};
const socket = new IO('http://localhost:3000', options);
// const socket = new IO('http://47.100.112.48:3000', options);

export default socket;
