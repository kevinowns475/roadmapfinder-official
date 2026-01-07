// Fix: Added React import to resolve "Cannot find namespace 'React'" error
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}