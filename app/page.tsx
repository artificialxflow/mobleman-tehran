'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import Dashboard from '@/components/Dashboard';

export default function HomePage() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}