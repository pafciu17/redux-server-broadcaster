import Socket from 'socket.io';

class Broadcaster {
  constructor() {
    this.socket = Socket();
    this.socket.on('connection', this._connectionHandler.bind(this));
    this.listeners = {};
  }

  listen(port = 3000) {
    this.socket.listen(port);
  }

  setNewConnectionListener(listener) {
    this._setListener('new_connection', listener);
  }

  setNewActionListener(listener) {
    this._setListener('new_action', listener);
  }

  _setListener(event, listener) {
    this.listeners[event] = listener.bind(this);
  }

  _handleListener(event, args) {
    if (this.listeners[event]) {
      this.listeners[event](...args);
    }
  }

  _connectionHandler(connection) {
    this._handleListener('new_connection', [connection]);
    connection.on('action', (data) => {
      this._actionHandler(connection, data);
    });
  }

  _actionHandler(connection, data) {
    this._handleListener('new_action', [connection, data]);
    connection.broadcast.emit('action', data);
  }
}

export default Broadcaster;