import io from 'socket.io-client';
import Vue from 'vue';
import moment from 'moment';

var socketTimer = io('/timer', {path: '/socketTest'});
var socketChat = io.connect('/chat', {
    path: '/socketTest',
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 10000,
    reconnectionDelayMax: 10,
    query: {clientTime: moment().format('YYYY/MM/DD HH:mm:ss')}
});
var vmHub = new Vue();
console.log(io);
console.log(socketChat);

socketChat.on('message', function (data) {
    vmHub.$emit('appendMsgList', data);
});

new Vue({
    el: '#chatApp',
    created() {
        vmHub.$on('appendMsgList', (data) => {
            this.receiveMsg(data);
        });
    },
    mounted() {
        console.log("room set");
        socketChat.emit('room', {room: "chat"});
    },
    data: {
        userName: '',
        message: '',
        messageList: []
    },
    methods: {
        sendMsg() {
            socketChat.emit('message', {name: this.userName, msg: this.message});
            this.message = '';
        },
        receiveMsg(data) {
            var ls_userName = data.name || "anonymous";
            var ls_message = data.msg;

            this.messageList.push({name: ls_userName, msg: ls_message});
        }
    }
});

socketTimer.on('data', function (data) {
    // console.log(data.date);
});

