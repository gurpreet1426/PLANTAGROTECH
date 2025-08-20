-- Table: public.couponusers

-- DROP TABLE IF EXISTS public.couponusers;

CREATE TABLE IF NOT EXISTS public.couponusers
(
    couponuserid uuid NOT NULL,
	couponid uuid,
	userlimitcount integer NOT NULL DEFAULT 0,
	authorid uuid,	
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT couponusers_pkey PRIMARY KEY (couponuserid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.couponusers
    OWNER to postgres;