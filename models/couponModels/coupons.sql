-- Table: public.coupons

-- DROP TABLE IF EXISTS public.coupons;

CREATE TABLE IF NOT EXISTS public.coupons
(
    couponid uuid NOT NULL,
	couponname character(255) COLLATE pg_catalog."default" NOT NULL,
	couponType character(255) COLLATE pg_catalog."default" NOT NULL,
	maxdiscount integer NOT NULL DEFAULT 0,
	couponcode character(255) COLLATE pg_catalog."default" NOT NULL,
	usermaxlimit integer NOT NULL DEFAULT 0,
	percentagediscount integer NOT NULL DEFAULT 0,
	couponstatus character(255) COLLATE pg_catalog."default" DEFAULT 'Inactive'::bpchar,
	authorid uuid,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT coupons_pkey PRIMARY KEY (couponid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.coupons
    OWNER to postgres;