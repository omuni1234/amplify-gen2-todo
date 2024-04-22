"use client";

import React from 'react';
import config from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
    return null;
}