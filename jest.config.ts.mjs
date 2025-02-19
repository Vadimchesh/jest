/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import baseConfig from './jest.config.mjs';

/** @type {import('jest').Config} */
export default {
  projects: [
    {
      displayName: {
        color: 'blue',
        name: 'ts-integration',
      },
      modulePathIgnorePatterns: baseConfig.modulePathIgnorePatterns,
      roots: ['<rootDir>/e2e/__tests__'],
      testMatch: ['<rootDir>/e2e/__tests__/ts*'],
    },
    {
      displayName: {
        color: 'blue',
        name: 'type-tests',
      },
      modulePathIgnorePatterns: baseConfig.modulePathIgnorePatterns,
      roots: ['<rootDir>/packages'],
      runner: 'jest-runner-tsd',
      testMatch: [
        '**/packages/jest-reporters/__typetests__/jest-reporters.test.ts',
        '**/packages/jest-resolve/__typetests__/resolver.test.ts',
        '**/packages/jest-types/__typetests__/each.test.ts',
      ],
    },
  ],
  reporters: ['default', 'github-actions'],
};
