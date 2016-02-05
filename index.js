#!/usr/bin/env node
'use strict';

var pdc = require('pandoc-filter');

function mermaid(typ, val) {
  if (typ !== 'CodeBlock') {
    return null;
  }

  var cls = val[0][1];
  if (0 <= cls.indexOf('mermaid')) {
    return null;
  }

  var cnt = val[1];
  return pdc.Div([
    '',
    ['mermaid'],
    [],
  ], [
    pdc.Plain([
      pdc.Str(cnt),
    ]),
  ]);
}

pdc.toJSONFilter(mermaid);
