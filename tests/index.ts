/**
 * This is a simple TypeScript file on which `eslint` with generated config is ran
 * just to test that `@detra-lab/eslint-config` is formally correct
 */
import * as path from 'path'
import type { TestExportImport } from './types'

export function test(_unused: unknown, is = 'is'): TestExportImport {
  const [_, a, simple, Test] = ['not', 'a', 'simple', 'test']

  return path.join('this', is, a, simple, Test)
}
