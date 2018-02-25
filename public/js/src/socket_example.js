import io from 'socket.io-client';
import Vue from 'vue';

var socketTimer = io('/timer');
var socketChat = io.connect('/chat');
var vmHub = new Vue();

socketChat.on('message', function (data) {
    vmHub.$emit('appendMsgList', data);
});

new Vue({
    el: '#chatApp',
    created() {
        vmHub.$on('appendMsgList', (data) => {
            console.log(data);
            this.receiveMsg(data);
        });
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
        receiveMsg(data){
            var ls_userName = data.name || "anonymous";
            var ls_message = data.msg;

            this.messageList.push({name:ls_userName, msg: ls_message});
        }
    }
});

socketTimer.on('data', function(data){
    console.log(data.date);
});

