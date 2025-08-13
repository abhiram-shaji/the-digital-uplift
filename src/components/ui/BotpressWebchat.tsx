'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import type { Configuration } from '@botpress/webchat';

// Load Botpress widgets only on the client
const Webchat = dynamic(() => import('@botpress/webchat').then(m => m.Webchat), { ssr: false });
const Fab = dynamic(() => import('@botpress/webchat').then(m => m.Fab), { ssr: false });

const clientId = 'bbd2623c-885d-43ea-be09-3622056ccc0c';

const configuration: Configuration = {
  color: '#000',
};

export default function BotpressWebchat() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Fab onClick={() => setOpen(v => !v)} />
      {open && <Webchat clientId={clientId} configuration={configuration} />}
    </>
  );
}
