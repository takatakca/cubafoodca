CREATE TABLE public.donation_interest (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL DEFAULT '',
  email text,
  phone text,
  whatsapp text,
  country text,
  contribution_category text NOT NULL DEFAULT 'GENERAL',
  amount_interest text,
  currency text NOT NULL DEFAULT 'CAD',
  recurring_interest boolean NOT NULL DEFAULT false,
  organization text,
  message text,
  source_page text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'NEW'
);

GRANT INSERT ON public.donation_interest TO anon, authenticated;
GRANT ALL ON public.donation_interest TO service_role;

ALTER TABLE public.donation_interest ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register contribution interest"
ON public.donation_interest FOR INSERT TO anon, authenticated WITH CHECK (true);