# Nverly

Modern Next.js landing website for `nverly.com`, a digital goods marketplace for
gift cards, game top-ups, digital codes, vouchers, gaming products, and digital
rewards.

## Pages

- Home
- Contact
- Terms of Service
- Privacy Policy
- Refund Policy

## Backend

The contact form posts to `POST /api/contact`.

By default, the route validates the request and logs it on the server. To forward
messages to another system, set:

```bash
CONTACT_WEBHOOK_URL="https://your-webhook.example.com/contact"
```

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`, or use another port if 3000 is busy:

```bash
npm run dev -- --port 3001
```

## Verification

```bash
npm run lint
npm run build
```
