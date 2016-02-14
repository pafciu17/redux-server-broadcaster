Socket based server for receiving and broadcasting events.
It was used to broadcast redux action.

```js
...
import Broadcaster from 'redux-server-broadcaster';

const broadcaster = new Broadcaster();

broadcaster.setNewConnectionListener((connection) => {
  // optional place for handling additional 'new connection' logic
});
broadcaster.setNewActionListener((connection, data) => {
  // optional place for handling additional incoming action logic
  // e.g. all actions could be saved, and later broadcasted to any new client (within setNewConnectionListener)
});

broadcaster.listen(3001);

...

```