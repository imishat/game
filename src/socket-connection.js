import { io } from "socket.io-client";

const WEB_SOCKET_EVENT_NAME = "$$_WEBSOCKET_EVENT_7263_$$";
const webSocketUrl = 'http://localhost:8000';

export const socketConnection = io(webSocketUrl, {
  autoConnect: true,
});

const randomId = Math.random() * 1000;

export const getRandomId = () => {
  return randomId;
}

/**
 * @param {Object} payload 
 */
export const sendPayload = payload => {
  if (!payload || typeof payload !== 'object') { return; }

  socketConnection.emit(WEB_SOCKET_EVENT_NAME, payload);
};

/**
 * @param {Function} onPayloadReceive 
 */
export const addWebsocketEventListener = onPayloadReceive => {
  if (typeof onPayloadReceive !== 'function') { return; }

  socketConnection.on(WEB_SOCKET_EVENT_NAME, async payload => {
    try {
      await onPayloadReceive(payload);
    } catch (error) {
      console.error('An error occurred during payload receive callback execution.', error);
    }
  });
};
