Socket based server for receiving and broadcasting events.
It was used to broadcast redux action.

```js
...
import Broadcaster from 'redux-server-broadcaster';

const broadcaster = new Broadcaster();

broadcaster.setNewConnectionListener((connection) => {
  // optional place for additional logic for handling new connection
});
broadcaster.setNewActionListener((connection, data) => {
  // optional place for additional logic for handling new action, e.g. all actions could be saved, and later broadcasted to any client (setNewConnectionListener)
});

broadcaster.listen(3001);

...

```