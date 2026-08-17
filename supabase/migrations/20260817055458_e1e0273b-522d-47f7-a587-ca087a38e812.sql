CREATE TABLE public.participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  first_name text NOT NULL,
  last_name text NOT NULL DEFAULT '',
  country text NOT NULL DEFAULT '',
  province text,
  municipality text,
  city text,
  phone text,
  whatsapp text,
  email text,
  preferred_language text NOT NULL DEFAULT 'es',
  participant_type text NOT NULL DEFAULT 'general',
  profession text,
  skills text,
  agricultural_experience text,
  machinery_experience text,
  driver_license text,
  organization text,
  availability text,
  equipment_offered text,
  support_requested text,
  contribution_types text[] NOT NULL DEFAULT '{}',
  message text,
  source_page text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'NEW'
);
GRANT INSERT ON public.participants TO anon, authenticated;
GRANT ALL ON public.participants TO service_role;
ALTER TABLE public.participants ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a participation record" ON public.participants FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.partner_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  company text NOT NULL DEFAULT '',
  contact_name text NOT NULL DEFAULT '',
  country text,
  province text,
  city text,
  website text,
  email text,
  phone text,
  whatsapp text,
  industry text,
  contribution_types text[] NOT NULL DEFAULT '{}',
  equipment_description text,
  expertise_description text,
  message text,
  source_page text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'NEW'
);
GRANT INSERT ON public.partner_inquiries TO anon, authenticated;
GRANT ALL ON public.partner_inquiries TO service_role;
ALTER TABLE public.partner_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a partner inquiry" ON public.partner_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.farmer_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL DEFAULT '',
  phone text,
  whatsapp text,
  email text,
  province text,
  municipality text,
  farm_type text,
  cooperative_name text,
  crops text,
  current_needs text,
  equipment text,
  irrigation text,
  transport text,
  storage text,
  collaboration_interest text,
  message text,
  status text NOT NULL DEFAULT 'NEW'
);
GRANT INSERT ON public.farmer_registrations TO anon, authenticated;
GRANT ALL ON public.farmer_registrations TO service_role;
ALTER TABLE public.farmer_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a farmer registration" ON public.farmer_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.volunteer_interest (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  first_name text NOT NULL DEFAULT '',
  last_name text,
  country text,
  location text,
  phone text,
  whatsapp text,
  email text,
  languages text,
  professional_background text,
  skills text,
  volunteer_categories text[] NOT NULL DEFAULT '{}',
  availability text,
  message text,
  status text NOT NULL DEFAULT 'NEW'
);
GRANT INSERT ON public.volunteer_interest TO anon, authenticated;
GRANT ALL ON public.volunteer_interest TO service_role;
ALTER TABLE public.volunteer_interest ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit volunteer interest" ON public.volunteer_interest FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text,
  email text NOT NULL,
  country text,
  preferred_language text NOT NULL DEFAULT 'es',
  source_page text NOT NULL DEFAULT '',
  active boolean NOT NULL DEFAULT true
);
CREATE UNIQUE INDEX newsletter_subscribers_email_key ON public.newsletter_subscribers (lower(email));
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.project_geo_points (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  project_id text NOT NULL DEFAULT 'matanzas',
  name text NOT NULL,
  type text NOT NULL DEFAULT 'OTHER',
  latitude double precision,
  longitude double precision,
  description text,
  public_visibility boolean NOT NULL DEFAULT false,
  verification_status text NOT NULL DEFAULT 'UNVERIFIED'
);
GRANT SELECT ON public.project_geo_points TO anon, authenticated;
GRANT ALL ON public.project_geo_points TO service_role;
ALTER TABLE public.project_geo_points ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public geo points are readable" ON public.project_geo_points FOR SELECT TO anon, authenticated USING (public_visibility = true);

CREATE TABLE public.project_land_zones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  project_id text NOT NULL DEFAULT 'matanzas',
  name text NOT NULL,
  description text,
  geojson jsonb,
  development_stage text,
  crop_type text,
  status text NOT NULL DEFAULT 'PLANNED',
  public_visibility boolean NOT NULL DEFAULT false
);
GRANT SELECT ON public.project_land_zones TO anon, authenticated;
GRANT ALL ON public.project_land_zones TO service_role;
ALTER TABLE public.project_land_zones ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public land zones are readable" ON public.project_land_zones FOR SELECT TO anon, authenticated USING (public_visibility = true);

CREATE TABLE public.project_streams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  project_id text NOT NULL DEFAULT 'matanzas',
  title text NOT NULL,
  description text,
  stream_type text NOT NULL DEFAULT 'FIELD_REPORT',
  provider text,
  playback_url text,
  poster_image text,
  location_name text,
  status text NOT NULL DEFAULT 'OFFLINE',
  is_public boolean NOT NULL DEFAULT true,
  requires_membership boolean NOT NULL DEFAULT false,
  started_at timestamptz,
  ended_at timestamptz
);
GRANT SELECT ON public.project_streams TO anon, authenticated;
GRANT ALL ON public.project_streams TO service_role;
ALTER TABLE public.project_streams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public streams are readable" ON public.project_streams FOR SELECT TO anon, authenticated USING (is_public = true);

CREATE OR REPLACE FUNCTION public.touch_updated_at() RETURNS TRIGGER
LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER participants_touch BEFORE UPDATE ON public.participants FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER geo_points_touch BEFORE UPDATE ON public.project_geo_points FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER land_zones_touch BEFORE UPDATE ON public.project_land_zones FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();