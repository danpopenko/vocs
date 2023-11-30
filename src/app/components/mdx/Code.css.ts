import { style } from '@vanilla-extract/css'

import {
  borderRadiusVars,
  fontSizeVars,
  semanticColorVars,
  spaceVars,
} from '../../styles/vars.css.js'
import { root as Anchor } from './Anchor.css.js'
import { root as Pre } from './Pre.css.js'

export const root = style({
  selectors: {
    [`:not(${Pre})>&`]: {
      backgroundColor: semanticColorVars.codeInlineBackground,
      border: `1px solid ${semanticColorVars.codeInlineBorder}`,
      borderRadius: borderRadiusVars['4'],
      color: semanticColorVars.codeInlineText,
      fontSize: fontSizeVars.code,
      padding: `${spaceVars['3']} ${spaceVars['6']}`,
    },
    [`${Anchor}>&`]: {
      color: semanticColorVars.link,
      textDecoration: 'underline',
      textUnderlineOffset: spaceVars['2'],
    },
    [`${Anchor}:hover>&`]: {
      color: semanticColorVars.linkHover,
    },
  },
})
