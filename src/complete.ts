import { completeFromList, CompletionSource } from '@codemirror/autocomplete';

export function autoCompletionList(): CompletionSource {
  return completeFromList(autocompletions());
}

const autocompletions = () => {
  return functionNames.map((functionName) => ({
    label: `$${functionName}`,
    type: 'function',
  }));
};

const functionNames = [
  'sum',
  'count',
  'max',
  'min',
  'average',
  'string',
  'substring',
  'substringBefore',
  'substringAfter',
  'lowercase',
  'uppercase',
  'length',
  'trim',
  'pad',
  'match',
  'contains',
  'replace',
  'split',
  'join',
  'formatNumber',
  'formatBase',
  'number',
  'floor',
  'ceil',
  'round',
  'abs',
  'sqrt',
  'power',
  'random',
  'boolean',
  'not',
  'map',
  'zip',
  'filter',
  'single',
  'foldLeft',
  'sift',
  'keys',
  'lookup',
  'append',
  'exists',
  'spread',
  'merge',
  'reverse',
  'each',
  'error',
  'assert',
  'type',
  'sort',
  'shuffle',
  'distinct',
  'base64encode',
  'base64decode',
  'encodeUrlComponent',
  'encodeUrl',
  'decodeUrlComponent',
  'decodeUrl',
];
