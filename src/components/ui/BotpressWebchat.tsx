'use client';

import { useState } from 'react';
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';

const clientId = 'bbd2623c-885d-43ea-be09-3622056ccc0c';

const configuration: Configuration = {
  color: '#000',
};

const client = getClient({
  clientId,
});

export default function BotpressWebchat() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <WebchatProvider client={client} configuration={configuration}>
      <Fab onClick={toggleWebchat} />
      <div
        style={{
          display: isWebchatOpen ? 'block' : 'none',
        }}
      >
        <Webchat />
      </div>
    </WebchatProvider>
  );
}
