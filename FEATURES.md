# Features and API Map

## Panel Availability

- **Admin panel:** Not found in this codebase (no `/admin` route or admin dashboard pages).
- **User panel:** Traveler user flow exists under `/traveler` (landing, register, login, pricing, checkout).
- **Second public experience:** Approve Lux flow exists under `/approvedlux` (landing, pricing, checkout path via traveler approve).

## Main Routes

- `/` - Main marketing home
- `/traveler` - Traveler landing
- `/traveler/register` - User registration
- `/traveler/login` - User login (Arrivia login flow)
- `/traveler/pricing` - Traveler pricing plans and FAQ
- `/traveler/checkout?planId=...` - Traveler checkout
- `/traveler/approve` - Approve experience landing
- `/traveler/approve/pricing` - Approve pricing
- `/traveler/approve/checkout?planId=...` - Approve checkout
- `/approvedlux` - Alternate brand landing
- `/approvedlux/pricing` - Alternate brand pricing
- `/blog` - Blog listing
- `/blog/[slug]` - Single blog
- `/sitemap.xml` - Generated sitemap

## API Endpoints Used

### Backend APIs (external)

Base URL used by RTK Query: `https://backend.approvedexperiences.com` (or `NEXT_PUBLIC_API_BASE_URL` if set).

- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/members/create-arrivia-member`
- `POST /api/orders/`
- `GET /api/members/profile`
- `GET /api/membership/tiers/`
- `GET /api/features/`
- `POST /api/auth/arrivia-login`
- `POST /api/payments/create-intent`
- `GET /api/articles`
- `GET /api/articles?page=...&limit=...`
- `GET /api/articles/slug/:slug`
- `GET /api/articles/slug/:slug/related?limit=3`

### Local Next.js API routes (inside this project)

- `POST /api/save-to-csv` -> `app/api/save-to-csv/route.ts`
- `POST /api/send-registration-email` -> `app/api/send-registration-email/route.ts`

## Page/Feature -> API Mapping

- **Traveler Register** (`/traveler/register`)
  - `POST /api/auth/register` (via RTK Query `useRegisterMutation`)
- **Traveler Login** (`/traveler/login`)
  - `POST https://backend.approvedexperiences.com/api/auth/arrivia-login`
- **Traveler Pricing** (`/traveler/pricing`)
  - `GET /api/members/profile` (when token exists)
- **Traveler Home** (`/traveler`)
  - `GET /api/membership/tiers/`
- **Traveler Checkout** (`/traveler/checkout`)
  - `GET /api/members/profile`
  - `POST https://backend.approvedexperiences.com/api/payments/create-intent`
  - `POST /api/payments/paypal/create-order` (called but local route not found here)
  - `POST /api/payments/paypal/capture-and-create-member` (called but local route not found here)
  - `POST /api/payments/paypal/capture-order` (called but local route not found here)
- **Approve Checkout** (`/traveler/approve/checkout`)
  - `GET /api/members/profile`
  - `POST https://backend.approvedexperiences.com/api/payments/create-intent`
  - `POST /api/payments/paypal/create-order` (called but local route not found here)
  - `POST /api/payments/paypal/capture-and-create-member` (called but local route not found here)
  - `POST /api/payments/paypal/capture-order` (called but local route not found here)
  - `POST /api/save-to-csv`
  - `POST /api/send-registration-email`
- **Blog pages** (`/blog`, `/blog/[slug]`)
  - `GET https://backend.approvedexperiences.com/api/articles...`
- **Sitemap route** (`/sitemap.xml`)
  - `GET https://backend.approvedexperiences.com/api/articles`

## How to See Which API Is Used Where

Run these from project root:

```bash
rg "fetch\\(|/api/|https://backend\\.approvedexperiences\\.com" app components lib redux utils
```

For only local Next API usage:

```bash
rg "'/api/|\"/api/" app components lib redux utils
```

For RTK Query endpoints:

```bash
rg "createApi|endpoints:|query:\\s*\\(" redux/services
```
