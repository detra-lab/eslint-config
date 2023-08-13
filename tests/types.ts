interface TestDeclarationMerge {
  x: string
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface TestDeclarationMerge {
  y: string
}

type TestExportImport = string

export type { TestDeclarationMerge, TestExportImport }
