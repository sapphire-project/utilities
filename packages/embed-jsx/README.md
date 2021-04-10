<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire.png)

# @sapphire/embed-jsx

[![GitHub](https://img.shields.io/github/license/sapphire-project/utilities)](https://github.com/sapphire-project/utilities/blob/main/LICENSE.md)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/sapphire-project/utilities.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sapphire-project/utilities/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/sapphire-project/utilities.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/sapphire-project/utilities/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/sapphire-project/utilities/badge.svg?branch=main)](https://coveralls.io/github/sapphire-project/utilities?branch=main)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/utilities?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/utilities)
[![npm](https://img.shields.io/npm/v/@sapphire/utilities?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/utilities)
[![Depfu](https://badges.depfu.com/badges/ec42ff3d6bae55eee1de4749960852b3/count.svg)](https://depfu.com/github/sapphire-project/utilities?project_id=15195)

</div>

## Description

An easier way to make embeds, with the power of JSX!

## Features

-   Written in TypeScript
-   Fully tested (soon).

## Installation

```sh
yarn add @sapphire/embed-jsx
```

## Usage

In your tsconfig.json, add

```json
{
	"compilerOptions": {
		"jsx": "react",
		"jsxFactory": "EmbedJsx.make"
	}
}
```
and in any tsx file, import the EmbedJsx namespace as you would if you were using React

```ts
import { EmbedJsx } from '@sapphire/embed-jsx';
```

Note: as of now the package is currently not fully typed, so to get around any compiler errors you may have to add
```json
"noImplicitAny": false
```
to your tsconfig.json

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://sapphire-project.github.io/utilities/modules/_sapphire_embed_jsx.html)

## Buy us some doughnuts

Sapphire Project is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                                             Address                                              |
| :-------------: | :----------------------------------------------------------------------------------------------: |
| Open Collective |                    [Click Here](https://opencollective.com/sapphire-project)                     |
|      Ko-fi      |                         [Click Here](https://ko-fi.com/sapphireproject)                          |
|     Patreon     |                      [Click Here](https://www.patreon.com/sapphire_project)                      |
|     PayPal      | [Click Here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SP738BQTQQYZY) |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):