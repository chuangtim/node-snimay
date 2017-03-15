# node-snimay

## Example

[https://snimay.herokuapp.com/](https://snimay.herokuapp.com/)

## Quick Start Install

you’ll need **Node.js v6 LTS**

1. git clone https://github.com/zxj963577494/node-snimay.git
1. cd node-snimay
1. npm install
1. Start node-snimay
    - Local environment: `npm run dev`
    - On a server: `npm start`
1. Web Application Init
    - Local environment: `http://localhost:4000/admin/install`
    - On a server: `http://localhost:80/admin/install`

## Usage

### ```config/default.js``` Or ```config/production.js```

```
  qiniu: {
    ACCESS_KEY: 'xxxxxxx',
    SECRET_KEY: 'xxxxxxx',
    BUCKET: 'xxxxxxx',
    UPLOAD_ORIGIN: 'http://xxxxxxx.u.qiniudn.com/',
    BROWSE_ORIGIN: 'xxxxxxx'
  },
```



