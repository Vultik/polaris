import React from 'react';
import type {Meta} from '@storybook/react';
import {BlockStack, LegacyCard, SkeletonTabs} from '@shopify/polaris';

export default {
  component: SkeletonTabs,
} as Meta<typeof SkeletonTabs>;

export function All() {
  return (
    <BlockStack gap="500">
      <Default />
      <WithACustomCount />
      <InsideOfACard />
      <InsideOfACardFitted />
    </BlockStack>
  );
}

export function Default() {
  return <SkeletonTabs />;
}

export function WithACustomCount() {
  return <SkeletonTabs count={4} />;
}

export function InsideOfACard() {
  return (
    <LegacyCard>
      <div>
        <SkeletonTabs count={6} />
        <LegacyCard.Section title="TabName">
          <p>Tab X selected</p>
        </LegacyCard.Section>
      </div>
    </LegacyCard>
  );
}

export function InsideOfACardFitted() {
  return (
    <LegacyCard>
      <div>
        <SkeletonTabs fitted />
        <LegacyCard.Section title="TabName">
          <p>Tab X selected</p>
        </LegacyCard.Section>
      </div>
    </LegacyCard>
  );
}
