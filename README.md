<div align="center" width="150px">
  <img style="width: 150px; height: auto;" src="https://raw.githubusercontent.com/TobeyTG/strapi-plugin-matomo/master/assets/logo.png" alt="Logo - Strapi Matomo plugin" />
</div>
<div align="center">
  <h1>Strapi v5 - Matomo plugin</h1>
  <p>Add your Matomo analytics dashboard to Strapi</p>
    <a href="https://www.npmjs.org/package/strapi-plugin-matomo">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/tobeytg/strapi-plugin-matomo?label=npm&logo=npm">
  </a>
   <a href="https://www.npmjs.com/package/strapi-plugin-matomo">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-matomo.svg" alt="Monthly download on NPM" />
  </a>
</div>

---

A plugin for [Strapi](https://github.com/strapi/strapi) that embeds [Matomo](https://matomo.org/) analytics dashboards.

## Supported Strapi version

Currently only Strapi v5 is supported.

## Installation

With `npm`

```bash
npm install strapi-plugin-matomo
```

With `yarn`

```bash
yarn add strapi-plugin-matomo
```

In the `config/plugins.ts` file add:

```js
module.exports = ({ env }) => ({
  // ...other plugins
  matomo: {
    config: {
      widgetURL: env('MATOMO_WIDGET_URL'),
    },
  },
});
```

You can get the widgetURL in Matomo by going to \_Site > Settings > Platform > Widgets
It looks something like this:

```text
https://your-matomo-instance.com/index.php?module=Widgetize&action=iframe&widget=1&idSite=1&period=day&date=today&token_auth=abc123
```

☝️ This link allows you to embed Matomo reports on other websites or share them publicly, depending on permissions.

☝️ If you're using the `strapi::security` middleware with CSP enabled, make sure
to allow `your-matomo-instance.com` as a `frame-src`. Your `config/middlewares.ts` should look something like:

```js
 {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "frame-src": ["https://your-matomo-instance.com"],
        ...
```

## 📝 License

[MIT License](LICENSE.md)

Made by [TobeyTG](https://tobeytg.de/) ✌️
