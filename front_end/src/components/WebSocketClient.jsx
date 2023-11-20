import React, { useEffect } from 'react';

function MyWebSocketComponent() {
  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket('ws://localhost:8080'); // Replace with your server's WebSocket URL

    // WebSocket event listeners
    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      const message = event.data;
      // Handle incoming WebSocket messages here
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Cleanup: Close the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  // Rest of your component code
  return <div>WebSocket Client</div>;
}

export default MyWebSocketComponent;
