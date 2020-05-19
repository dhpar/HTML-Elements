# Styles
## Structure
The CSS structure is heavily based on ITCSS, created by [Harry Rowless](https://csswizardry.com/)

## Conventions and naming
### CSS Variables
The CSS variables used in this project follow this naming conventions:

#### Global CSS variables
`--glo--[conceptCamelCase]` &rarr; ie: `--glo--boxShadow`

#### Local CSS variables
`--loc--[BEMSelector]--[CSSProperty]` &rarr; ie: `--loc--component__block--backgroundColor`

### CSS selector
The Selectors in this project follow BEM conventions:
`--[block]__[element]--[modifier]` &rarr; ie: `--component__explanation--alternate`